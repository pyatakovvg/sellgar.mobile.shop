import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

const svgCache = new Map<string, string>();

const loadingPromises = new Map<string, Promise<string>>();

async function loadSvg(uri: string): Promise<string> {
  if (svgCache.has(uri)) {
    return svgCache.get(uri)!;
  }

  let promise = loadingPromises.get(uri);
  if (!promise) {
    promise = fetch(uri)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch SVG: ${res.status}`);
        }
        return res.text();
      })
      .then((text) => {
        svgCache.set(uri, text);
        loadingPromises.delete(uri);
        return text;
      })
      .catch((err) => {
        loadingPromises.delete(uri);
        throw err;
      });

    loadingPromises.set(uri, promise);
  }

  return promise;
}

export const CachedSvgUri: React.FC<{
  uri: string;
  width?: number | string;
  height?: number | string;
  style?: StyleProp<ViewStyle>;
  onLoad?: () => void;
  onError?: (error: any) => void;
}> = ({ uri, width, height, style, onLoad, onError }) => {
  const [xml, setXml] = React.useState<string | null>(svgCache.get(uri) || null);
  const [error, setError] = React.useState<any>(null);

  React.useEffect(() => {
    if (xml) {
      onLoad?.();
      return;
    }

    loadSvg(uri)
      .then((text) => {
        setXml(text);
        onLoad?.();
      })
      .catch((err) => {
        setError(err);
        onError?.(err);
      });
  }, [uri, xml, onLoad, onError]);

  if (error || !xml) {
    return null;
  }

  return <SvgXml xml={xml} width={width} height={height} style={style} />;
};
