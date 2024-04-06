function countdown(n) {
    if(n<0) return;
    console.log(n);
    countdown(n-1) //재귀호출
}

countdown(10);