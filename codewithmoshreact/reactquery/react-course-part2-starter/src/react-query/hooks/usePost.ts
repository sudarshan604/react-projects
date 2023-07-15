import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from 'axios'
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery{
    pageSize:number
}


const usePost = (query:PostQuery) => {
  const fetchTodos=({pageParam=1})=>
         axios 
          .get<Post[]>('https://jsonplaceholder.typicode.com/posts',{
            params:{
                _start:(pageParam-1)*query.pageSize,
                _limit:query.pageSize
            }
          })
          .then((res) =>res.data)
  
    return useInfiniteQuery<Post[],Error>({
         queryKey:['posts',query],
         queryFn:fetchTodos,
         staleTime:1*60*1000,//1min
         keepPreviousData:true,
         getNextPageParam:(lastPage,allpages)=>{
            return lastPage.length>0?allpages.length+1:undefined
        }
    })
}

export default usePost