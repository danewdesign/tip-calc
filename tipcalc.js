// required initial variables
var tipStart = false;
var billTotal;
var tipPercentage;
var result;
var hasInput = false;
var maxChar;

// detect change on focus of input field so that will only execute if has a value
$(".bill-input").change(function() {
  hasInput = true;
});

// event handler to only allow max 6 character input then returns to empty
$(document).on('input', '.bill-input', function() {
    var a = $(this).val();
    if (a.length > 6) {
        a = a.replace('');
        $(this).val(a);
  }
});

// event listener to run theTab function below
$(".submit").click(function() {
  if (tipStart == false && hasInput == true) {
    theTab();
    playSound();
    tipStart = true;
  }
});

// event handler to move to tip percentage upon pressing Enter
$(document).keydown(function(key) {
  if (tipStart == false && hasInput == true) {
    if (event.key == $(".submit").attr("id")) {
      theTab();
      playSound();
    }
    tipStart = true;
  }
});

$(document).keydown(function(event) {
  if (event.key == "e" || event.key == "+" || event.key == "-") {
    $(".bill-input").val(undefined).blur();
  }
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
  $(".result").html("Be kind and tip your waiter or waitress this much:<br>" + "Tip $" + result);
  $(".result").slideDown(1000);
  $(".reset").slideDown(1200);
}

// reset the tip calculator
$(".clear").click(function() {
  $(".result").slideUp(500);
  $(".reset").slideUp(500);
  $(".bill-total-gather").slideDown(1000);
  $(".bill-input").val(undefined);
  tipStart = false;
  hasInput = false;
});

// function to play change sound when entering bill
function playSound() {
  var cash = new Audio("sounds/cash-register.mp3");
  cash.play();
}
