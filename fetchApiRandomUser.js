// Task 2: Fetch random user data
fetch("https://randomuser.me/api/")
.then(Response =>Response.json())
    .then(data =>{
const user = data.results[0];

const name = `${user.name.first} ${user.name.last}`;
const country = user.location.country;
const email = user.email;

console.log("Random User Data:");
    console.log("Name:", name);
    console.log("Country:", country);
    console.log("Email:", email);

    })
    .catch(error => console.error("Error fetching user :" ,error))
 
