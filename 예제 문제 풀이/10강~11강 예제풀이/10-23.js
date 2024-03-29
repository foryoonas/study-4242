//메서드를 정의하려면 프로퍼티 갓으로 함수를 할당함.
var obj= {
    name: 'Lee',
    sayHi: function() {
        console.log('Hi! '+ this.name);
    }
};
obj.sayHi();