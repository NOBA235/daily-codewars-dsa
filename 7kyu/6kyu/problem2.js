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



//python version

/*
from datetime import datetime

def check_coupon(entered_code, correct_code, current_date, expiration_date):
    # 1. Compare codes
    if entered_code != correct_code:
        return False
    
    # 2. Parse dates and compare
    def parse_date(date_str):
        # Convert string to datetime object
        # Remove comma after the day and parse
        return datetime.strptime(date_str.replace(',', ''), "%B %d %Y")
    
    current = parse_date(current_date)
    expiration = parse_date(expiration_date)
    
    # Coupon is valid on the expiration day, invalid the day after
    return current <= expiration

*/