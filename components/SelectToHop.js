import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SelectToHop({ value, onChange }) {
  const dsToHop = [
    "A00 - Toán, Lý, Hóa",
    "A01 - Toán, Lý, Tiếng Anh",
    "D01 - Toán, Văn, Tiếng Anh",
    "B00 - Toán, Hóa, Sinh"
  ];

  return (
    <View style={{ marginBottom: 12 }}>
      <Text>Tổ hợp xét tuyển</Text>
      <Picker selectedValue={value} onValueChange={onChange}>
        <Picker.Item label="Chọn tổ hợp" value="" />
        {dsToHop.map((item, idx) => (
          <Picker.Item key={idx} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}
