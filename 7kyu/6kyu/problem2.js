/*Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

Task
Your mission:
Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:
checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true */

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) return false;
  
  const parseDate = (str) => {
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const parts = str.split(' ');
    const month = parts[0];
    const day = parseInt(parts[1].replace(',', ''), 10);
    const year = parseInt(parts[2], 10);
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex, day);
  };
  
  return parseDate(currentDate) <= parseDate(expirationDate);
}