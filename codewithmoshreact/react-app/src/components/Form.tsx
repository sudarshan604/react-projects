import React, { FormEvent,useState } from 'react'
import {FieldValues, useForm} from 'react-hook-form'
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from 'zod'



// interface FormData{
//   name:string,
//   age:number
// }

const schema=z.object({
  name:z.string().min(3,{message:"Name should be 3 character long"}),
  age:z.number({invalid_type_error:'Age field is required'}).min(18)
})

 type FormData=z.infer<typeof schema>


const Form = () =>{
  

const {register,handleSubmit,formState:{errors},isvalid}=useForm<FormData>({resolver:zodResolver(schema)})
const onSubmit=(data:FieldValues)=>{
 console.log(data)   

  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
       <div className="mb-3" >
        <label htmlFor="name"
       
         className="form-label">name</label>
       <input id="name"
        {...register('name')}
       type="text" className="form-control" />
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}
       </div>
    <div className="mb-3">
      <label id="age" htmlFor="" className="form-label">age</label>
      <input id="age"
       {...register('age',{valueAsNumber:true})}
      type="number"  className="form-control" />
      {errors.age && <p className='text-danger'>{errors.age.message}</p>}

    </div>
  
  <button disabled={!isvalid} type="submit" className="btn btn-primary">
    submit
  </button>
 
    </form>
    )

}

export default Form