import React from 'react';
import { Text } from 'react-native';
import { Redirect, Slot } from 'expo-router';

import { useAuth } from '../ctx/auth';

export default function Protected() {
  const auth = useAuth();

  if (auth.PisLoading || auth.UisLoading) {
    return <Text>Loading...</Text>;
  }


  if (!auth.validated) {
    return <Redirect href="/loginpage" />;
  }

  return <Slot />;
}
