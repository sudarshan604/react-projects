import React from 'react';
import styled from 'styled-components';
import { GithubContext } from '../context/context';

import { ExampleChart, Pie3D, Column3D, Bar3D, Doughnut2D } from './Charts';
const Repos = () => {
  
 


  const {githubRepo}=React.useContext(GithubContext)


  let languages=githubRepo.reduce((acc,current)=>{
    
    const {language,stargazers_count}=current
  if(!language) return  acc
    if(!acc[language]) {
      acc[language]={label:language,value:1,stars:stargazers_count}
    }
        else 
        {
          acc[language]={...acc[language],value:acc[language].value+1,
            stars:acc[language].stars+stargazers_count
          }
      
        }
    return acc

  },{})

  const mostUsed=Object.values(languages).sort((a,b)=>{
     return b.value-a.value
  }).slice(0,5)

//most star
const mostPopular=Object.values(languages).sort((a,b)=>{
 return b.stars-a.stars
}).map(item=>{
  return {...item,value:item.stars}
}).slice(0,5)
 

//stars,forks
let {stars,forks}=githubRepo.reduce((acc,item)=>{
  const {stargazers_count,name,forks}=item
     acc.stars[stargazers_count]={label:name,value:stargazers_count}
     acc.forks[forks]={label:name,value:forks}     
    return acc
},{
  stars:{},
  forks:{}
})

const repoStar=Object.values(stars).slice(-5).reverse()

const repoFork=Object.values(forks).slice(-5).reverse()
console.log(repoFork)

  return <section className='section'>
    <Wrapper className='section-center'>
      <Pie3D  data={mostUsed}/>
       <Column3D data={repoStar}/>
     <Doughnut2D data={mostPopular}/>   
  <Bar3D  data={repoFork}/>
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
