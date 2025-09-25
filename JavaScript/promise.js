const api="https://api.github.com/users/JayaKaviya" 

const user=fetch(api)

console.log(user);

user.then(res => res.json())
  .then(data => console.log("Data ",data))
  .catch(err => console.error("Error " ,err)); 


// Response 
// Data  {login: 'JayaKaviya', id: 109425248, 
//     node_id: 'U_kgDOBoWyYA', 
//     avatar_url: 'https://avatars.githubusercontent.com/u/109425248?v=4', gravatar_id: '', …}