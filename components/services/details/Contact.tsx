import React from 'react'
import { contact } from '@/app/data'
import Image from 'next/image'

export default function Contact() {
  return (
    <div>
        {contact.map((details,index)=>{
            return(
                <div>
<Image src={details.image} alt='headphone' />
<h3>{details.header}</h3>
<p>{details.description}</p>
<button>{details.button}</button>
                </div>
            )
        })}
    </div>
  )
}
