export const formatCurrency = price => {
  var vnd = price;
  vnd = vnd.toLocaleString('vi-VN');
  return vnd;
};
