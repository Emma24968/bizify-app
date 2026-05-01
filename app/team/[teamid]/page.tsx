import React from 'react'
import { Teams } from '@/app/data'
import { Mail, Phone } from 'lucide-react'
import Social from '@/components/team/Social'
type Props={
  params:Promise<{teamid:string}>
}

export default async function TeamDetails({params}:Props) {
    const {teamid} = await params
    const board = Teams.find((item)=>item.id===teamid)
    if(!board){
      return <div>Not found</div>
    }
  return (
    <div>
      <h3>{board.name}</h3>
    <p>{board.position}</p>
    <p>Habitant metus lobortis quam pharetra maximus parturient fringilla taciti. Quisque pulvinar facilisi tempor condimentum dui pharetra ad fringilla cursus. Consectetur nisl lacus incepto vestibu lum mi fermentum cubilia.</p>
    <Phone /><p>216-564-3678</p>
    <Mail /><p>{board.name.toLowerCase().replace(/\s+/g, '')}@gmail.com</p>
    <Social />
    </div>
  )
}
