import { Button, HStack, Heading, Image, List, ListItem,Spinner,Text } from '@chakra-ui/react'
import useGenre, { Genre } from '../hooks/useGenres'
import getCroppedImageUrl from '../services/image-url'
interface Props{
 onSelectGenre:(genre:Genre)=>void    
 selectedGenre:Genre | null
}


const GenreList = ({selectedGenre,onSelectGenre}:Props) => {
  const {data,isLoading,error}=useGenre()
 
if(error) return null

 if(isLoading) return <Spinner/>



     return (   <>
        <Heading paddingY={3} fontSize={'2xl'}>Genres</Heading>
    <List>  
        {data?.map(genre=>{
            return <ListItem key={genre.id} paddingY='5px'>
                <HStack>
                    <Image boxSize='32px' borderRadius={8}
                        src={getCroppedImageUrl(genre.image_background)} 
                        objectFit={'cover'}
                        />
                    <Button whiteSpace='normal' textAlign={'left'} fontWeight={genre.id===selectedGenre?.id?'bold':'normal'} onClick={()=>onSelectGenre(genre)} fontSize='lg' variant='link' >{genre.name}</Button>
                </HStack>
            </ListItem>
        })}
    </List>
    </>  
        )
}

export default GenreList
