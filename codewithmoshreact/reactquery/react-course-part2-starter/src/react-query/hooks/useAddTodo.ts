import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Todo } from '../services/todoService'
import todoService from '../services/todoService'
import { CACHE_KEY_TODOS } from '../constant'
interface AddTodoContext{
    previoudTodos:Todo[]
  }

const useAddTodo = (onAdd:()=>void) => {
  
  const queryClient= useQueryClient()

  return useMutation<Todo,Error,Todo,AddTodoContext>({
   mutationFn:todoService.post,
    onMutate:(newTodo:Todo)=>{
        const previoudTodos=  queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || []
          
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,(todos=[])=>[newTodo,...todos])
        
          onAdd()
        //   if(ref.current) ref.current.value=' '
        
          return {previoudTodos}
        },
           
        onSuccess:(savedTodo,newTodo)=>{
            //approach 1
            // queryClient.invalidateQueries({
            //   queryKey:CACHE_KEY_TODOS
            // })
     //Approach 2:
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,todos=>todos?.map(todo=>todo===newTodo?savedTodo:todo))
      
      // if(ref.current) ref.current.value=' '
    },
     
  onError:(error,newTodo,context)=>{
    if(!context) return
          queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS,context.previoudTodos)
  
  }
  })


  
   
}

export default useAddTodo