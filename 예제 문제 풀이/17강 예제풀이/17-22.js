//String,Number,Boolean 생성자 함수는 new 연산자와 함꼐 호출 됐을 때 String,Number,Boolean 객체를 생성하여 반환하지만
//new 연산자 없이 호출되면 문자열, 숫자, 불리언 값을 반환한다. -> 이를통해 데이터 타입을 변환하기 한다.

const str= String(123);
console.log(str,typeof str);

const num=Number('123');
console.log(num,typeof num);

const bool = Boolean('true');
console.log(bool, typeof bool);