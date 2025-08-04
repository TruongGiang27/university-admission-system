// File: frontend/App.js

import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button, StyleSheet, Alert } from "react-native";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [form, setForm] = useState({
    doiTuong: "1",
    diemDGNL: "",
    diemTNTHPT: "",
    diemTB10: "",
    diemTB11: "",
    diemTB12: "",
    diemCongThanhTich: "",
    diemUuTienKV_DT: "",
    SAT: "",
    ACT: "",
    IB: "",
    A_Level: ""
  });

  const [ketQua, setKetQua] = useState(null);

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    try {
      const parsedData = {
        doiTuong: parseInt(form.doiTuong),
        diemDGNL: parseFloat(form.diemDGNL) || 0,
        diemTNTHPT: parseFloat(form.diemTNTHPT) || 0,
        diemTB10: parseFloat(form.diemTB10) || 0,
        diemTB11: parseFloat(form.diemTB11) || 0,
        diemTB12: parseFloat(form.diemTB12) || 0,
        diemCongThanhTich: parseFloat(form.diemCongThanhTich) || 0,
        diemUuTienKV_DT: parseFloat(form.diemUuTienKV_DT) || 0,
        SAT: form.SAT ? parseInt(form.SAT) : null,
        ACT: form.ACT ? parseInt(form.ACT) : null,
        IB: form.IB ? parseInt(form.IB) : null,
        A_Level: form.A_Level || null
      };

      const res = await axios.post("http://localhost:5555/api/tinh-diem", parsedData);
      setKetQua(res.data);
    } catch (error) {
      console.error(error);
      Alert.alert("Lỗi", "Không thể tính điểm. Kiểm tra lại dữ liệu đầu vào.");
    }
  };

  const renderInput = (label, key, keyboardType = "default") => (
    <View style={styles.inputGroup}>
      <Text>{label}</Text>
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        value={form[key]}
        onChangeText={(value) => handleChange(key, value)}
        placeholder={label}
      />
    </View>
  );

  const doiTuong = parseInt(form.doiTuong);

  const showDGNL = doiTuong === 1;
  const showTNTHPT = doiTuong === 1 || doiTuong === 2 || doiTuong === 4;
  const showHocLuc = true; // luôn hiển thị điểm TB lớp 10-12
  const showThanhTich = true;
  const showUuTien = true;
  const showChungChiQT = doiTuong === 3 || doiTuong === 4;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tính điểm xét tuyển đại học 2025</Text>

      <View style={styles.inputGroup}>
        <Text>Chọn đối tượng xét tuyển:</Text>
        <Picker
          selectedValue={form.doiTuong}
          onValueChange={(value) => handleChange("doiTuong", value)}>
          <Picker.Item label="Thí sinh CÓ kết quả thi Đánh giá Năng lực ĐHQG-HCM năm 2025" value="1" />
          <Picker.Item label="Thí sinh KHÔNG CÓ kết quả thi Đánh giá Năng lực ĐHQG-HCM năm 2025" value="2" />
          <Picker.Item label="Thí sinh tốt nghiệp chương trình THPT nước ngoài" value="3" />
          <Picker.Item label="Thí sinh tốt nghiệp chương trình THPT Việt Nam, dùng Chứng chỉ tuyển sinh Quốc tế" value="4" />
        </Picker>
      </View>

      {showDGNL && renderInput("Điểm ĐGNL", "diemDGNL", "numeric")}
      {showTNTHPT && renderInput("Tổng điểm TNTHPT (3 môn)", "diemTNTHPT", "numeric")}

      {showHocLuc && renderInput("Điểm TB lớp 10", "diemTB10", "numeric")}
      {showHocLuc && renderInput("Điểm TB lớp 11", "diemTB11", "numeric")}
      {showHocLuc && renderInput("Điểm TB lớp 12", "diemTB12", "numeric")}

      {showThanhTich && renderInput("Điểm cộng thành tích", "diemCongThanhTich", "numeric")}
      {showUuTien && renderInput("Điểm ưu tiên khu vực/đối tượng", "diemUuTienKV_DT", "numeric")}

      {showChungChiQT && renderInput("SAT", "SAT", "numeric")}
      {showChungChiQT && renderInput("ACT", "ACT", "numeric")}
      {showChungChiQT && renderInput("IB", "IB", "numeric")}
      {showChungChiQT && renderInput("A-Level", "A_Level")}

      <Button title="Tính điểm" onPress={handleSubmit} />

      {ketQua && (
        <View style={styles.result}>
          <Text>📊 Kết quả:</Text>
          <Text>Điểm Năng Lực: {ketQua.diemNangLuc}</Text>
          <Text>Điểm Học Lực: {ketQua.diemHocLuc}</Text>
          <Text>Điểm Cộng: {ketQua.diemCong}</Text>
          <Text>Điểm Ưu Tiên: {ketQua.diemUuTien}</Text>
          <Text style={styles.finalScore}>🎯 Điểm Xét Tuyển: {ketQua.diemXetTuyen}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 100
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20
  },
  inputGroup: {
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    borderRadius: 5
  },
  result: {
    marginTop: 20,
    backgroundColor: "#eef",
    padding: 10,
    borderRadius: 5
  },
  finalScore: {
    fontWeight: "bold",
    color: "#0a0",
    fontSize: 16,
    marginTop: 5
  }
});
