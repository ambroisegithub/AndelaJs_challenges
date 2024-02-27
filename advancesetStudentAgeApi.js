setStudentAgeApi = (student, age) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            student.age = age;
            if (age < 0)
                reject("Bad Age");
            else
                resolve(student);
        }, 500);
    });
 }
 
 // Positive age case
 let studentPositive = { name: "Denis" };
 
 setStudentAgeApi(studentPositive, 20)
    .then((result) => {
       console.log(result);
    })
    .catch((error) => {
       console.error("Error:", error);
    });
 
 // Negative age case with error handling
 let studentNegative = { name: "Denis" };
 
 setStudentAgeApi(studentNegative, -5)
    .then((result) => {
       console.log(result);
    })
    .catch((error) => {
       console.error("Error:", error);
    });
 