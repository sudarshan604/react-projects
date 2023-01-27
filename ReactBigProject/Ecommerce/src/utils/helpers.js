export const formatPrice = (price) => {
 return new Intl.NumberFormat('ne-NP',{
     style:'currency',
     currency:'NPR'
 }).format(price/100)


}


export const getUniqueValues = (data,type) => {
    

    
    let allValue=data.map(item=>item[type])

    
    if(type==="colors")
    {
        allValue=allValue.flat()
    }
 
    let uniqueValue=['all',...new Set(allValue)]
    

 return uniqueValue
}
