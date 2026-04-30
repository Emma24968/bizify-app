import React from 'react'
import { Teams } from '../data'
import Image from 'next/image'

export default function page() {
  return (
    <div className='grid grid-cols-3 px-15 gap-9'>
        {Teams.map((board,index)=>{
            return(
              <div key={index} className="rounded-lg group relative">
                <div className="text-center rounded-t-xl px-4 pt-4 rounded-b-xl bg-[#e3ebf3d4]">
                  <Image
                    src={board.image}
                    alt={board.name}
                    className="rounded-t-xl"
                    width={220}
                  />
                  <p className=" text-[15px] font-bold">{board.name}</p>
                  <p>{board.position}</p>
                  <div className="flex gap-1 justify-center opacity-0 group-hover:opacity-100 transition duration-300 pb-4">
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">FB</a>
                    </div>
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">TW</a>
                    </div>
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">IG</a>
                    </div>
                    <div className="bg-white hover:bg-green-800 p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                      <a href="#">YT</a>
                    </div>
                  </div>
                </div>
              </div>
            )
        })}
    </div>
  )
}
