import { Card, CardBody, HStack, Heading, Image,Text } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconList from "./PlatformIconList"
import CriticsStore from "./CriticsStore"
import getCroppedImageUrl from "../services/image-url"
import Emoji from "./Emoji"


interface Props{
    game:Game
}



const GameCard = ({game}:Props) => {
  return (
      <Card borderRadius="10px" overflow='hidden'>
         <Image src={getCroppedImageUrl(game.background_image)}/>
         <CardBody>
          <HStack justifyContent={'space-between'}>
           <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}></PlatformIconList>
          <CriticsStore score={game.metacritic}></CriticsStore>
          </HStack>
          <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}></Emoji></Heading>
         </CardBody>
    </Card>       

    )
}

export default GameCard