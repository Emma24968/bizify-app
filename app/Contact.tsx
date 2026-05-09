import React from 'react'
import Image from 'next/image'
type ContactProps={
  header:string,
  details:string,
  info:string,
  icon:React.ReactNode

}
export default function Contact({header,details,info,icon}:ContactProps) {
  return (
    <div>
        <h3>{header}</h3>
        <p>{details}</p>
        <p>{info}</p>
        <div>{icon}</div>
    </div>
  )
}
