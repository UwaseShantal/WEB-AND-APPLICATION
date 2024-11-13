let university = {
    name: "NkumbaUniversity",
    location: "mukono",
    departments: {
        computerScience: {
            name: "Computer Science",
            headOfDepartment: " Alice"
        },
        journalism: {
            name: "journalism",
            headOfDepartment: " Smith"
        }
        
    }
};

// Log the head of the Computer Science department
console.log(`The head of the Computer Science department is ${university.departments.computerScience.headOfDepartment}.`);
