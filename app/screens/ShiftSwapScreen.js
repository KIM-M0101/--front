
import React from 'react';                          
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ShiftSwapScreen() {
  const requestSwap = () => {
    alert('근무 교환 요청이 전송되었습니다!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>근무 교환 요청</Text>
      <Button title="교환 요청 보내기" onPress={requestSwap} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 18, marginBottom: 20 },
});
