import React from "react"
import styled from "styled-components"
import {AiOutlineLeft,AiOutlineRight} from "react-icons/ai"
import { useState,useEffect } from "react"
import data from "../utils/HeroData"

const Hero=()=>{
 const [people,setPeople]=useState(data)
 const [index,setIndex]=useState(0)

 let isActive=false
 useEffect(() => {
  let lastIndex = people.length - 1;
  if (index < 0) {
    setIndex(lastIndex);
  }
  if (index > lastIndex) {
    setIndex(0);
  }
}, [index, people]);

useEffect(()=>{
  let interval=setInterval(()=>{

    setIndex(index+1)
  },3000)
return ()=>clearInterval(interval)
},[index])


  return<Wrapper>
         <div className="carousal-content container flex">
           {
                 people.map((item,itemIndex)=>{

                 const {id,img,h1Heading,sHeading,paragraph}=item
                let position="nextSLide"
                isActive=false  
                    if(index===itemIndex){
                  isActive=true
                  position="active"


                 }
          
                 if (
                  itemIndex == index - 1 ||
                  (index === 0 && itemIndex == people.length - 1)
                ) {
                  isActive=false

                  position = "lastSlide";
                }
      
          
          return <section key={id} className={`${position} flex`}>
                       <div className="text-box">
                          <h1>{h1Heading}</h1>
                          <h2>{sHeading}</h2>
                          <p>{paragraph}</p>
                       </div>
                    <figure className="hero-img-box">
                        <img src={img} alt={h1Heading} />
                    </figure>
               </section>  


                 })

           } 
         <div className="rode">
               <div className={`${isActive?"agreen green":"green hide"}`}></div>
               <div className={`${isActive?"agreen green":"green hide"}`}></div>
               <div className={`${isActive?"agreen green":"green hide"}`}></div>
        </div>

       </div>
       <button  className="left btn" onClick={() => setIndex(index - 1)}>
            <AiOutlineLeft/>
           </button>
       <button className=" right btn" onClick={() => setIndex(index + 1)}>
               <AiOutlineRight/>
    </button>
       
  </Wrapper>
}

export default Hero



  const Wrapper=styled.section`
     background-color:#e6e6e6;
      height:100vh;
      padding-bottom:10rem;
      margin-bottom:300px;
   overflow:hidden;
      .carousal-content{
   height:100vh;
        position:relative;
  section{
    transition:all 1s;
  display:grid;
 grid-template-columns:1fr 1.5fr;
 position:absolute;
  }

}
.rode{
  font-size:10rem;
 position:absolute;
 bottom:0;
 right:50%;
 transform:translateX(50%) ;
 display:flex;
 column-gap:.4rem;
}
.green{
  width:2.5rem;
  height:.5rem;
  border-radius:3px;
 background-color:green;
 border:1p solid green;
}
.hide{
  opacity:.4
}
.agreen{
  opacity:1;
}

.section-wrapper{
 
}
.active{
  position:absolute;
  top:0;
 transform:translateX(0%) !important;
 opacity:1 !important;
}
.lastSlide{
  position:absolute;
  top:0;
 transform:translateX(-100%) ;
 opacity:0;
}
.nextSLide{
  position:absolute;
  top:0;
 transform:translateX(100%) ;
 opacity:0;
}

.btn{
  position:absolute;
  top:0;
  border:none;
  background:transparent;
  color:GREEN;
 cursor: pointer;
 opacity: .3;
  :hover{
 opacity:1;
 }

}

.left{
  top:50%;
  font-size:8rem;
   left:4rem;
  transform:translateY(-50%);
  }
  .right{
    font-size:8rem;

    top:50%;
    right:4rem;
    transform:translateY(-50%);
  }

.hero-img-box{
    background-color:#e6e6e6;
    justify-self:end;
    height:100%;
    width:90%;
    display:flex;
     img{
     align-self:center;
    width:100%;
     stroke:#e6e6e6;
    }
   }

.text-box{
 
  display:flex;
  flex-direction:column;
  row-gap:2rem;
   h1{
   color:#212529;
    font-size:4.8rem;
    font-weight:200;
   }
 h2{
  font-size:3rem;
  max-width:80%; 
 font-weight:200;
}
p{
  font-size:1.8rem;
  max-width:90%;
  line-height:1.3;
}

}

`



