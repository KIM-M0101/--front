import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";


export default function ScheduleScreen() {
  const [schedule, setSchedule] = useState([
    { id: 1, name: '김민수', day: '월요일', time: '09:00 ~ 14:00' },
    { id: 2, name: '박지영', day: '화요일', time: '14:00 ~ 19:00' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>주간 근무표</Text>
      <FlatList
        data={schedule}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>{item.day}</Text>
            <Text>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  card: { backgroundColor: '#eee', padding: 10, marginBottom: 8, borderRadius: 8 }
});
