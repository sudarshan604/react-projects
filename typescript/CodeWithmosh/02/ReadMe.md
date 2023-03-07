# Tsconfig.json file detail
 `tsc --init` for install

## what we are changing in config file

-` "rootDir": "./src",` so,program will run from ./src folder
-`"outDir": "./dist", ` our javascript file will store in dist folder
-` "noEmitOnError": true,` by this if we have some error in ts file js file is not generated
-` "removeComments": true,`

### now we dont have to write tsc filename,we can directly write tsc then it execute

#### Avoid as much as writing (any data type)
-`"noImplicitAny": false,` by doing this any type is shown warning