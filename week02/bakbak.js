var num1=prompt("첫 번째 정수를 입력해주세요.");
var num2=prompt("두 번째 정수를 입력하주세요.");

var num1Int=parseInt(num1);
var num2Int=parseInt(num2);

var sum=num1Int+num2Int;
var difference=num1Int-num2Int;

document.querySelector(".sumbox input").value=sum;
document.querySelector(".differencebox input").value=difference;

   
