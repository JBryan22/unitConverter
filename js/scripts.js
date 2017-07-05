var gallonsToLiters = function(gallon) {
  return gallon * 3.78;
}

var litersToGallons = function(liter){
  return liter * 0.26;
}

var ounceToGram = function(ounce) {
  return ounce * 28.35;
}

$(function() {
  $("#conversion").submit(function(event) {
    event.preventDefault();
    var gallons = $("#gallons").val();
    var liters = $("#liters").val();
    var convertedGallons = gallonsToLiters(gallons);
    var convertedLiters = litersToGallons(liters);
    $("#gallons").val(convertedGallons);
    $("#liters").val(convertedLiters);
  });
});
