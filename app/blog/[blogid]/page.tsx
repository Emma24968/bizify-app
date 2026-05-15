import React from 'react'
import { blogpost } from '@/app/data'
import Details from '@/components/blog/Details'
import Search from '@/components/blog/Search';

export default  function Blogdetails({params,}:{params:{blogid:string};}) {
// const blogid= params.blogid
  return (
    <div className=''>
      <div className="">      <Details />
</div>
      <div className="">
        <Search />
      </div>
    </div>
  )
}
