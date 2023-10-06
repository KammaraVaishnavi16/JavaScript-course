var num1 = 7;
var num2 = 6;
console.log("Total sum is : " + (num1 + num2));

//calculating discount
var sellingPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log("Total Discount is : " + discountPercent);
displayDiscountPercentage = Math.round(discountPercent);
console.log(
  "Total Discount Percentage is : " + displayDiscountPercentage + "% off"
);

var result = listingPrice > sellingPrice;
console.log("Type of result is : " + typeof result);
