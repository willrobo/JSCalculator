$(document).ready(function() {
 main();
 setClassListener();
});

var main = function() {
var $tr1 = $('<tr>');
var $tr2 = $('<tr>');
var $tr3 = $('<tr>');
var $tr4 = $('<tr>');
var $td1 = $('<td>')
var $td2 = $('<td>')
var $td3 = $('<td>')
var $td4 = $('<td>')
var $td5 = $('<td>')
var $td6 = $('<td>')
var $td7 = $('<td>')
var $td8 = $('<td>')
var $td9 = $('<td>')
var $td0 = $('<td>')
var keyPress = [];
var $tdAddition = $('<td>')
var $tdSubtraction = $('<td>')
var $tdDivision = $('<td>')
var $tdMultiplication = $('<td>')

var $enter = $('<td>');
$enter.attr('id', 'enter');
var $clear = $('<td>');
$clear.attr('id', 'clear');
var $display = $('<td>');
$display.attr('id', 'display');

	var $button0 = $('<button value=0>0</button>');
	$button0.attr('type', 'submit');
	$button0.attr('name', '0');
	$button0.addClass('number');

	var $button1 = $('<button value=1>1</button>');
	$button1.attr('type', 'submit');
	$button1.attr('name', '1');
	$button1.addClass('number');

	var $button2 = $('<button value=2>2</button>');
	$button2.attr('type', 'submit');
	$button2.attr('name', '2');
	$button2.addClass('number');

  var $button3 = $('<button value=3>3</button>');
	$button3.attr('type', 'submit');
	$button3.attr('name', '3');
	$button3.addClass('number');

  var $button4 = $('<button value=4>4</button>');
	$button4.attr('type', 'submit');
	$button4.attr('name', '4');
	$button4.addClass('number');

	var $button5 = $('<button value=5>5</button>');
	$button5.attr('type', 'submit');
	$button5.attr('name', '5');
	$button5.addClass('number');

  var $button6 = $('<button value=6>6</button>');
	$button6.attr('type', 'submit');
	$button6.attr('name', '6');
	$button6.addClass('number');

	var $button7 = $('<button value=7>7</button>');
	$button7.attr('type', 'submit');
	$button7.attr('name',  '7');
	$button7.addClass('number');

  var $button8 = $('<button value=8>8</button>');
	$button8.attr('type', 'submit');
	$button8.attr('name', '8');
	$button8.addClass('number');

  var $button9 = $('<button value=9>9</button>');
	$button9.attr('type', 'submit');
	$button9.attr('name', '9');
	$button9.addClass('number');

  var $buttonAdd = $('<button value=+>+</button>');
	$buttonAdd.attr('type', 'submit');
	$buttonAdd.attr('name', '+');
	$buttonAdd.addClass('operator');

	var $buttonSub = $('<button value=->-</button>');
	$buttonSub.attr('type', 'submit');
	$buttonSub.attr('name', '-');
	$buttonSub.addClass('operator');

	var $buttonDiv = $('<button>/</button>');
	$buttonDiv.attr('type', 'submit');
	$buttonDiv.attr('name', '/');
	$buttonDiv.attr('value', '/');
	$buttonDiv.addClass('operator');

	var $buttonMult = $('<button value= *>*</button>');
	$buttonMult.attr('type', 'submit');
	$buttonMult.attr('name', '*');
	$buttonMult.addClass('operator');

	var $clearButton = $('<button value="clear">clear</button>')
	$clearButton.attr('type', 'submit');
	$clearButton.addClass('clear');

	var $enterButton = $('<button value="enter">enter</button>')
	$enterButton.attr('type', 'submit');
	$enterButton.addClass('enter');

  $td0.append($button0);
  $td1.append($button1);
  $td2.append($button2);
  $td3.append($button3);
  $td4.append($button4);
  $td5.append($button5);
  $td6.append($button6);
  $td7.append($button7);
  $td8.append($button8);
  $td9.append($button9);
  $enter.append($enterButton);
  $clear.append($clearButton);
  $tdMultiplication.append($buttonMult);
  $tdDivision.append($buttonDiv);
  $tdAddition.append($buttonAdd);
  $tdSubtraction.append($buttonSub);
	$tr1.append($td0,$td1,$td2,$td3);
	$tr2.append($td4,$td5,$td6);
	$tr3.append($td7,$td8,$td9);
	$tr4.append($tdMultiplication,$tdDivision,$tdAddition, $tdSubtraction, $enter, $clear, $display)

	$('table').append($tr1,$tr2,$tr3,$tr4);

    $('.number').click(function(e){
		e.preventDefault();
		keyPress.push($(this).val());
		$display.append(($(this).val())).text();
 	})

 		$('.operator').click(function(e){
		e.preventDefault();
		keyPress.push($(this).val());
		$display.append(($(this).val())).text();
 	})

 		$('.clear').click(function(e){
		e.preventDefault();
		$display.text("");
		keyPress = [];
 	})

 		 $('.enter').click(function(e){
		e.preventDefault();
    var oper = [];
    var num= '';
		var total = 0;
		var nums = [];

		for(var i= 0; i < keyPress.length; i++){
			if(keyPress[i] !== '+' && keyPress[i] !== '-' && keyPress[i] !== '/' && keyPress[i] !== '*'){
				num = num + keyPress[i];
			}

			else {
				nums.push(num);
				num = '';
				oper.push(keyPress[i]);

			}

 			}
 			nums.push(num);

      if(oper[0] === '+') {
       total = parseInt(nums[0]) + parseInt(nums[1]);
     }

     if(oper[0] === '-') {
       total = nums[0] - nums[1];
     }

     if(oper[0] === '/') {
       total = nums[0] / nums[1];
     }

     if(oper[0] === '*') {
       total = nums[0] * nums[1];
     }

 			pressedButtons = [];
 			$display.text("");
 			$display.append(total);
		})

 };
var setClassListener = function(event, x, name) {
  $(name).each(function() {
    $(this).on(event, x($(this)));
  });
};
