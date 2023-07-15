# By default next js pre render every page
   ### ->next js generate all html
   ### ->server is responsible for prerendering the html
   ### ->hydration means when js load and prerendering means when plain html load
 

 # prerender data in nextjs
  ## ssg(static site generationg)->html is generated at build time best for when using static page
  ## ssr(server side rendering)->html is going to  generate in every request
  ## next/build our all our content (generated file is stored at CDN(content delivery network))









# performance

## code spliting ->divide your app in small chunks so you can load the chunk that is used by the current page,next js minified the code for us,but by default nextjs automatic handle itself

# 2.
# Image optimization
  ## Image component provided by nextjs instead of using img tag
  ## -based on device size its automatically rendrs the size of th image in different devices using the next js Image component,size of image is automatically handle size of the image according the devices.this what nextjs Image component done
## as the images are about to coming in viewport or user about to see that image then next js download images
## download images only if it comes in screen 


# 3.
## file based routing system
## comes with pages directory
### dont need to worry about creating additional routing package like create-react-app

## it also help in routing,nextjs only load that route




# next js api folder
 ## ->all the backend code are written in inside api folder



 # 4.
## SEO (se)
### -> Bot is crawls our page if Bot uses html syntax what is the page about and ranking out page in google,we wanna make life of bot easier so that our website can rank in the google rank

# 5.
## serveless function


### -> we can run nodejs code in same directory

 ## serverless function ->because it only going to start when we need and if our server is not doing anything then it automatically shutdown.it only going start when we need a server function




## why next js is popular?
  ### ->next js take care  a lot of complex topic.
  ### ->in create-react-app we need to know how a webpack work in a underwood
  ### ->rendering technique in next js easy
  ### ->rendering technique in next js easy
  ### -> totally depend on application if we use create-react-app or nextjs
  ### ->it depends upon us which technique should we use for our app
  ### ->create-react-app is great for learning a react but for big application we should use next js app

`npx create-next-app`

# npx->nodejs package runner

# from nextjs 12
## nextjs hot reloading now uses websocket
## nextjs compiler are written in rust,rust is 17times faster then babel
## nextjs give us to add a middleware from now on
## features to add react 18 in next
## give user a fallback state ->helps in seo
## completly rid of webpack 4 in nex12 used webpack 5

# static site generation (ssr)->which dont use any external api or data next js by default pre render that page
 ## if we are fetching data from api or external data so next js first fetch the data and download it during the build process,so that we have all data necessary and render the data and static generated that data,so that we can pre render it,(getStaticProps)


# incremental site generation(isr)->html is generated at specific interval,we say static generate we also write a interval,when we want to see the webpage,(getStaticprops with interval)


# server side rendering(ssr)->every time html is generated in each and every time,a bit slower then server side rendering,it totally depend on application,but it still power,it could not cache data in cdn,performance and seo server side rendering make more sense

# client side rendering->plain old react way i.e our browser is responsibe for rendering js is responsible for rendering the html,in nextjs swr library for client side rendering


# SEO()->increase the traffick in website,
  ## ->bot in seo->which is responsible for searching query,bot use html to communicate or understand our site 
  ## ->semantic tag,anchor tag and also add relevent description in meta tag bot used to find title and description and also our images should have proper alt tag.

## once bot  proper html and 































































