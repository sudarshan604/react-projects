import { createApi } from 'unsplash-js';

const unsplash = createApi({
  accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY,
});


const fetchCoffeStorePhotos=async ()=>{

    const photos= await unsplash.search.getPhotos({
        query: 'coffee',
        page: 1,
        perPage: 30,
        color: 'green',
    });

    const unsplashResult=photos.response.results

    return unsplashResult.map(result=>result.urls['small'])


}

const getUrlForCoffeStores=(latLong,query,limits)=>{

  return `https://api.foursquare.com/v3/places/search?query=${query}&ll=${latLong}&limit=${limits}`  
}


export const fetchCoffeStore=async(latLong='27.66696806380066%2C85.30908169616771',limit=6)=>{


  const phots=await fetchCoffeStorePhotos()

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
        }
      };
      
    
    
     const response=await fetch(getUrlForCoffeStores(latLong,'coffe',limit), options)
     const data=await response.json() 

     return data.results.map((result,idx)=>{
       return{ 
        id:result.fsq_id,
        name:result.name,
        address:result.location.address | ' ',
        formatted_address:result.location.formatted_address | ' ',
        imgUrl:phots[idx]
       } 
    })

} 
