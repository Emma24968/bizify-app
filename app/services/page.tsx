import React from 'react'
import PageHeader from '../PageHeader'
import Services from '@/components/services/Services'
import Newsletter from '@/components/services/Newsletter'
import Pricing from '@/components/services/Pricing'
import ServiceCTA from '@/components/services/CTA'

export default function page() {
  return (
    <div className=''>
<PageHeader title="Services" currentPage="Service"/>
<Services />
<Newsletter />
<Pricing />
<ServiceCTA />
    </div>
  )
}
