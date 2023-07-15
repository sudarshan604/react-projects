`npm install react@latest react-dom@latest`

`npm install next@`
# `https://next-code-elimination.vercel.app/ ` -> gives what it gives on client side


## _app.js is like entry point which is available everywhere
 ## in _app.js is only used to extend html component
# fast refresh functionality in next js
## css modules are provided by nextjs
##  ->any file Home.module.css are css module and they are scoped to certain file only like Home.module.css is only available for Home module only

## css module class are dynamically generated

### next js head component

## routing 
  ### browser provide us a history api-which is more complex
  ### rule for routing ->page should be react component like jsx,page should be export should be default 

### nested route 

# Link and href different
 ## -Link dont reload but href reload page


# useful website -> (glasseffect)`https://hype4.academy/tools/glassmorphism-generator`
# classnames package-> it helps to use more then one classnames
  `npm install classnames`
  `import cls from cl`

# what pre rendering technique can we used?
  
  ## static generation-> we download in advance and store in cdn which is handle by nextjs.so,next js is going to fetch from cdn and not try to pre-render again

## implementing static generation ->as a data fetching method
   ### without external data nextjs handle by itself,if there is external data like api then we need to handle that for static site generation

   ### when making external call api `getStaticProps()` from static site generation,`getStaticProps()` rules
  
  ### only exported from page file or use in route page

# characteristic of `getStaticProps()`
  
  ## -> only run at build time,and generate the file so,any user who fetch the data is using cached version of the file which is stored in CDN

  ## ->only run at server time

# pre render dynamic route -> `getStaticPaths()`->only for dynamic route

 ## rules 
   ## 1.only render from page route
   ## 2.meant for dynamic routes
   ## 3.page should also implement `getStaticProps()`

# fallback=false,in `getStaticProps()` say id the rout in return if route is in params `{ paths: [{params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  }`
# if params is not in paths then it return 404 page


# fallback key -> a way to tell nextjs

## if fallback=false ->if nextjs notfound a route id that doesnot here`(    paths: [{ params: { id: '0' } }, { params: { id: '1' } }],)` exit then it return a 404 page

`export function getStaticPaths()
{
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    fallback: false,
  };
   }`

## of fallback=true ->is usefull for if we had lots of static pages
  ## -> it works like if first user who ever discovered that static page then he/she see a loading state then it downloaded and cached in CDN and then second user onward they don't see loading state the got from a cached fromm cd.if we have many large static pages then it is very useful feature






# next.config.js file->it allows us to configure application further and a very

 ## prefetch props in Link component which download back page alredy for the user in the page

 ## Linking dynamic pages

 # Document page allow us direct access to html and _app.js only responsibe  for body tag 


 
# link tag rel="preload" ->tell the browser to preload the 
##   href="" as=fonts
## crossOrigin=anonymous
