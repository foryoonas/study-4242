//student의 프로퍼티에는 name,age,scores를 넣고
//scores에는 과목 아무거나 3개를 키로 지정, 점수는 값으로 지정
//scores의 총점과 평균은 console.log에 나오도록 만들기


const student = {  //객체 생성( name, age, scores 3가지 속성 가지고 있음.)
    name: 'seol',
    age: 21,
    scores: {  //과목과 해당 과목의 점수를 저장하는 객체
        math: 90,
        english: 90,
        science: 90

    }
};

// 총점 계산
let Sumscores=0;    //Sumscores: 모든 과목의 점수를 합산
for(let subject in student.scores) {  //for...in 루프를 사용하여 student.scores 객체의 속성을 반복하면서 해당 과목의 점수를 가져와 Sumscores에 더한다.
    Sumscores +=student.scores[subject];  //Sumscores 변수에 각 과목의 점수를 누적하여 더해준다.
}

//평균 계산
const Numsubject = Object.keys(student.scores).length;  //Numsubject: 과목 수를 계산한다.
// Object.keys함수를 사용하여 student.scores 객체의 속성을 배열로 변환한 후 배열의 길이를 구함으로써 과목 수 계산

const averageScore = Sumscores / Numsubject; // 점수 총합 / 과목수는 평균이다.

//결과 출력
console.log("총점", Sumscores);
console.log("평균", averageScore);