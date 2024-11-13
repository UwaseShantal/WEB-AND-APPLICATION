//object school
let school = {
    name: "St_peters_nsambya",
    schoolLocation: "nsambya",
    establishedYear:1999,
    studentsCount:100
};

for (let key in school){
    console.log(`${key}: ${school[key]}`);
}