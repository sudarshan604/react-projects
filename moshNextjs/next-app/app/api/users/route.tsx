import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";
export async function GET(request:NextRequest){

 const users =await prisma.user.findMany()     
  
  return NextResponse.json(users)
}


export async function POST(request:NextRequest){
  const body=  await request.json()
 
const validation= schema.safeParse(body)

  if(!validation.success){
     return NextResponse.json(validation.error.errors,{status:400})
  }

const user= await prisma.user.findUnique({
    where:{email:body.email}
})

if(user){
     return NextResponse.json({error:'user already exit'},{status:400})
}

const Newuser= await prisma.user.create({
    data:{
        name:body.name,
        email:body.email
    }
})

 return NextResponse.json({Newuser},{status:201})

}



export async function PUT(request:NextRequest,
    {params}:{params:{id:number}} 
    ){
const body= await request.json()
if(!body.name){
     return NextResponse.json({error:'name is requires'},{status:404})
}

if(params.id>10)
{
    return NextResponse.json({error:'User not found'},{status:404})
}
return NextResponse.json({id:1,name:body.name})

}



export async function DELETE(request:NextRequest,
    {params}:{params:{id:number}} ){

if(params.id>10)
    return NextResponse.json({error:'User not found'},{status:404})

return NextResponse.json({})
    

}