import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {firebase} from '@react-native-firebase/firestore';

import {styles} from './styles';
import {Product, ProductProps} from '../Product';

import {shoppingListExample} from '../../utils/shopping.list.data';

export function ShoppingList() {
  const [products, setProducts] = useState<ProductProps[]>();

  const _loadProducts = async () => {
    const subscribe = await firebase
      .firestore()
      .collection('products')
      .onSnapshot(querySnapshot => {
        const product = querySnapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];

        setProducts(product);
      });

    return () => subscribe();
  };

  useEffect(() => {
    _loadProducts();
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({item}) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
