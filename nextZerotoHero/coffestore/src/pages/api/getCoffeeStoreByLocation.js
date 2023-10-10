import { fetchCoffeStore } from "lib/coffee-store"

const getCoffeeStoreByLocation = async (req,res) => {
    
   try{
    const {latlong, limit} =req.query
   
    const response= await fetchCoffeStore(state.latLong,'30')
 
    res.json(response)
}catch(err){
      console.log('there is an error',err)
     res.status(500)
      res.json({message:'oh no ! Something went wrong',err})
    }




}

export default getCoffeeStoreByLocation