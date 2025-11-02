import React from "react";
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>알바 스케줄러 홈</Text>
      <Button title="근무표 보기" onPress={() => navigation.navigate('Schedule')} />
      <Button title="근무 교환" onPress={() => navigation.navigate('ShiftSwap')} />
      <Button title="급여 관리" onPress={() => navigation.navigate('Salary')} />
      <Button title="공지사항" onPress={() => navigation.navigate('Notice')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 20 }
});
