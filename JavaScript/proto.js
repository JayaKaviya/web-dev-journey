object={
    name:"Jaya",
    getIntro: function(){
        console.log(this.name);
    }
} 

object2={
    name:"Kaviya"
}

object2.__proto__=object;
object2.getIntro();
object.getIntro();