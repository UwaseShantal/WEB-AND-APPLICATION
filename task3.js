//object school
let school = {
    name: "St_peters_nsambya",
    schoolLocation: "nsambya",
    establishedYear:1999,
    studentsCount:100,
    calculateSchoolAge:function(currentYear){
        return currentYear - this.establishedYear;
    }
};
let SchoolAge = school.calculateSchoolAge(2024);
console.log(`SchoolAge is ${SchoolAge}`);