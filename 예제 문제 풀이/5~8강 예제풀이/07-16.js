//isNaN 함수는 지정한 값이 NaN인지 확이하고 그 결과를 불리언 값으로 반환한다.
//NaN 함수는 "Not-a-Number"를 의미함.
isNaN(NaN); // true 반환
isNaN(10); // 여기서 주어진 값은 숫자 10이다. 10은 유효한 숫자이므로  NaN이 아니기 때문에  false반환
isNaN(1+undefined); //1+undefined는 연산이 불가능한 값으로 자바스크립트는 연산 중에 자동으로 형변환을 수행하지 못한다. 따라서 true 반환