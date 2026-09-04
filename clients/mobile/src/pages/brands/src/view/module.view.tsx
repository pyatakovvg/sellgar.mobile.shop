import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { BrandCreateRoute, BrandRoute, ProductsRoute } from '@library/route-tokens';
import { Collection, useLoaderData, useNavigate, useSubmit, useViewport, Viewport } from '@sellgar/app/native';

import { BrandsPaginationControllerInterface } from '../classes/controller/brands-pagination/brands-pagination-controller.interface.ts';
import { BrandsControllerInterface } from '../classes/controller/brands/brands-controller.interface.ts';

export const ModuleView: React.FC = () => {
  const navigate = useNavigate();
  const runtime = useLoaderData(BrandsControllerInterface);
  const pagination = useLoaderData(BrandsPaginationControllerInterface);
  const loadNextPage = useSubmit(BrandsPaginationControllerInterface);
  const [collectionInput, setCollectionInput] = React.useState('');

  return (
    <Viewport>
      <Viewport.Slot.Sticky>
        <View style={styles.heading}>
          <Text style={styles.eyebrow}>Brands tab</Text>
          <Text style={styles.title}>Brands</Text>
          <Text style={styles.probe}>
            controller #{runtime.instance}, loader #{runtime.loads}, {runtime.duration} ms
          </Text>
        </View>
      </Viewport.Slot.Sticky>
      <Viewport.Collection>
        <Collection.Item>
          <View style={styles.item}>
            <Text style={styles.copy}>
              Switching tabs must retain the previous core runtime and its controller state.
            </Text>
          </View>
        </Collection.Item>
        <Collection.Item>
          <View style={styles.item}>
            <Pressable
              accessibilityLabel="Open brand drawer"
              accessibilityRole="button"
              onPress={() => void navigate.to(BrandCreateRoute)}
              style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
            >
              <Text style={styles.buttonText}>Open brand drawer</Text>
            </Pressable>
          </View>
        </Collection.Item>
        <Collection.Item>
          <View style={styles.item}>
            <Pressable
              accessibilityLabel="Open products tab"
              accessibilityRole="button"
              onPress={() => void navigate.to(ProductsRoute)}
              style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
            >
              <Text style={styles.buttonText}>Open products tab</Text>
            </Pressable>
          </View>
        </Collection.Item>
        <Collection.Item>
          <View style={styles.item}>
            <Pressable
              accessibilityLabel="Open brand #45"
              accessibilityRole="button"
              onPress={() => void navigate.to(BrandRoute, { params: { uuid: '45' } })}
              style={({ pressed }) => [styles.button, pressed ? styles.pressed : null]}
            >
              <Text style={styles.buttonText}>Open brand #45</Text>
            </Pressable>
          </View>
        </Collection.Item>
        <Collection.Section>
          {Array.from({ length: pagination.count }, (_, index) => (
            <Collection.Item key={`brand-probe-${index}`}>
              <View style={styles.item}>
                <Text style={styles.row}>Virtualized brand row {index + 1}</Text>
              </View>
            </Collection.Item>
          ))}
        </Collection.Section>
        <Collection.Item>
          <View style={styles.item}>
            <TextInput
              accessibilityLabel="Collection keyboard test value"
              onChangeText={setCollectionInput}
              placeholder="Collection keyboard test value"
              placeholderTextColor="#777d8e"
              style={styles.input}
              value={collectionInput}
            />
          </View>
        </Collection.Item>
        <Collection.Empty>
          <View style={styles.item}>
            <Text style={styles.copy}>No brands</Text>
          </View>
        </Collection.Empty>
        <Collection.LoadMore inProcess={loadNextPage.inProcess} onLoad={loadNextPage}>
          <View style={styles.loadingMore}>
            <ActivityIndicator color="#9d91ff" />
          </View>
        </Collection.LoadMore>
      </Viewport.Collection>
      <Viewport.Slot.Floating horizontal="end" vertical="bottom">
        <ScrollToStart />
      </Viewport.Slot.Floating>
      <Viewport.Refreshable />
    </Viewport>
  );
};

const ScrollToStart: React.FC = () => {
  const viewport = useViewport();

  return (
    <Pressable
      accessibilityLabel="Scroll brands to start"
      accessibilityRole="button"
      onPress={() => viewport.scrollToStart()}
      style={({ pressed }) => [styles.scrollToStart, pressed ? styles.pressed : null]}
    >
      <Text style={styles.scrollToStartText}>↑</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: { alignItems: 'center', backgroundColor: '#9d91ff', borderRadius: 14, height: 52, justifyContent: 'center' },
  buttonText: { color: '#11131a', fontSize: 16, fontWeight: '700' },
  copy: { color: '#a9adba', fontSize: 16, lineHeight: 23 },
  eyebrow: { color: '#9d91ff', fontSize: 13, fontWeight: '700', letterSpacing: 0.6 },
  heading: { backgroundColor: '#11131a', gap: 8, padding: 24 },
  input: {
    backgroundColor: '#171a22',
    borderColor: '#4b5265',
    borderRadius: 12,
    borderWidth: 1,
    color: '#f7f7fb',
    fontSize: 16,
    minHeight: 52,
    paddingHorizontal: 16,
  },
  item: { backgroundColor: '#11131a', paddingHorizontal: 24, paddingVertical: 8 },
  loadingMore: { alignItems: 'center', backgroundColor: '#11131a', padding: 24 },
  pressed: { opacity: 0.78 },
  probe: { color: '#6fd6b3', fontSize: 14, fontWeight: '700' },
  row: { backgroundColor: '#222631', borderRadius: 12, color: '#d7d9e2', fontSize: 15, padding: 16 },
  scrollToStart: {
    alignItems: 'center',
    backgroundColor: '#9d91ff',
    borderRadius: 28,
    height: 56,
    justifyContent: 'center',
    marginBottom: 24,
    marginRight: 24,
    width: 56,
  },
  scrollToStartText: { color: '#11131a', fontSize: 28, fontWeight: '800' },
  title: { color: '#f7f7fb', fontSize: 34, fontWeight: '800' },
});
