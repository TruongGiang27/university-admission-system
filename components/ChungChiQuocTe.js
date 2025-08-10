import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function ChungChiQuocTe({ dsCCQT, value, onChange }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text>Chứng chỉ Quốc tế</Text>
      <Picker selectedValue={value} onValueChange={onChange}>
        <Picker.Item label="Chọn chứng chỉ" value="" />
        {dsCCQT.map((item, idx) => (
          <Picker.Item key={idx} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}
