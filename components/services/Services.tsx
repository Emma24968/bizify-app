import React from 'react'
import Image from 'next/image'
import { serviceCards } from '@/app/data'

export default function Services() {
  return (
    <div>
        {serviceCards.map((service,index)=>{
            return(
                <div>
                    <Image src={service.image} alt={service.title} />
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            )
        })}
    </div>
  )
}
