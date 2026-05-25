import PageHeader from '@/app/PageHeader'
import React from 'react'
import Image from 'next/image'
import image from '../../public/web-dev.jpg'
import Plan from '../../components/Plan'
import Newsletter from '../../components/services/Newsletter'
import CTA from '../../components/CTA'
import FAQ from '@/components/pricing/FAQ'

export default function Pricing() {
  return (
    <div>
        <PageHeader
  title="Home"
  currentPage="Pricing Plan"
/>
<Plan />
<FAQ />
<Newsletter />
<Newsletter /><div className="flex gap-10 justify-center py-16 ">
  <Image src={image} width={400} className='rounded-2xl ' alt='faq image' />
<FAQ />
</div>
<CTA />
    </div>
  )
}
