var box1_value =prompt("첫 번째 값을 입력해주세요.")
    document.querySelector('.box1').textContent=box1_value;
    
    var box2_value=prompt('두 번째 값을 입력해주세요.')
    document.querySelector('.box2').textContent=box2_value;

    var box3_value=prompt("세 번째 값을 입력해주세요.")
    document.querySelector('.box3').textContent=box3_value;

function Comparison() {
    var box1_value=parseFloat(document.querySelector('.box1').textContent);
    var box2_value=parseFloat(document.querySelector('.box2').textContent);
    var box3_value=parseFloat(document.querySelector('.box3').textContent);

    var max, min;

    if(box1_value > box2_value) {
        max=box1_value;
        min=box2_value;
    } else {
        max=box2_value;
        min=box1_value;
    }

    if(box3_value > max) {
        max=box3_value;
    }else if(box3_value < min) {
        min=box3_value;
    }

    var result="가장 큰 수는 "+max+", 가장 작은 수는"+min;

    document.querySelector('input[type="text"]').value=result;

}