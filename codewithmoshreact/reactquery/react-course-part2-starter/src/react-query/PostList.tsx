import axios from 'axios';
import { useEffect, useState } from 'react';
import usePost from './hooks/usePost';
import React from 'react';



const PostList = () => {
const pageSize=10
const [userId,setUserId]=useState<number>()
const [page,setPage]=useState(1)
const {data,error,isLoading,fetchNextPage,isFetchingNextPage}=usePost({pageSize})


 if(isLoading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>;

  return (
    <>    
  <select
    onChange={(event)=>setUserId(parseInt(event.target.value))}
  name="
    " id="" className="form-select mb-3">
       <option value=""></option>
       <option value="1">user 1</option>
       <option value="2">user 2</option>
       <option value="3">user 3</option>
    </select>
    <ul className="list-group">
      {data.pages.map((page,index)=>(
        <React.Fragment key={index}>
            {page.map((post)=>(
                  <li key={post.id} className="list-group-item">
                  {post.title}
                </li>
            ))}
        </React.Fragment>
      ))}
           </ul>
  
  <button 
    onClick={()=>fetchNextPage()}
    disabled={isFetchingNextPage}
    className="btn btn-primary">Load more</button>

 </>

  );
};

export default PostList;
