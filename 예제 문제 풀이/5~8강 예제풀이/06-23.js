//typeof연산자는 연산자 뒤에 위치한 피연산자의 데이터 타입을 문자열로 반환함.
var foo;
console.log(typeof foo);

foo=3;
console.log(typeof foo);

foo='Hello';
console.log(typeof foo);

foo=true;
console.log(typeof foo);

foo=null;
console.log(typeof foo);

foo=Symbol();
console.log(typeof foo);

foo={}; //객체
console.log(typeof foo);

foo=[];
console.log(typeof foo);

foo=function () {};
console.log(typeof foo);