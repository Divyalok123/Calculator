var display = document.getElementById("tocalc");
var buttons = document.getElementsByClassName("button");
var operand1 = 0;
var operand2 = null;
var operator = null;

for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('button-val');
        var text = display.value.trim();
        if(value=='+' || value=='-' || value=='*' || value=='/')
        {
            operator = value;
            operand1 = parseFloat(text);
            display.value = "";
        } else if(value=='clear')
        {
            display.value = "";
            operand1 = 0;
            operand2 = null;
            operator = null;
        } else if(value=='sign')
        {
            operand1 = parseFloat(text);
            operand1 = -1*operand1;
            display.value = operand1;
        } else if(value=='=')
        {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if(result)
            {
                display.value = result;
                operand1 = result;
                operator = null;
                operand2 = null;
            }
        } else if(value == '%'){
            operand1 = parseFloat(text);
            operand1 /= 100;
            display.value = operand1;
        } else if(value == '.') {
            operand1 = parseFloat(text);
            if(text.length && !text.includes('.'))
            {
                display.value = text + '.';
            }
        }       
        else
        {
            display.value += value || 0;
        }
    });
}


