import React from "react"
import Image from "next/image"
import { posts } from "@/app/data"
export default function Search() {
return(
    <div>
{posts.map((post,index)=>{
    return(
        <div key={index}>
        <p>{post.name}</p>
        <p>(0 {post.number})</p>
        </div>
    )
})}
    </div>
)
}