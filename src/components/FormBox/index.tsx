import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';

import { Container } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';
import { ToastAndroid } from 'react-native';

export function FormBox() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);

   const handleAddProduct = async () => {
      try {
        firestore()
        .collection('products')
        .add({
          description,
          quantity,
          done: false,
          createdAt: firestore.FieldValue.serverTimestamp()
        })  
        ToastAndroid.showWithGravity('Produto adicionado', 400, ToastAndroid.BOTTOM)
      } catch (error) {
        console.error(error)        
      }
  } 


  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
        onChangeText={setDescription}
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        onChangeText={(value) => setQuantity(Number(value))}
        style={{ marginHorizontal: 8 }}
      />

      <ButtonIcon
        size='large'
        icon="add-shopping-cart"
        onPress={handleAddProduct}
      />
    </Container>
  );
}
