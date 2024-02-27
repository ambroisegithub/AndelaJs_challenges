async function myApi(familyArray) {
    await new Promise(resolve => setTimeout(resolve, 1000));
 
    for (let family of familyArray) {
       family.totalNumberofFamilyMembers = family.childrenNumber + 2; // Assuming 2 parents in each family
 
       if (family.fatherName && family.fatherName.toLowerCase() === 'yves') {
          throw new Error('Yves is not an allowed dad in 2022');
       }
    }
 
    return familyArray;
 }
 
 // Example usage:
 const families = [
    { fatherName: 'John', motherName: 'Alice', childrenNumber: 2 },
    { fatherName: 'Yves', motherName: 'Eva', childrenNumber: 1 },
    { fatherName: 'Bob', motherName: 'Catherine', childrenNumber: 3 }
 ];
 
 (async () => {
    try {
       const result = await myApi(families);
       console.log(result);
    } catch (error) {
       console.error('Error:', error.message);
    }
 })();
 