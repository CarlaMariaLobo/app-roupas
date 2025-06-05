// app/index.tsx
import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Página Inicial</Text>
      <Button title="Ir para detalhes" onPress={() => router.push('/detalhes')} />
    </View>
  );
}
