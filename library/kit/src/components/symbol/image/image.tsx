import React from 'react';
import { ImageProps, ImageSourcePropType, ImageURISource, View, StyleSheet, Image as RNImage } from 'react-native';

import { CachedSvgUri } from '../../misc';
import { Process } from './process';
import { Exception } from './exception';

import { createStyles } from './default.styles.ts';

interface IProps extends ImageProps {
  width?: number;
  height?: number;
  source: ImageSourcePropType;
}

export const Image: React.FC<IProps> = ({ width, height, source, ...props }) => {
  const [isError, setError] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const baseStyles = createStyles();

  const isSvg = React.useMemo(() => {
    if (typeof source === 'object' && 'uri' in source && typeof source.uri === 'string') {
      return source.uri.toLowerCase().endsWith('.svg');
    }
    return false;
  }, [source]);

  const imageStyle = React.useMemo(
    () => StyleSheet.flatten([baseStyles.image, props.style, isLoading || isError ? baseStyles.hide : {}]),
    [props.style, isLoading, isError],
  );

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setError(true);
    setLoading(false);
  };

  return (
    <View style={[baseStyles.wrapper, { width: width ?? 'auto', height: height ?? 'auto' }]}>
      {isError && (
        <View style={baseStyles.process}>
          <Exception size={width || 20} />
        </View>
      )}
      {isLoading && !isError && (
        <View style={baseStyles.exception}>
          <Process size={width || 20} />
        </View>
      )}
      {isSvg ? (
        <CachedSvgUri
          uri={(source as ImageURISource).uri || ''}
          style={imageStyle}
          width={width}
          height={height}
          onLoad={handleLoad}
          onError={handleError}
        />
      ) : (
        <RNImage source={source} style={imageStyle} onLoad={handleLoad} onError={handleError} {...props} />
      )}
    </View>
  );
};
