import PageHeader from '@/app/PageHeader'
import React from 'react'
import Image from 'next/image'
import project1 from '@/public/project1.webp'
import project2 from '@/public/project2.webp'
import {portfolios} from '@/app/data'

export default function page() {
  return (
    <div>
        <PageHeader title='Portfolio' currentPage='Portfolio' />
<div>
  <Image src={project1} alt='portfolio Image' />
  <Image src={project2} alt='portfolio Image' />
  {portfolios.map((Portfolio,index)=>{
    return(
      <div>
        <Image src={Portfolio} alt='portfolio Image' />
      </div>
    )
  })}
</div>
    </div>
  )
}
