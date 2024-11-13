//constructor function
function school (name, location, studentCount, schooltype) {
    this.name = name;
    this.location = location;
    this.studentCount = studentCount;
    this.schooltype =schooltype;
    this.introduce = function(){ 
        return `The school is ${this.name}, located in ${this.location},with ${this.studentCount} students,and is also  ${this.schooltype}.`;
    };
}

let school1 = new school("kampala_parents", "kampala", 100,"primary");
let school2 = new school("mukono_girls", "mukono" , 40,"secondary");


console.log(school1.introduce());
console.log(school2.introduce());