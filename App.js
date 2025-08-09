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

import dsNganh from "./backend/nganh.json";
import bangQuyDoiCCTA from "./backend/CCTA.json";
import bangQuyDoiCCQT from "./backend/quydoi(3,4,5).json";

export default function App() {
  const dsCCTA = Object.keys(bangQuyDoiCCTA[0]).filter(
    (key) => key !== "id" && key !== "quy_doi_100"
  );

  const dsCCQT = Object.keys(bangQuyDoiCCQT[0]).filter(
    (key) => key !== "quy_doi_100"
  );

  console.log(dsCCTA);

  const [form, setForm] = useState({
    doiTuong: "",
    nganhXetTuyen: "",
    toHopXetTuyen: "",
    diemHocLuc: "",
    diemToanDGNL: "",
    ccta: "",
    loaiCCTA: "",
    diemCCTA: "",
    diemTN1: "",
    diemTN2: "",
    diemTN3: "",
    diemTN4: "",
    ccqt: "",
    loaiCCQT: "",
    diemCCQT: "",
    tb10_1: "",
    tb10_2: "",
    tb10_3: "",
    tb10_4: "",
    tb10_5: "",
    tb10_6: "",
    tb11_1: "",
    tb11_2: "",
    tb11_3: "",
    tb11_4: "",
    tb11_5: "",
    tb11_6: "",
    tb12_1: "",
    tb12_2: "",
    tb12_3: "",
    tb12_4: "",
    tb12_5: "",
    tb12_6: "",
    diemCongThanhTich: "",
    uuTienKV: "",
    uuTienDT: "",
    diemTHPTQuyDoi: "",
    diemTNTHPTQuyDoi: "",
    diemNangLuc: "",
    diemHocLuc: "",
    diemXetTuyen: "",
    toHopXetTuyen: "",
    toHopMon1: "",
    toHopMon2: "",
    toHopMon3: "",
    toHopMon4: "",
  });

  const [toHopTheoNganh, setToHopTheoNganh] = useState();
  const [selectedToHop, setSelectedToHop] = useState();
  const [xemKetQua, setXemKetQua] = useState(false);

  const dsKhuVuc = ["KV1", "KV2-NT", "KV2", "KV3"];
  const dsDoiTuong = ["Ưu tiên 1", "Ưu tiên 2", "Không ưu tiên"];

  const handleChange = (key, value) => {
    setForm({ ...form, [key]: value });

    if (key === "nganhXetTuyen") {
      setToHopTheoNganh(
        dsNganh.find((item) => item.name === value).combinations
      );
      setSelectedToHop();
    } else if (key === "toHopXetTuyen") {
      let temp = value.split(", ");
      console.log(temp);
      setSelectedToHop(temp);
    }
  };

  const renderInput = (label, key, keyboardType = "default") => (
    <View style={styles.inputGroup} key={key}>
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
              <Picker.Item key={index} label={item.name} value={item.name} />
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
            {toHopTheoNganh &&
              toHopTheoNganh.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item.subjects.join(", ")}
                  value={item.subjects.join(", ")}
                />
              ))}
          </Picker>
        </View>
      </View>

      {form.doiTuong !== "" && (
        <>
          <Text style={styles.sectionText}>Điểm học lực</Text>

          {selectedToHop &&
            selectedToHop.includes("Tiếng Anh") &&
            form.doiTuong !== "6" &&
            form.doiTuong !== "7" &&
            form.doiTuong !== "8" && (
              <View>
                <Text style={styles.sectionTitle}>Chứng chỉ tiếng Anh</Text>
                <View style={styles.radioGroup}>
                  <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleChange("ccta", "co")}
                  >
                    <View style={styles.radioCircle}>
                      {form.ccta === "co" && (
                        <View style={styles.selectedDot} />
                      )}
                    </View>
                    <Text style={styles.radioLabel}>Có CCTA</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.radioOption}
                    onPress={() => handleChange("ccta", "khong")}
                  >
                    <View style={styles.radioCircle}>
                      {form.ccta === "khong" && (
                        <View style={styles.selectedDot} />
                      )}
                    </View>
                    <Text style={styles.radioLabel}>Không có CCTA</Text>
                  </TouchableOpacity>
                </View>

                {selectedToHop.includes("Tiếng Anh") && form.ccta === "co" && (
                  <View style={styles.ccqtRow}>
                    <View style={[styles.pickerContainer, styles.ccqtPicker]}>
                      <Picker
                        selectedValue={form.loaiCCTA}
                        onValueChange={(value) =>
                          handleChange("loaiCCTA", value)
                        }
                      >
                        {dsCCTA &&
                          dsCCTA.map((item, index) => (
                            <Picker.Item
                              key={index}
                              label={item}
                              value={item}
                            />
                          ))}
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
                    {dsCCQT &&
                      dsCCQT.map((item, index) => (
                        <Picker.Item key={index} label={item} value={item} />
                      ))}
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
              {form.doiTuong !== "6" &&
                form.doiTuong !== "7" &&
                form.doiTuong !== "8" && (
                  <Text style={styles.sectionTitle}>Điểm năng lực</Text>
                )}
              {form.doiTuong === "1" && (
                <>
                  {renderInput(
                    "Điểm bài đánh giá năng lực",
                    "diemHocLuc",
                    "numeric"
                  )}
                  {renderInput(
                    "Điểm toán của bài đánh giá năng lực",
                    "diemToanDGNL",
                    "numeric"
                  )}
                </>
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
                    Hệ thống sẽ tự tính dựa trên Điểm THPT
                  </Text>
                </View>
              )}

              {form.doiTuong === "5" && (
                <>
                  {renderInput("Điểm phỏng vấn", "diemPhongVan", "numeric")}
                  {renderInput("Điểm bài luận", "diemBaiLuan", "numeric")}
                </>
              )}
            </>
          )}

          {form.doiTuong !== "8" ? (
            <Text style={styles.sectionTitle}>Điểm TNTHPT (3 môn tổ hợp):</Text>
          ) : (
            <Text style={styles.sectionTitle}>
              Điểm Chứng chỉ tuyển sinh quốc tế:
            </Text>
          )}
          {!["7", "8"].includes(form.doiTuong) ? (
            !["1", "2", "4", "6"].includes(form.doiTuong) && (
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
                        {dsCCQT &&
                          dsCCQT.map((item, index) => (
                            <Picker.Item
                              key={index}
                              label={item}
                              value={item}
                            />
                          ))}
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
            )
          ) : (
            <View style={styles.ccqtRow}>
              <View style={[styles.pickerContainer, styles.ccqtPicker]}>
                <Picker
                  selectedValue={form.loaiCCQT}
                  onValueChange={(value) => handleChange("loaiCCQT", value)}
                >
                  {dsCCQT &&
                    dsCCQT.map((item, index) => (
                      <Picker.Item key={index} label={item} value={item} />
                    ))}
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

          {form.doiTuong !== "3" &&
            form.doiTuong !== "7" &&
            form.doiTuong !== "8" && (
              <>
                {!(form.doiTuong === "5" && form.ccqt === "co") && (
                  <>
                    {renderInput("Điểm TN môn 1", "diemTN1", "numeric")}
                    {renderInput("Điểm TN môn 2", "diemTN2", "numeric")}
                    {renderInput("Điểm TN môn 3", "diemTN3", "numeric")}

                    {selectedToHop && selectedToHop.includes("Tiếng Anh") ? (
                      <>
                        {form.doiTuong === "1" ||
                        form.doiTuong === "2" ||
                        form.doiTuong === "3" ||
                        form.doiTuong === "4" ||
                        form.doiTuong === "5" ? (
                          <>
                            {form.ccta === "co" ? (
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
                              renderInput("Điểm TN môn 4", "diemTN4", "numeric")
                            )}
                          </>
                        ) : (
                          <View style={styles.inputGroup}>
                            <View style={styles.placeholderBox}>
                              <Text style={styles.placeholderText}>
                                Điểm tiếng Anh trong phương thức này được mặc
                                định 10 điểm
                              </Text>
                            </View>
                          </View>
                        )}
                      </>
                    ) : (
                      <>{renderInput("Điểm TN môn 4", "diemTN4", "numeric")}</>
                    )}
                  </>
                )}
              </>
            )}

          {form.doiTuong !== "1" &&
          form.doiTuong !== "2" &&
          form.doiTuong !== "3" &&
          form.doiTuong !== "4" &&
          form.doiTuong !== "5" ? (
            <>
              <Text style={styles.sectionTitle}>Điểm TB lớp 10:</Text>
              {renderInput("TB10 môn 1", "tb10_1", "numeric")}
              {renderInput("TB10 môn 2", "tb10_2", "numeric")}
              {renderInput("TB10 môn 3", "tb10_3", "numeric")}
              {renderInput("TB10 môn 4", "tb10_4", "numeric")}
              {renderInput("TB10 môn 5", "tb10_5", "numeric")}

              {selectedToHop && selectedToHop.includes("Tiếng Anh") ? (
                <View style={styles.inputGroup}>
                  <View style={styles.placeholderBox}>
                    <Text style={styles.placeholderText}>
                      Điểm tiếng Anh trong phương thức này được mặc định 10 điểm
                    </Text>
                  </View>
                </View>
              ) : (
                <>{renderInput("TB10 môn 6", "tb10_6", "numeric")}</>
              )}

              <Text style={styles.sectionTitle}>Điểm TB lớp 11:</Text>
              {renderInput("TB11 môn 1", "tb11_1", "numeric")}
              {renderInput("TB11 môn 2", "tb11_2", "numeric")}
              {renderInput("TB11 môn 3", "tb11_3", "numeric")}
              {renderInput("TB11 môn 4", "tb11_4", "numeric")}
              {renderInput("TB11 môn 5", "tb11_5", "numeric")}
              {selectedToHop && selectedToHop.includes("Tiếng Anh") ? (
                <View style={styles.inputGroup}>
                  <View style={styles.placeholderBox}>
                    <Text style={styles.placeholderText}>
                      Điểm tiếng Anh trong phương thức này được mặc định 10 điểm
                    </Text>
                  </View>
                </View>
              ) : (
                <>{renderInput("TB10 môn 6", "tb11_6", "numeric")}</>
              )}

              <Text style={styles.sectionTitle}>Điểm TB lớp 12:</Text>
              {renderInput("TB12 môn 1", "tb12_1", "numeric")}
              {renderInput("TB12 môn 2", "tb12_2", "numeric")}
              {renderInput("TB12 môn 3", "tb12_3", "numeric")}
              {renderInput("TB12 môn 4", "tb12_4", "numeric")}
              {renderInput("TB12 môn 5", "tb12_5", "numeric")}
              {selectedToHop && selectedToHop.includes("Tiếng Anh") ? (
                <View style={styles.inputGroup}>
                  <View style={styles.placeholderBox}>
                    <Text style={styles.placeholderText}>
                      Điểm tiếng Anh trong phương thức này được mặc định 10 điểm
                    </Text>
                  </View>
                </View>
              ) : (
                <>{renderInput("TB10 môn 6", "tb12_6", "numeric")}</>
              )}
            </>
          ) : (
            <>
              <Text style={styles.sectionTitle}>Điểm TB lớp 10:</Text>
              {renderInput("TB10 môn 1", "tb10_1", "numeric")}
              {renderInput("TB10 môn 2", "tb10_2", "numeric")}
              {renderInput("TB10 môn 3", "tb10_3", "numeric")}
              {renderInput("TB10 môn 4", "tb10_4", "numeric")}
              {renderInput("TB10 môn 5", "tb10_5", "numeric")}
              {form.ccta === "co" ? (
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
                <>{renderInput("TB10 môn 6", "tb10_6", "numeric")}</>
              )}

              <Text style={styles.sectionTitle}>Điểm TB lớp 11:</Text>
              {renderInput("TB11 môn 1", "tb11_1", "numeric")}
              {renderInput("TB11 môn 2", "tb11_2", "numeric")}
              {renderInput("TB11 môn 3", "tb11_3", "numeric")}
              {renderInput("TB11 môn 4", "tb11_4", "numeric")}
              {renderInput("TB11 môn 5", "tb11_5", "numeric")}
              {form.ccta === "co" ? (
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
                <>{renderInput("TB11 môn 6", "tb11_6", "numeric")}</>
              )}

              <Text style={styles.sectionTitle}>Điểm TB lớp 12:</Text>
              {renderInput("TB12 môn 1", "tb12_1", "numeric")}
              {renderInput("TB12 môn 2", "tb12_2", "numeric")}
              {renderInput("TB12 môn 3", "tb12_3", "numeric")}
              {renderInput("TB12 môn 4", "tb12_4", "numeric")}
              {renderInput("TB12 môn 5", "tb12_5", "numeric")}
              {form.ccta === "co" ? (
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
                <>{renderInput("TB12 môn 6", "tb12_6", "numeric")}</>
              )}
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

              {[
                { label: "Điểm THPT quy đổi", key: "diemTHPTQuyDoi" },
                { label: "Điểm TNTHPT quy đổi", key: "diemTNTHPTQuyDoi" },
                { label: "Điểm năng lực", key: "diemNangLuc" },
                { label: "Điểm học lực", key: "diemHocLuc" },
                { label: "Điểm cộng", key: "diemCongThanhTich" },
                { label: "Điểm ưu tiên", key: "uuTienKV" },
                { label: "Điểm Xét tuyển", key: "diemXetTuyen" },
                { label: "Tổ hợp môn", key: "toHopXetTuyen" },
                { label: "Tổ hợp môn 1", key: "diemTN1" },
                { label: "Tổ hợp môn 2", key: "diemTN2" },
                { label: "Tổ hợp môn 3", key: "diemTN3" },
                { label: "Tổ hợp môn 4", key: "diemTN4" },
              ].map((item) => (
                <Text key={item.key}>
                  {item.label}: {form[item.key] || "(trống)"}
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
