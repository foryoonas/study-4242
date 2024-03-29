const obj={
    name: 'Lee',
    //메서드 축약표현
    sayHi() {
        console.log('Hi '+ this.name);
    }
};
obj.sayHi();