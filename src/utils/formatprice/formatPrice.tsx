const formatToCurrency = (amount, format) => {
  if (format === 'vi') {
    return amount.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND'
    });
  }
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
};
export default formatToCurrency;
