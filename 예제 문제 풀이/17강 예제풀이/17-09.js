function Circle(radius) {
    //1.암묵적으로 인스턴스가 생생되고 this에 바인딩
    console.log(this);

    //2.this에 바인딩되어 있는 인스턴스를 초기화
    this.radius=radius;
    this.getDiameter=function() {
        return 2*this.radius;
    };
}