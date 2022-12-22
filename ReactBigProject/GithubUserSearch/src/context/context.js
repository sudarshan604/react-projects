import React, { useState, useEffect } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';

const rootUrl = 'https://api.github.com';


const AppContext=React.createContext()

const GithubProvider=({children})=>{

 const [githubUser,setgithubUser]=useState(mockUser)
 const [githubRepo,setgithubRepo]=useState(mockRepos)
 const [githubFollowers,setgithubFollowers]=useState(mockFollowers)



 return <AppContext.Provider value={{githubUser,githubRepo,githubFollowers}}>
        {children}
 </AppContext.Provider>

}

export {GithubProvider,AppContext}