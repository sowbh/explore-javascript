class Student{
    name;
    grade;

    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    setGrade(newGrade){
        this.grade = newGrade;
        console.log(`${this.name}'s grade has been updated to: ${this.grade}`);
    }

    getGrade(){
        console.log(`${this.name}'s current grade is: ${this.grade}`);
    }
}

var student1 = new Student("Micheal", 'A');
console.log(student1);

student1.getGrade();

student1.setGrade('B');
student1.getGrade();