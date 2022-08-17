import React from 'react';
import {View, Button, Alert} from 'react-native';
import {firebase} from '@react-native-firebase/auth';

import {Container, Label} from './styles';
import {Input} from '../../components/Input';

export const Register: React.FC = () => {
  const [name, setName] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  async function handleSubmit() {
    console.log(name, password);
    try {
      await firebase.auth().createUserWithEmailAndPassword(name, password);
      Alert.alert('Cadastrado com sucesso');
    } catch (error) {
      console.error('error on register user', error);
    }
  }

  const handleResetPassword = async () => {
    try {
      await firebase.auth().sendPasswordResetEmail(name);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Label>Email</Label>
      <Input name="email" onChangeText={setName} />
      <Label>Senha</Label>
      <Input name="password" onChangeText={setPassword} secureTextEntry />
      <Button title="Enviar" onPress={handleSubmit} />
      <Button title="Esqueci minha senha" onPress={handleResetPassword} />
    </Container>
  );
};
