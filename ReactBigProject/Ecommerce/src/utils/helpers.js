export const formatPrice = (price) => {
 return new Intl.NumberFormat('ne-NP',{
     style:'currency',
     currency:'NPR'
 }).format(price/100)


}


export const getUniqueValues = (data,type) => {
    

    
    const allValue=data.map(item=>item[type])

 const uniqueValue=['all',...new Set(allValue)]

 
 return uniqueValue
}
