import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function SelectNganh({ value, onChange }) {
  const dsNganh = [
    "Công nghệ thông tin",
    "Kinh tế",
    "Ngôn ngữ Anh",
    "Y khoa"
  ];

  return (
    <View style={{ marginBottom: 12 }}>
      <Text>Ngành xét tuyển</Text>
      <Picker selectedValue={value} onValueChange={onChange}>
        <Picker.Item label="Chọn ngành" value="" />
        {dsNganh.map((item, idx) => (
          <Picker.Item key={idx} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}
