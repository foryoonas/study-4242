//조건식의 평가 결과가 언제나 참이면 무한루프가 된다.
//무한루프에서 탈출하기 위해서는 코드 블록 내에 if문으로 탈출 조건을 만들고 
//break 문으로 코드블록을 탈출한다.

var count =0;

//무한루프
while(true) {
    console.log(count);
    count++;
    //count가 3이면 코드 블록을 탈출한다.
    if (count===3) break;
}