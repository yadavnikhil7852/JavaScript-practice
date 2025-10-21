//Polymorphism in javaScript
//in c++ there are two types of polymorphism
//1.compile time poly..:method overriding ,(early binding) 
//. run time poly..: virtual methods/functions (late binding)

// lets see in java Script
// polymorphism : many forms

//method of same name but different behavior(more than one form)

class mediaPlayer {
    play() {
        console.log("play media");
    }
}
class music extends mediaPlayer {
    play() {
        console.log("play music");//overides parent method
    }

}
class video{
    play(){
        console.log("play video");
    }
}
let m1 = new music();
m1.play()            //m1 & v1 are objets or we called instance 
let v1 = new video();
v1.play()
