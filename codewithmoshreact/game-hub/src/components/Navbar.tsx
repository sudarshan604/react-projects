import { HStack, Image} from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

interface Props{
  onSearch:(searchtext:string)=>void
}


const Navbar = ({onSearch}:Props) => {
  return (
    <HStack  padding="10px">
    <Image src={logo} boxSize='60px'/>
   <SearchInput onSearch={onSearch}/>
   <ColorModeSwitch></ColorModeSwitch>
 </HStack>
  )
}

export default Navbar