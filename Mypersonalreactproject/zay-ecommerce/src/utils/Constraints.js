

export const url="https://course-api.com/react-store-products"

export const singleUrl="https://course-api.com/react-store-single-product?id="



export const uniqueValue=(product,filterItem)=>{

  let uniqueSelect=product.map(item=>item[filterItem])
  if(filterItem==="colors")
  {
    uniqueSelect=uniqueSelect.flat()
  }
   
  
  const uniqueCategory=["all",...new Set(uniqueSelect)]



    return uniqueCategory

}