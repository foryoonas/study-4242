//팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다.
//n! = 1*2*...*(n-1)*n
function factorial(n) {
    //탈출조건: n이 1이하일 때 재귀호출을 멈춘다.
    if(n<=1) return 1;
    //재귀호출
    return n*factorial(n-1);
}
console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
