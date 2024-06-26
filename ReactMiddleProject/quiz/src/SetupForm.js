import React from 'react'
import { useGlobalContext } from './context'

const SetupForm = () => {

 const {handleChange,handleSubmit,quiz,error}=useGlobalContext()

  return <main>
     <section className='quiz quiz-small'>
        <h2>setup quiz</h2>

         <form className='setup-form'>
          <div className='form-control'>
            <label htmlFor='amount'>number of question</label>
          <input type="text" name="amount" id="amount" value={quiz.amount} onChange={handleChange} 
            min={1}
            max={50}
          />
         



          </div>
            {/* category    */}

       <div className='form-control'>
             <label htmlFor='category'>category</label>

     <select name="category" id="category" className='form-input'
     value={quiz.category} onChange={handleChange}
     >
      <option value="sports">sports</option>
      <option value="history">history</option>
      <option value="politics">politics</option>
     </select>
   </div>

   <div className='form-control'>
             <label htmlFor='difficulty'>difficulty</label>

     <select name="difficulty" id="difficulty" className='form-input'
     value={quiz.category} onChange={handleChange}
     >
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>
     </select>
   </div>
 
 
 
 
 
    {error && <p className='error'>can't generate question please try different options</p>}

 <button type='submit' className='submit-btn' onClick={handleSubmit}>start</button>

      </form>
</section>
     
  </main>
}

export default SetupForm
