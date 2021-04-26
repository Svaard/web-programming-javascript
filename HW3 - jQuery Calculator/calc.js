$(document).ready(function(){
    $('#display').val('(empty)');
});

var total = 0;
var currentNum = 0;
var lastOp = '';
var tracker = -1;
var lastNum = 0;

function display(int){
    $('#display').val(int);
}

function operation(){
    if(lastOp == '+'){
        total += parseInt(currentNum, 10);
    }
    else if(lastOp == '-'){
        total -= parseInt(currentNum, 10);
    }
    else if(lastOp == '*'){
        total *= parseInt(currentNum, 10);
    }
    else if(lastOp == '/'){
        total /= parseInt(currentNum, 10);
    }
    lastNum = currentNum;
    currentNum = '';
}

function number(value){
    if(total == 0){
        total = value;
        currentNum = value;
        display(currentNum);
    }
    else{
        currentNum = ("" + currentNum + value);
        display(currentNum);
    }
}

$('#equalsButton').click(function(){
    if(lastOp == ''){
        display(currentNum);
    }
    else if(tracker == -1){
        currentNum = lastNum;
        operation();
        display(total);
        lastOp = '=';
    }
    else{
        operation();
        display(total);
        lastOp = '=';
    }
    tracker = -1;
});

$('#addButton').click(function(){
    if(tracker == 1){
        lastOp = '+';
    }
    else if(lastOp !== ''){
        operation();
        display(total);
    }
    else if(lastOp == '='){
        lastOp = '+';
    }
    else{
        total = parseInt(currentNum, 10);
        display(total)
        currentNum = '';
    }
    lastOp = '+';
    tracker = 1;
});

$('#subtractButton').click(function(){
    if(tracker == 1){
        lastOp = '-';
    }
    else if(lastOp !== ''){
        operation();
        display(total);
    }
    else if(lastOp == '='){
        lastOp = '-';
    }
    else{
        total = parseInt(currentNum, 10);
        display(total)
        currentNum = '';
    };
    lastOp = '-';
    tracker = 1;
});

$('#multiplyButton').click(function(){
    if(tracker == 1){
        lastOp = '*';
    }
    else if(lastOp !== ''){
        operation();
        display(total);
    }
    else if(lastOp == '='){
        lastOp = '*';
    }
    else{
        total = parseInt(currentNum, 10);
        display(total)
        currentNum = '';
    };
    lastOp = '*';
    tracker = 1;
});

$('#divideButton').click(function(){
    if(tracker == 1){
        lastOp = '/';
    }
    else if(lastOp !== ''){
        operation();
        display(total);
    }
    else if(lastOp == '='){
        lastOp = '/';
    }
    else{
        total = parseInt(currentNum, 10);
        display(total)
        currentNum = '';
    }
    lastOp = '/';
    tracker = 1;
});

$('#button1').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button2').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button3').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button4').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button5').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button6').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button7').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button8').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button9').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#button0').click(function(){
    var value = $(this).text();
    number(parseInt(value, 10));
    tracker = 0;
});

$('#clearButton').click(function(){
    total = 0;
    currentNum = 0;
    lastOp = '';
    tracker = -1;
    $('#display').val('');
})
