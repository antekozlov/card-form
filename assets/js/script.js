$(function () {

  var creditly = Creditly.initialize(
    '.credit-card-wrapper .expiration-month-and-year',
    '.credit-card-wrapper .credit-card-number',
    '.credit-card-wrapper .security-code',
    // '.credit-card-wrapper .billing-address-name',
    '.credit-card-wrapper .card-type');

  $(".pay-button").click(function (e) {
    e.preventDefault();
    var output = creditly.validate();
    if (output) {
      // Your validated credit card output
      var out = JSON.stringify(output, "", 4);
      alert(out);
      event = JSON.parse(out);
    }
  });

});