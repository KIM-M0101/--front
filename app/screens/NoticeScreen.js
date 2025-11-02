import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function NoticeScreen() {
  const notices = [
    { id: 1, title: '지점 휴일 안내', content: '내일은 지점이 휴무입니다.' },
    { id: 2, title: '메뉴 교육', content: '이번 주 금요일에 신메뉴 교육이 있습니다.' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>공지사항</Text>
      <FlatList
        data={notices}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.notice}>
            <Text style={styles.noticeTitle}>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  notice: { backgroundColor: '#f2f2f2', padding: 10, borderRadius: 8, marginBottom: 8 },
  noticeTitle: { fontWeight: 'bold', marginBottom: 4 }
});
