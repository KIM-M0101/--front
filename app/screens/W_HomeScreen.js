import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ChevronRight, Bell, UserCircle } from "lucide-react-native";

export default function W_HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>근무지 1</Text>

        <View style={styles.iconRow}>
          <UserCircle size={32} color="#000" />
          <Bell size={32} color="#000" style={styles.iconSpacing} />
        </View>
      </View>

      {/* Menu card: 공지사항 */}
      <TouchableOpacity style={[styles.card, styles.cardFirst]}>
        <Text style={styles.cardText}>공지사항</Text>
        <ChevronRight size={30} color="#CAC4D0" />
      </TouchableOpacity>

      {/* Menu card: 근무 관리 */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>근무 관리</Text>
        <ChevronRight size={30} color="#CAC4D0" />
      </TouchableOpacity>

      {/* Menu card: 근무 가능 시간 */}
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>근무 가능 시간</Text>
        <ChevronRight size={30} color="#CAC4D0" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f5", // tailwind zinc-100 비슷한 색
    alignItems: "center",
  },
  header: {
    width: "100%",
    paddingHorizontal: 24, // px-6
    paddingTop: 64,        // pt-16
    paddingBottom: 16,     // pb-4
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 24, // text-3xl
    fontWeight: "bold",
    color: "#000",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconSpacing: {
    marginLeft: 16, // gap-4 대신
  },
  card: {
    width: "91.666%", // w-11/12 정도
    backgroundColor: "#fff",
    borderRadius: 24,  // rounded-3xl
    padding: 24,       // p-6
    marginTop: 16,     // mt-4 (첫 카드만 따로)
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // shadow
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardFirst: {
    marginTop: 24, // mt-6
  },
  cardText: {
    fontSize: 18,       // text-xl
    fontWeight: "600",  // font-semibold
    color: "#000",
  },
});
