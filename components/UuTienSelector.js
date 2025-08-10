import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function UuTienSelector({ value, onChange }) {
  const dsUuTien = ["Không", "Ưu tiên 1", "Ưu tiên 2", "Ưu tiên 3"];

  return (
    <View style={{ marginBottom: 12 }}>
      <Text>Ưu tiên</Text>
      <Picker selectedValue={value} onValueChange={onChange}>
        {dsUuTien.map((item, idx) => (
          <Picker.Item key={idx} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}
