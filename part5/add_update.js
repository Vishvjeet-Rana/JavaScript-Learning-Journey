let info = {
  name: "Vishvjeet Rana",
  city: "London",
  followers: 1000000000000,
  gender: "not updated yet",
};

// updating value or changing value
info.city = "Dubai";
console.log(info); //{name: 'Vishvjeet Rana', city: 'Dubai', followers: 1000000000000, gender: 'not updated yet'}

// adding keys values
info.country = "India";
console.log(info); //{name: 'Vishvjeet Rana', city: 'Dubai', followers: 1000000000000, gender: 'not updated yet', country: 'India'}

// deleting property (key-value) pair
delete info.followers;
console.log(info); //{name: 'Vishvjeet Rana', city: 'Dubai', gender: 'not updated yet', country: 'India'}
