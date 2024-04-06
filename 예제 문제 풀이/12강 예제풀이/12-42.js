//즉시 실행 함수도 일반함수처럼 값을 반환할 수 있다.
var res =(function() {
    var a=3;
    var b=5;
    return a*b
}());

console.log(res);