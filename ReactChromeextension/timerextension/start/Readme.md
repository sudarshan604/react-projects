`{
  "manifest_version":3,
  "name":"timer Extension",
  "version":"1.0.0",
  "description":"Hello chrome world !",
  "icons":{
    "16":"icon.png",
     "48":"icon.png",
     "128":"icon.png"
  },
  
  "action":{
     "default_icon":{
        "16":"icon.png",
        "48":"icon.png",
        "128":"icon.png"
     },
     " default_title":"Time extension Action Title",
     "default_popup":"popup.html" //when click on extension this popup page is open
    },
   "options_page":"options.   html" ,  //open the optional page
   "permissions":["storage" ]

}`