(function(){
    'use strict';

    class Student{
        constructor(first, last, age, grade){
            this.first = first;
            this.last = last;
            this.age = age;
            this.grade = grade;
        }

        
    } 

    const a = new Student("Kevin", "Smith", 22, 98);
    const b = new Student("Ronald", "Darby", 24, 91);
    const c = new Student("John", "Gray", 18, 89);
    const d = new Student("Jeff", "Williams", 19, 99);

    const students = [a, b, c, d];

    function printStudents(firstNameFirst, ...theStudents){
        for(let i = 0; i < theStudents.length; i++){
            const s = theStudents[i];
            if(firstNameFirst){
                console.log(`Name: ${s.first} ${s.last}, Age: ${s.age} Grade: ${s.grade}.`);
            }
            else{
                console.log(`Name: ${s.last} ${s.first}, Age: ${s.age} Grade: ${s.grade}.`);
            }
            
        }
    }

    printStudents(true, ...students );
    printStudents(false, ...students);
    

    function change(student){
        let {first, last, ...whatever} = student;
        console.log(student);
        console.log(first, last);

        [last, first] = [first, last];
        console.log(first, last);

        let myCopy = {first, last, ...whatever};
        console.log(myCopy);
    }

    change(a);


}());