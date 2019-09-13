var billTotal;
var tipPercentage;
var result;

// event listener to run theTab function below
$(".submit").click(function() {
  theTab();
  playSound();
});

// event handler to move to tip percentage upon pressing Enter
$(document).keydown(function(key) {
  if (event.key == $(".submit").attr("id")) {
    theTab();
    playSound();
  }
  console.log(event.key);
});

// event listener to store tip percentage in variable, fade out tip field, and fade in result
$(".percents").click(function() {
  tipPercentage = $(this).val();

  tipCalc();
});

// function to store billtotal variable, slide out bill field, and slide in tip field
function theTab() {
  billTotal = $(".bill-input").val();

  $(".bill-total-gather").slideUp(500);
  $(".tip-gather").slideDown(1000);
}

// function that calculates tip
function tipCalc() {
  result = billTotal * ("." + tipPercentage);
  result = result.toFixed(2);

  $(".tip-gather").slideUp(700);
  $(".result").html("Be kind and tip your waiter or waitress this much:<br>" + "<u>Tip $" + result + "</u>");
  $(".result").slideDown(1000);
  $(".reset").slideDown(1200);
}

// reset the tip calculator
$(".clear").click(function() {
  $(".result").slideUp(500);
  $(".reset").slideUp(500);
  $(".bill-total-gather").slideDown(1000);
  $(".bill-input").val(undefined);
});

// function to play change sound when entering bill
function playSound() {
  var cash = new Audio("sounds/cash-register.mp3");
  cash.play();
}
