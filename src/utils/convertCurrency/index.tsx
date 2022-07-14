const convertCurrentCy = (moneyPrice: number, format : string) : number => {
  let moneyTranfers : number = 0;
  if (format === 'en') {
    moneyTranfers = moneyPrice / 23500;
  } else if (format === 'vi') {
    moneyTranfers = moneyPrice;
  }
  return moneyTranfers;
};
export default convertCurrentCy;
