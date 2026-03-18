import { members } from '@/app/data';
import React from 'react'
import Image from 'next/image';
export default function AboutTeam() {
  return (
    <div>
              <section className="justify-items-center dark:bg-white text-black pb-[4rem]">
                <h3 className="text-[54px] font-bold text-center py-15">
                  Our team is always <br /> here for you
                </h3>
                <div className="flex gap-9 ">
                  {members.map((team, index) => {
                    return (
                      <div key={index} className="rounded-lg group relative">
                        <div className="text-center rounded-t-xl pt-4 pr-4 hover:pb-4  pl-4  rounded-b-xl bg-[#e3ebf3d4]">
                          <Image
                            src={team.image}
                            alt={team.name}
                            className="rounded-t-xl"
                            width={220}
                          />
                          <p className=" text-[15px] font-bold">{team.name}</p>
                          <p>{team.position}</p>
                          <div className="flex gap-1 justify-center opacity-0 group-hover:opacity-100 transition duration-300 ">
                            <div className="bg-white hover:bg-[#84A17D] p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                              <a href="#">FB</a>
                            </div>
                            <div className="bg-white hover:bg-[#84A17D] p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                              <a href="#">TW</a>
                            </div>
                            <div className="bg-white hover:bg-[#84A17D] p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                              <a href="#">IG</a>
                            </div>
                            <div className="bg-white hover:bg-[#84A17D] p-1 w-[36px] content-center h-[36px] rounded-[2px] text-black hover:text-white text-[13px] cursor-pointer">
                              <a href="#">YT</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
        
    </div>
  )
}
