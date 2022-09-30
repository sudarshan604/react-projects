<<<<<<< HEAD
import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  return <h2>accordion project setup</h2>;
=======
import React from 'react';
import Review from './Review';
import {FaGithubSquare} from 'react-icons/fa'
 
function App() 
{ 

   return(
     <main>
          <section className='container'>
                <div className='title'>
                <h2>our reviews</h2>
                  <div className='underline'></div>           

                </div>

          <Review />
          </section>
        
      </main>
   )
    
>>>>>>> 4d2c988c2f1f7690209562d49f00d608929c3009
}

export default App;
