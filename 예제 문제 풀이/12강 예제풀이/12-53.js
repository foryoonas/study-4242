//logOdds 함수는 단 한 번만 사용된다.
var logOdds = function(i) {
    if(i%2) console.log(i);
};

//고차 함수에 함수 참조를 전달한다.
repeat(5,logOdds);