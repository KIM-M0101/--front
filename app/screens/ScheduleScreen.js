import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "lucide-react-native";

export default function ScheduleScreen() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dates = [
    ["28", "29", "30", "31", "01", "02", "03"],
    ["04", "05", "06", "07", "08", "09", "10"],
    ["11", "12", "13", "14", "15", "16", "17"],
    ["18", "19", "20", "21", "22", "23", "24"],
    ["25", "26", "27", "28", "29", "30", "01"],
  ];

  // 근무가 있는 날짜
  const workTime = {
    "04": "12:00–14:00",
    "11": "12:00–14:00",
    "18": "12:00–14:00",
    "25": "12:00–14:00",
  };

  return (
    <View className="flex-1 bg-zinc-100 px-5 pt-16">

      {/* Header */}
      <View className="flex-row items-center mb-6">
        <TouchableOpacity>
          <ArrowLeft size={32} color="#000" />
        </TouchableOpacity>
        <Text className="text-2xl font-bold ml-4 text-black">근무표</Text>
      </View>

      {/* Month */}
      <View className="flex-row justify-center mb-4">
        <Text className="text-xl font-bold text-black">10월</Text>
      </View>

      {/* Day Names */}
      <View className="flex-row justify-between mb-2">
        {days.map((d, idx) => (
          <Text
            key={idx}
            className={`w-10 text-center font-bold ${
              idx === 0 ? "text-red-500" : idx === 6 ? "text-blue-600" : "text-black"
            }`}
          >
            {d}
          </Text>
        ))}
      </View>

      {/* Calendar */}
      <View>
        {dates.map((week, wIdx) => (
          <View key={wIdx} className="flex-row justify-between mb-4">

            {week.map((d, idx) => {
              const isWork = workTime[d];

              return (
                <View key={idx} className="items-center w-10">
                  
                  {/* 날짜 */}
                  <Text
                    className={`text-lg font-bold ${
                      idx === 0 ? "text-red-500" : idx === 6 ? "text-blue-600" : "text-black"
                    }`}
                  >
                    {d}
                  </Text>

                  {/* 근무시간 표시 */}
                  {isWork && (
                    <View className="bg-red-200 rounded-md mt-1 px-1 py-0.5">
                      <Text className="text-[7px] text-black text-center">
                        {isWork}
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}

          </View>
        ))}
      </View>
    </View>
  );
}
