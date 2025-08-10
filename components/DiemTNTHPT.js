import React from "react";
import { View, Text, TextInput } from "react-native";

export default function DiemTNTHPT({ value, onChange }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text>Điểm TN THPT (%)</Text>
      <TextInput
        keyboardType="numeric"
        value={value}
        onChangeText={onChange}
        placeholder="Nhập điểm tốt nghiệp"
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
