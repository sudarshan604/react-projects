import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'
import styled from 'styled-components'



const Star=({star,price})=>{

const tempStar=Array.from({length:5},(_,index)=>{

     const  newIndex= index+0.5
return <span>
   {
     star>=index+1?<BsStarFill/>:star>=newIndex?<BsStarHalf/>:<BsStar/>
   }
</span>
})



 return  <Wrapper>
 <div>
<span>{tempStar}</span>
<p></p>

</div>
</Wrapper>

}
export default Star


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    color: #ffb900;
    font-size: 2rem;
    margin-right: 0.25rem;
  }

  margin-bottom: 0.5rem;
`
