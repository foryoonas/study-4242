var person = {
    name:'Lee'
};

//person 객체에는 age 프로퍼티가 존재하지 않는다.
//따라서 person객체에 age프로퍼티가 동적으로 생성되고 같이 할당된다.
person.age=20;
console.log(person);