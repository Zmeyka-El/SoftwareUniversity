function planting(sqmeters){
 
   let priceyard = Number(sqmeters) * 7.61;
   let discount = 0.18 * Number(priceyard);
 
 console.log(`The final price is: ${priceyard-discount} lv.`);
 console.log(`The discount is: ${discount} lv.`);

}
planting('550'),
planting('150')