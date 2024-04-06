function add(x,y) {
    if(typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('인수는 모두 숫자 값이어야 합니다.');
    }
    return x+y;
}
console.log(add(2)); //y에 대한 인자가 전달되지 않았기에 undefined를 할당하기에 이는 숫자타입이 아니라 에러 발생
console.log(add('a','b'));