import AddSong from "./components/AddSong";
import Header from "./components/Header";
import SongList from "./components/SongList";
import SongPlay from "./components/SongPlay";
import { Grid } from "@mui/material";


function App() {
 
  return (
   <>
       <Header/>
       <Grid container>
       <Grid style={{
        paddingTop:'80px'
       }} item xs={12} md={7}>
       <AddSong/>
       <SongList />
       </Grid>
       <Grid item  xs={12} md={5}>
       <SongPlay/>
       </Grid>
   </Grid>
   </>
  );
}

export default App;
