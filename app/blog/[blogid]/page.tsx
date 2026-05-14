import React from 'react'
import { blogpost } from '@/app/data'
import Details from '@/components/blog/Details'

export default  function Blogdetails({params,}:{params:{blogid:string};}) {
// const blogid= params.blogid
  return (
    <div>
      <Details />
    </div>
  )
}
