var foo='Lee';

foo=null;
//이전 참조를 제거,foo변수는 더 이상 'Lee'를 참조하지 않는다.
//유용해 보이지 않는다. 변수의 스코프를 좁게 만들어 변수 자체를 재빨리 소멸시키는 편이 낫다.

console.log(foo);