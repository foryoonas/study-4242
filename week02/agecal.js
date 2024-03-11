// 태어난 연도와 현재 연도 입력 받기
var birthYear = prompt("태어난 연도를 입력하세요:");
var currentYear = prompt("현재 연도를 입력하세요:");

var age = currentYear-(birthYear-1)
    alert("당신의 나이는 " + age + "세 입니다.");
