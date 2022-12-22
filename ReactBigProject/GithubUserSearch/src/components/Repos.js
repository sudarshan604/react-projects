import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';

import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  
  const {githubRepo}=React.useContext(GithubContext)

  let languages=githubRepo.reduce((acc,current)=>{
    
    const {language}=current
    
    if(!language) return  acc
    if(!acc[language]) {
      acc[language]={label:language,value:1}
    }
        else 
        {
          acc[language]={...acc[language],value:acc[language].value+1}
        }
    return acc

  },{})

  languages=Object.values(languages).sort((a,b)=>{
     return b.value-a.value
  }).slice(0,5)


console.log(languages)
  return <section className='section'>
    <Wrapper className='section-center'>
      <Pie3D  data={languages}/>
     
      {/* <ExampleChart data={chartData}/>---> for my reference */}
 </Wrapper>
  </section>


};

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 2rem;
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1200px) {
    grid-template-columns: 2fr 3fr;
  }

  div {
    width: 100% !important;
  }
  .fusioncharts-container {
    width: 100% !important;
  }
  svg {
    width: 100% !important;
    border-radius: var(--radius) !important;
  }
`;

export default Repos;
