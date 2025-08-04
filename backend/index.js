const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const calc = require("./calcUtils");

const app = express();
const PORT = 5555;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/tinh-diem", (req, res) => {
  const {
    doiTuong, // 1 - 4
    diemDGNL, // dùng cho đối tượng 1
    diemTNTHPT, // tổng điểm TNTHPT 3 môn
    diemTB10,
    diemTB11,
    diemTB12,
    diemCongThanhTich,
    diemUuTienKV_DT, // khu vực, đối tượng ưu tiên
    SAT,
    ACT,
    IB,
    A_Level
  } = req.body;

  const diemTNTHPTquyDoi = (diemTNTHPT / 3) * 10;
  const diemHocTHPTquyDoi = ((diemTB10 + diemTB11 + diemTB12) / 3) * 10;

  const diemNangLuc = calc.tinhDiemNangLuc(doiTuong, diemDGNL, diemTNTHPTquyDoi, diemHocTHPTquyDoi, SAT, ACT, IB, A_Level);
  const diemHocLuc = calc.tinhDiemHocLuc(diemNangLuc, diemTNTHPTquyDoi, diemHocTHPTquyDoi);
  const diemCong = calc.tinhDiemCong(diemHocLuc, diemCongThanhTich);
  const diemUuTien = calc.tinhDiemUuTien(diemHocLuc, diemCong, diemUuTienKV_DT);
  const diemXetTuyen = calc.tinhDiemXetTuyen(diemHocLuc, diemCong, diemUuTien);
  
  

  res.json({
    diemNangLuc: diemNangLuc.toFixed(2),
    diemHocLuc: diemHocLuc.toFixed(2),
    diemCong: diemCong.toFixed(2),
    diemUuTien: diemUuTien.toFixed(2),
    diemXetTuyen: diemXetTuyen.toFixed(2)
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});