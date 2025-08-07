const bangQuyDoi = require("./quydoi(3,4,5).json");

function quyDoiQuocTe(SAT, ACT, IB, A_Level) {
  for (let item of bangQuyDoi) {
    if (
      (SAT && item.SAT === SAT) ||
      (ACT && item.ACT === ACT) ||
      (IB && item.IB === IB) ||
      (A_Level && item.A_Level === A_Level)
    ) {
      return item.QuyDoi100;
    }
  }
  return 0;
}

function tinhDiemNangLuc(doiTuong, diemDGNL, diemToanDGNL, diemTNTHPTquyDoi, diemHocTHPTquyDoi, SAT, ACT, IB, A_Level) {
  if (doiTuong === 1) return (diemDGNL + diemToanDGNL) / 15;
  if (doiTuong === 2) return diemTNTHPTquyDoi * 0.75;
  if (doiTuong === 3 || doiTuong === 4) return quyDoiQuocTe(SAT, ACT, IB, A_Level);
  return 0;
}

function tinhDiemHocLuc(diemNangLuc, diemTNTHPTquyDoi, diemHocTHPTquyDoi) {
  return diemNangLuc * 0.7 + diemTNTHPTquyDoi * 0.2 + diemHocTHPTquyDoi * 0.1;
}

//  Không đổi
function tinhDiemCong(diemHocLuc, diemCongThanhTich) {
  return diemHocLuc + diemCongThanhTich < 100
    ? diemCongThanhTich
    : 100 - diemHocLuc;
}

//  Không đổi
function tinhDiemUuTien(diemHocLuc, diemCong, diemUuTien_KV_DT) {
  const diemUuTienQuyDoi = (diemUuTien_KV_DT / 3) * 10;
  if (diemHocLuc + diemCong < 75) return diemUuTienQuyDoi;
  return ((100 - diemHocLuc - diemCong) / 25) * diemUuTienQuyDoi;
}

function tinhDiemXetTuyen(diemHocLuc, diemCong, diemUuTien) {
  return Math.min(diemHocLuc + diemCong + diemUuTien, 100);
}

module.exports = {
  quyDoiQuocTe,
  tinhDiemNangLuc,
  tinhDiemHocLuc,
  tinhDiemCong,
  tinhDiemUuTien,
  tinhDiemXetTuyen
};
