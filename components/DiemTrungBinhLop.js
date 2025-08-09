import React from "react";
import { View, Text, TextInput } from "react-native";

export default function DiemTrungBinhLop({ lop, value, onChange }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text>Điểm TB lớp {lop}</Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        placeholder={`Nhập điểm TB lớp ${lop}`}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 8,
          borderRadius: 4
        }}
      />
    </View>
  );
}
