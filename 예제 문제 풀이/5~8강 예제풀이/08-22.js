var string ='Hello World' ;
var search = 'l'
var index;
for (var i=0; i<string.length; i++) {
    //문자열은 유사배열이므로 for문로 순회 가능


if (string[i]===search) {
    index=i //반복문을 탈출한다.
    break; //반복문을 탈출한다.
  }
}

console.log(index);

// String.prototype.indexOf 메서드를 사용해도 같은 동작을 한다.
console.log(string.indexOf(search));

