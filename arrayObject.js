function organizePeople(array) {
    const result = {
      females: [],
      males: []
    };
  
    array.forEach(identity => {
      const [fullName, age, gender] = identity.split(', ').map(item => item.trim());
      const [firstName, lastName] = fullName.split(' ');
  
      const personInfo = {
        'second-name': lastName,
        'age': parseInt(age)
      };
  
      if (gender.toLowerCase() === 'female') {
        result.females.push({ [firstName]: personInfo });
      } else if (gender.toLowerCase() === 'male') {
        result.males.push({ [firstName]: personInfo });
      }
    });
  
    return result;
  }
  
  // Example usage:
  const formattedArray = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
  ];
  
  const organizedData = organizePeople(formattedArray);
  console.log(organizedData);
  