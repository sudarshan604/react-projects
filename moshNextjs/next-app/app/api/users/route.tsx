import { NextRequest, NextResponse } from "next/server";

export function GET(request:NextRequest){

    return NextResponse.json([
        {
            "id":1,
            nameL:'mosh'
        },
        {
            "id":2,
            nameL:'John'
        } 
    ])
}


export async function POST(request:NextRequest){
  const body=  await request.json()
 
  if(!body.name){
     return NextResponse.json({error:'name is requires'},{status:400})
  }


 return NextResponse.json({id:1,name:body.name},{status:201})

}
export async function PUT(request:NextRequest,
    {params}:{params:{id:number}} 
    ){
const body= await request.json()
if(!body.name){
     return NextResponse.json({error:'name is requires'},{status:404})
}




}