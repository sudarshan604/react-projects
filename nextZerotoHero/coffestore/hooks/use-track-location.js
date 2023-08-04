
import React, { useContext, useState } from 'react'
import { ACTION_TYPES,StoreContext } from '@/pages/_app'

const useTrackLOcation = () => {

  const [locationErrorMsg,setLocationEroorMsg]=useState('')
// const [latLong,setlatLong]=useState('')
 
const {dispatch}=useContext(StoreContext)


const success=(position)=>{
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
      // setlatLong(`${latitude},${longitude}`)
      dispatch({
         type:ACTION_TYPES.SET_LAT_LONG,
         payload:{latLong:`${latitude},${longitude}`}
      })
    setLocationEroorMsg(' ')
    }
const error=()=>{
       setLocationEroorMsg('Unable to retrieve your location')
    }

const handleTrackLocation=()=>{
    if (!navigator.geolocation) {
            setLocationEroorMsg("Geolocation is not supported by your browser") 
    }
     
      else {
        // status.textContent = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }  


  return {
  //  latLong,
   handleTrackLocation,
   locationErrorMsg
  }
}

export default useTrackLOcation