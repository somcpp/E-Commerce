// A mock function to mimic making an async request for data
export function fetchAllProducts(amount = 1) {
  return new Promise(async(resolve) =>{
    const response =await fetch('http://localhost:8080/products')
    const data = await response.json()
    resolve({data}) //d
  }
  );
}
export function fetchProductByFilters(filter,sort,pagination){
  let queryString = '';
  for(let key in filter){
    const categoryValues = filter[key];
    if(categoryValues.length){
      const lastCategoryValue = categoryValues[categoryValues.length-1]
      queryString += `${key}=${lastCategoryValue}&`
    }
  }
  for(let key in sort){
    queryString += `${key}=${sort[key]}&`
  } //d
  console.log(pagination)
  // for(let key in pagination){
  //   queryString += `${key}=${pagination[key]}&`
  // }
  console.log("api",queryString)
  return new Promise (async (resolve) => {
    const response = await fetch('http://localhost:8080/products?'+queryString)
    const data = await response.json()
    // const totalItems = await response.headers.get('X-Total-Count')
    const totalItems = 100;
    console.log(data)
    resolve({data:{products:data,totalItems:+totalItems}})
  })
}
export function fetchBrands() {
  return new Promise(async(resolve) =>{
    const response =await fetch('http://localhost:8080/brands')
    const data = await response.json()
    resolve({data}) //d
  }
  );
}
export function fetchCategories() {
  return new Promise(async(resolve) =>{
    const response =await fetch('http://localhost:8080/categories')
    const data = await response.json()
    resolve({data}) //d
  }
  );
}