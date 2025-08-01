export function fetchLoggedInUserOrders(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/orders/user/'+userId) 
    const data = await response.json()
    if(response.ok){
      resolve({data})
    }
    
  }
  );
}
export function fetchLoggedInUser(userId) {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/users/'+userId) 
    const data = await response.json()
    console.log(data)
    resolve({data})
  }
  );
}
export function updateUser(update) {
  return new Promise(async (resolve)=>{
    const response = await fetch('http://localhost:8080/users/'+update.id, {
      method: 'PATCH',
      body: JSON.stringify(update),
      headers: {'content-type':'application/json'},
    })
    const data = response.json();
    resolve({data})
  });
}