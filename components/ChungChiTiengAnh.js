import React from "react";
import { View, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function ChungChiTiengAnh({ dsCCTA, value, onChange }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <Text>Chứng chỉ Tiếng Anh</Text>
      <Picker selectedValue={value} onValueChange={onChange}>
        <Picker.Item label="Chọn chứng chỉ" value="" />
        {dsCCTA.map((item, idx) => (
          <Picker.Item key={idx} label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
}
