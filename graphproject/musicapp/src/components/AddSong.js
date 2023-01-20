import React from 'react'
import { Button, InputAdornment,TextField } from '@mui/material'
import {Link} from '@mui/icons-material';

function AddSong() {
  return (<div>
        <TextField
          placeholder='add youtube or Soundcloud url'
          fullWidth
          margin='normal'
          type="url"
          InputProps={{
             startAdornment:(<InputAdornment>
              <Link/>
             </InputAdornment>)
          }} />
          <Button>
            
          </Button>
 

  </div>
  )
}

export default AddSong
