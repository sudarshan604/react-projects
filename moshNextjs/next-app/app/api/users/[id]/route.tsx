import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";


export async function GET(request:NextRequest,
     {params}:{params:{id:string}}
    ){

 const user=   await prisma.user.findUnique({
             where:{id: parseInt(params.id)}
         })
if(!user)
    return NextResponse.json({error:"user not foinr"},{status:404})
 

return NextResponse.json(user)    

}