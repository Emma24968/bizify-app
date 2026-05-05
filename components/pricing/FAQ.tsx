import { faqs } from '@/app/data'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

export default function FAQ() {
  return (
    <div>
        <div className=""></div>
        <div className="w-[30%]">
            <h3>Frequently asked asked question</h3>
            <p>Morem ipsum dolor sit amet, consectetur adipiscing elita florai psum dolor sit amet,consectetur amet consecteture.</p>
            <div className="">
              {faqs.map((faq,index)=>{
                return(
                  <div className='group h-20 b'>
                    <p>{faq.question}</p>
                  </div>
                )
              })}
              {/* <div className="group relative">
<div className="flex gap-3"></div>
              <h3 className='bg-green-600 h-[50px] '>Essential types of business insurance?</h3> <Plus />
              <p className='bg-gray-500 '>If you ask our clients what it’s like working 36, they’ll  about how much we care about their success.</p><Minus />
              </div> */}
            </div>
        </div>
    </div>
  )
}
