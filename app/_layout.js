import { Slot } from 'expo-router';
import { AuthProvider } from './ctx/auth';

export default function Root() {
  return (
    <AuthProvider>
      <Slot />
    </AuthProvider>
  );
}