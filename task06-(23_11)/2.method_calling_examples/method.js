// example 1
class X{
    print(){
        console.log("X class Method Printed");
        this.second();
    }
    second(){
        console.log("Second Method");
    }
    third(){
        console.log("Third Method");
        this.print();
    }
}

var obj = new X();
obj.print();
obj.third();

console.log("----------------------------------------------------");

// example 2
class Y{
    one(a){
        console.log("one");
        this.two(a);
    }
    two(x){
        console.log("Two", x+10);
    }
}

var ob = new Y();
ob.one(30);

console.log("----------------------------------------------------");

// example 3
class Z{
    one(a){
        console.log(a+1);
        this.two(10,40);
        this.three();
    }
    two(a,b){
        console.log(`The sum : ${a+b}`);
    }
    three(){
        console.log('Hello World'.toLowerCase().slice(4,8));
    }
}

var third = new Z();
third.one(30);

console.log("----------------------------------------------------");

// example 4
class A{
    one(str){
        var res= str.substring(8,-1);
        console.log(res);
        this.two(res+" - Yoo")
    }
    two(str){
        console.log(str);
        this.three(str.charAt(str.indexOf("J")));
    }
    three(str){
        console.log(str);
    }
}

var fourth = new A();
fourth.one("Hello Javascript is Awesome");

console.log("----------------------------------------------------");

// example 5
class B{
    one(str){
        console.log(str.toLowerCase());
        str = str.toLowerCase().replace("hello","Hi"); //re-assigned so original str will be changed
        console.log(str);
        this.two(str);
    }
    two(str){
        console.log((str+" ").repeat(2).toUpperCase());
    }
}

var fifth = new B();
fifth.one("Hello Javascript");

