var circle = {
    radius:5, //프로퍼티
    
    getDiameter: function(){ //메서드
    return 2 * this.radius; //this는 circle을 가리킴
   }
};

console.log(circle.getDiameter());