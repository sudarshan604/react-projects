import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import {BsChevronDown} from 'react-icons/bs'
import React from 'react'

interface Props{
    onSelectSortOrder:(sortorder:string)=>void
}

const SortSelector = ({onSelectSortOrder}:Props) => {
  
    const sortOrders=[
          {value:'',label:'Relavance'},
         {value:'added',label:'Date added'},
         {value:'name',label:'Name'},
         {value:'-released',label:'Release date'},
         {value:'-metacritic',label:'Popularity'},
         {value:'-rating',label:'Average rating'}     
    ]
    
  
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>Order by:relavance</MenuButton>
         <MenuList>
                {sortOrders.map(order=><MenuItem onClick={()=>onSelectSortOrder(order.value)} key={order.value} value={order.value}>{order.label}</MenuItem>)}         
        
         </MenuList>
    </Menu>
  )
}

export default SortSelector