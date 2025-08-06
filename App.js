import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [form, setForm] = useState({
    doiTuong: "",
    nganhXetTuyen: "",
    toHopXetTuyen: "",
    diemHocLuc: "",
    ccta: "",
    diemCCTA: "",
    diemTN1: "",
    diemTN2: "",
    diemTN3: "",
    ccqt: "",
    loaiCCQT: "",
    diemCCQT: "",
    tb10_1: "",
    tb10_2: "",
    tb10_3: "",
    tb11_1: "",
    tb11_2: "",
    tb11_3: "",
    tb12_1: "",
    tb12_2: "",
    tb12_3: "",
    diemCongThanhTich: "",
    uuTienKV: "",
    uuTienDT: "",
  });

  const [xemKetQua, setXemKetQua] = useState(false);

  const dsNganh = [
    "Công nghệ thông tin",
    "Kinh tế",
    "Y khoa",
    "Kỹ thuật ô tô",
    "Quản trị kinh doanh",
    "Thiết kế đồ họa",
  ];

  const dsToHop = [
    "A00 (Toán, Lý, Hóa)",
    "A01 (Toán, Lý, Anh)",
    "B00 (Toán, Hóa, Sinh)",
    "C00 (Văn, Sử, Địa)",
    "D01 (Toán, Văn, Anh)",
    "D07 (Toán, Hóa, Anh)",
  ];

  const dsKhuVuc = ["KV1", "KV2-NT", "KV2", "KV3"];
  const dsDoiTuong = ["Ưu tiên 1", "Ưu tiên 2", "Không ưu tiên"];

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });
  };

  const renderInput = (label, key, keyboardType = "default") => (
    <View style={styles.inputGroup} key={key}>
      {/* <Text style={styles.label}>{label}</Text> */}
      <TextInput
        style={styles.input}
        keyboardType={keyboardType}
        value={form[key]}
        onChangeText={(value) => handleChange(key, value)}
        placeholder={label}
        placeholderTextColor="#999"
      />
    </View>
  );

  const handleSubmit = () => {
    setXemKetQua(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎓 Tính điểm xét tuyển đại học 2025</Text>

      {/* Picker chung */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Chọn đối tượng xét tuyển:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.doiTuong}
            onValueChange={(value) => handleChange("doiTuong", value)}
          >
            <Picker.Item label="-- Chọn đối tượng --" value="" />
            <Picker.Item
              label="Thí sinh CÓ kết quả thi ĐGNL ĐHQG-HCM 2025"
              value="1"
            />
            <Picker.Item
              label="Thí sinh KHÔNG CÓ kết quả thi ĐGNL ĐHQG-HCM 2025"
              value="2"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp chương trình THPT nước ngoài"
              value="3"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp THPT Việt Nam, dùng chứng chỉ quốc tế"
              value="4"
            />
            <Picker.Item
              label="Thí sinh dự tính du học theo Chương trình Chuyển tiếp Quốc tế"
              value="5"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp chương trình THPT Việt Nam"
              value="6"
            />
            <Picker.Item
              label="Thí sinh tốt nghiệp chương trình THPT nước ngoài"
              value="7"
            />
            <Picker.Item
              label="Thí sinh dùng Chứng chỉ Tuyển sinh Quốc tế SAT I"
              value="8"
            />
          </Picker>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Chọn ngành xét tuyển:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.nganhXetTuyen}
            onValueChange={(value) => handleChange("nganhXetTuyen", value)}
          >
            <Picker.Item label="-- Chọn ngành --" value="" />
            {dsNganh.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        </View>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Chọn tổ hợp xét tuyển:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={form.toHopXetTuyen}
            onValueChange={(value) => handleChange("toHopXetTuyen", value)}
          >
            <Picker.Item label="-- Chọn tổ hợp --" value="" />
            {dsToHop.map((item, index) => (
              <Picker.Item key={index} label={item} value={item} />
            ))}
          </Picker>
        </View>
      </View>

      {form.doiTuong !== "" && (
        <>
          <Text style={styles.sectionText}>Điểm học lực</Text>
          <Text style={styles.sectionTitle}>Chứng chỉ tiếng Anh</Text>
          <View style={styles.radioGroup}>
            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => handleChange("ccta", "co")}
            >
              <View style={styles.radioCircle}>
                {form.ccta === "co" && <View style={styles.selectedDot} />}

              </View>
              <Text style={styles.radioLabel}>Có CCTA</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.radioOption}
              onPress={() => handleChange("ccta", "khong")}
            >
              <View style={styles.radioCircle}>
                {form.ccta === "khong" && <View style={styles.selectedDot} />}
              </View>
              <Text style={styles.radioLabel}>Không có CCTA</Text>
            </TouchableOpacity>
          </View>
          {form.ccta === "co" && (
            <View style={styles.ccqtRow}>
              <View style={[styles.pickerContainer, styles.ccqtPicker]}>
                <Picker
                  selectedValue={form.ccta}
                  onValueChange={(value) => handleChange("loaiCCTA", value)}
                >
                  <Picker.Item label="Loại CCTA" value="" />
                  <Picker.Item label="IELTS" value="IELTS" />
                  <Picker.Item label="TOEFL" value="TOEFL" />
                  <Picker.Item label="Cambridge" value="Cambridge" />
                  <Picker.Item label="Duolingo" value="Duolingo" />
                </Picker>
              </View>
              <TextInput
                style={[styles.input, styles.ccqtInput]}
                keyboardType="numeric"
                placeholder="Điểm CCTA tương ứng"
                value={form.diemCCTA}
                onChangeText={(value) => handleChange("diemCCTA", value)}
              />
            </View>
          )}

          {form.doiTuong === "4" ? (
            <>
              <Text style={styles.sectionTitle}>Điểm năng lực</Text>
              <View style={styles.ccqtRow}>
                <View style={[styles.pickerContainer, styles.ccqtPicker]}>
                  <Picker
                    selectedValue={form.loaiCCQT}
                    onValueChange={(value) => handleChange("loaiCCQT", value)}
                  >
                    <Picker.Item label="Loại CCQT" value="" />
                    <Picker.Item label="SAT" value="SAT" />
                    <Picker.Item label="ACT" value="ACT" />
                    <Picker.Item label="IELTS" value="IELTS" />
                    <Picker.Item label="TOEFL" value="TOEFL" />
                    <Picker.Item label="IB" value="IB" />
                  </Picker>
                </View>
                <TextInput
                  style={[styles.input, styles.ccqtInput]}
                  keyboardType="numeric"
                  placeholder="Điểm CCQT tương ứng"
                  value={form.diemCCQT}
                  onChangeText={(value) => handleChange("diemCCQT", value)}
                />
              </View>
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Điểm năng lực</Text>
              {form.doiTuong === "1" &&
                renderInput(
                  "Điểm bài đánh giá năng lực", "diemHocLuc", "numeric"
                )}

              {form.doiTuong === "2" && (
                <View style={styles.placeholderBox}>
                  <Text style={styles.placeholderText}>
                    Hệ thống sẽ tự tính dựa trên Điểm TNTHPT
                  </Text>
                </View>
              )}

              {form.doiTuong === "3" && (
                <View style={styles.placeholderBox}>
                  <Text style={styles.placeholderText}>
                    Hệ thống sẽ tự tính dựa trên Điểm TNTHPT
                  </Text>
                </View>
              )}

              {form.doiTuong === "5" && (
                <>
                  {renderInput("Điểm phỏng vấn", "diemPhongVan", "numeric")}
                  {renderInput("Điểm bài luận", "diemBaiLuan", "numeric")}
                </>
              )}

              {form.doiTuong === "6" && (
                <View style={styles.placeholderBox}>
                  <Text style={styles.placeholderText}>
                    Hệ thống sẽ tự tính dựa trên Điểm TNTHPT
                  </Text>
                </View>
              )}


              {form.doiTuong === "7" && (
                <View style={styles.placeholderBox}>
                  <Text style={styles.placeholderText}>
                    Hệ thống sẽ tự tính dựa trên Điểm TNTHPT
                  </Text>
                </View>
              )}

              {form.doiTuong === "8" && (
                <View style={styles.placeholderBox}>
                  <Text style={styles.placeholderText}>
                    Hệ thống sẽ tự tính dựa trên Điểm TNTHPT
                  </Text>
                </View>
              )}
            </>
          )}

          <Text style={styles.sectionTitle}>Điểm TNTHPT (3 môn tổ hợp):</Text>
          {form.doiTuong !== "1" &&
            form.doiTuong !== "2" &&
            form.doiTuong !== "4" &&
              form.doiTuong !== "6" &&
              
            (
              <>
                <Text style={styles.sectionTitle}>Chứng chỉ quốc tế</Text>
                <View style={styles.radioGroup}>
                  <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleChange("ccqt", "co")}
                  >
                    <View style={styles.radioCircle}>
                      {form.ccqt === "co" && (
                        <View style={styles.selectedDot} />
                      )}
                    </View>
                    <Text style={styles.radioLabel}>Có Chứng chỉ quốc tế</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleChange("ccqt", "khong")}
                  >
                    <View style={styles.radioCircle}>
                      {form.ccqt === "khong" && (
                        <View style={styles.selectedDot} />
                      )}
                    </View>
                    <Text style={styles.radioLabel}>
                      Không có Chứng chỉ quốc tế
                    </Text>
                  </TouchableOpacity>
                </View>

                {form.ccqt === "co" && (
                  <View style={styles.ccqtRow}>
                    <View style={[styles.pickerContainer, styles.ccqtPicker]}>
                      <Picker
                        selectedValue={form.loaiCCQT}
                        onValueChange={(value) =>
                          handleChange("loaiCCQT", value)
                        }
                      >
                        <Picker.Item label="Loại CCQT" value="" />
                        <Picker.Item label="SAT" value="SAT" />
                        <Picker.Item label="ACT" value="ACT" />
                        <Picker.Item label="IELTS" value="IELTS" />
                        <Picker.Item label="TOEFL" value="TOEFL" />
                        <Picker.Item label="IB" value="IB" />
                      </Picker>
                    </View>
                    <TextInput
                      style={[styles.input, styles.ccqtInput]}
                      keyboardType="numeric"
                      placeholder="Điểm CCQT tương ứng"
                      value={form.diemCCQT}
                      onChangeText={(value) => handleChange("diemCCQT", value)}
                    />
                  </View>
                )}

                {form.ccqt === "khong" && (
                  <View style={styles.inputGroup}>
                    <Text style={styles.label}>Điểm chứng chỉ quốc tế:</Text>
                    <View style={styles.placeholderBox}>
                      <Text style={styles.placeholderText}>
                        Hệ thống sẽ tự tính dựa trên Điểm THPT
                      </Text>
                    </View>
                  </View>
                )}
              </>
            )}

          {form.doiTuong !== "3" && form.doiTuong !== "7" && (
            <>
  
              {!(form.doiTuong === "5" && form.ccqt === "co") && (
                <>
                  {renderInput("Điểm TN môn 1", "diemTN1", "numeric")}
                  {renderInput("Điểm TN môn 2", "diemTN2", "numeric")}

         
                  {(form.doiTuong === "5" || form.doiTuong === "6") && form.ccta === "co" ? (
                    <View style={styles.inputGroup}>
                      <View style={styles.placeholderBox}>
                        <Text style={styles.placeholderText}>
                          {form.diemCCTA
                            ? `Điểm tiếng Anh lúc này Hệ thống quy đổi từ CCTA: ${form.diemCCTA}`
                            : "Vui lòng nhập CCTA để hệ thống quy đổi Điểm tiếng Anh"}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    renderInput("Điểm TN môn 3", "diemTN3", "numeric")
                  )}
                </>
              )}
            </>
          )}


          <Text style={styles.sectionTitle}>
            Điểm TB lớp 10 (3 môn tổ hợp):
          </Text>
          {renderInput("TB10 môn 1", "tb10_1", "numeric")}
          {renderInput("TB10 môn 2", "tb10_2", "numeric")}
          {renderInput("TB10 môn 3", "tb10_3", "numeric")}

          <Text style={styles.sectionTitle}>    {form.doiTuong !== "3" && form.doiTuong !== "7" && (
            <>
              {/* Trường hợp KHÔNG phải đối tượng 5 và KHÔNG có CCQT thì hiển thị các ô điểm */}
              {!(form.doiTuong === "5" && form.ccqt === "co") && (
                <>
                  {renderInput("Điểm TN môn 1", "diemTN1", "numeric")}
                  {renderInput("Điểm TN môn 2", "diemTN2", "numeric")}

                  {/* Nếu có CCTA, thay Điểm TN môn 3 bằng text quy đổi */}
                  {(form.doiTuong === "5" || form.doiTuong === "6") && form.ccta === "co" ? (
                    <View style={styles.inputGroup}>
                      <View style={styles.placeholderBox}>
                        <Text style={styles.placeholderText}>
                          {form.diemCCTA
                            ? `Điểm tiếng Anh lúc này Hệ thống quy đổi từ CCTA: ${form.diemCCTA}`
                            : "Vui lòng nhập CCTA để hệ thống quy đổi Điểm tiếng Anh"}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    renderInput("Điểm TN môn 3", "diemTN3", "numeric")
                  )}
                </>
              )}
            </>
          )}
            Điểm TB lớp 11 (3 môn tổ hợp):
          </Text>
          {renderInput("TB11 môn 1", "tb11_1", "numeric")}
          {renderInput("TB11 môn 2", "tb11_2", "numeric")}
          {renderInput("TB11 môn 3", "tb11_3", "numeric")}

          <Text style={styles.sectionTitle}>
            Điểm TB lớp 12 (3 môn tổ hợp):
          </Text>
          {renderInput("TB12 môn 1", "tb12_1", "numeric")}
          {renderInput("TB12 môn 2", "tb12_2", "numeric")}
          {((form.doiTuong === "5" || form.doiTuong === "6" || form.doiTuong === "7" || form.doiTuong === "8") && form.ccta === "co") ? (
            <View style={styles.inputGroup}>
              <View style={styles.placeholderBox}>
                <Text style={styles.placeholderText}>
                  {form.diemCCTA
                    ? `Điểm tiếng Anh lúc này Hệ thống quy đổi từ CCTA: ${form.diemCCTA}`
                    : "Vui lòng nhập CCTA để hệ thống quy đổi Điểm tiếng Anh"}
                </Text>
              </View>
            </View>
          ) : (
            <>
              {renderInput("TB12 môn 3", "tb12_3", "numeric")}
            </>
          )}

          <Text style={styles.sectionText}>Điểm cộng:</Text>
          {renderInput("Điểm cộng thành tích", "diemCongThanhTich", "numeric")}

          <Text style={styles.sectionText}>Điểm ưu tiên:</Text>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Chọn khu vực ưu tiên:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={form.uuTienKV}
                onValueChange={(value) => handleChange("uuTienKV", value)}
              >
                <Picker.Item label="-- Chọn khu vực --" value="" />
                {dsKhuVuc.map((item, index) => (
                  <Picker.Item key={index} label={item} value={item} />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Chọn đối tượng ưu tiên:</Text>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={form.uuTienDT}
                onValueChange={(value) => handleChange("uuTienDT", value)}
              >
                <Picker.Item label="-- Chọn đối tượng --" value="" />
                {dsDoiTuong.map((item, index) => (
                  <Picker.Item key={index} label={item} value={item} />
                ))}
              </Picker>
            </View>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Tính điểm</Text>
          </TouchableOpacity>

          {xemKetQua && (
            <View style={styles.result}>
              <Text style={styles.sectionTitle}>📋 Dữ liệu bạn đã nhập:</Text>
              {Object.entries(form).map(([key, value]) => (
                <Text key={key}>
                  {key}: {value || "(trống)"}
                </Text>
              ))}
            </View>
          )}
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 40,
    backgroundColor: "#F4F7FE",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#011F82",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: 18,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#2C3E50",
  },
  input: {
    borderWidth: 1,
    borderColor: "#B9D6F3",
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 14,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#B9D6F3",
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
  },
  radioGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 16,
    gap: 20,
  },
  radioOption: {
    flexDirection: "row",
    alignItems: "center",
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#777",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 6,
  },
  selectedDot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: "#011F82",
  },
  radioLabel: {
    fontSize: 14,
    color: "#333",
  },
  ccqtRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 16,
  },
  ccqtPicker: {
    flex: 1.2,
  },
  ccqtInput: {
    flex: 1,
  },
  placeholderBox: {
    backgroundColor: "#eee",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  placeholderText: {
    color: "#888",
    fontStyle: "italic",
  },
  sectionText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#011F82",
    marginTop: 26,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#34495E",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#011F82",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 32,
    marginBottom: 40,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  result: {
    backgroundColor: "#E6F0FF",
    padding: 18,
    borderRadius: 12,
    marginTop: 10,
  },
});
