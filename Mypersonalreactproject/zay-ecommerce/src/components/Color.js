import React from "react";
import { BsCheck } from 'react-icons/bs'
import styled from "styled-components";
import { useState } from "react";

function Color({ colors=[]}) {
  
  const [clickColor,setClickColor]=useState('')
  
  return (<Wrapper>

    <div className="flex color-div">
      {colors.map((color) => {
        return (
          <div
            style={{
              background:color,
              width: "30px",
              height: "30px",
              borderRadius: "50%",
            }}
            className="flex"
            onClick={()=>setClickColor(color)}
            >
             { clickColor===color && <BsCheck style={{ fontSize: "30px", color: "#fff" }} />
      
      }
         </div>
        );
      })}
    </div>
      </Wrapper>
  );
}

export default Color;


const Wrapper=styled.div`
  .color-div{
  column-gap:6px;
  cursor: pointer;
  div{
    justify-content:center;
  }
 }
`