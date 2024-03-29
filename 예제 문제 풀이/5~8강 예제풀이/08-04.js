//if...else 문은 삼항 조건 연산자로 바꿔 쓸 수 있다.

//x가 짝수이면 result 변수에 문자열 '짝수'를 할당하고, 홀수이면 문자열 '홀수'를 할당
var x=2;
var result;

if(x%2) {
    result='홀수';
} else {
    result='짝수';
}

console.log(result); 