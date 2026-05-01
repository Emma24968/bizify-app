import React from 'react'
import { Teams } from '@/app/data'
type Props={
  params:<{}>
}

export default async function TeamDetails({params}:Props) {
    const {teamid} = await params
    const board = Teams.find((item)=>item===board.name)
    if(!board){
      return <div>Not found</div>
    }
  return (
    <div>page</div>
  )
}
