import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() 
{
  return <main>
       <div className='container'>
     <h3>questions and answwers about login</h3>
        <section className='info'>
             {data.map(question=>{
                return <SingleQuestion key={question.id} user={question}/>
             })}
          </section> 
       </div>

  </main>
}

export default App;
