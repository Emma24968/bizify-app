import React from 'react'
import PageHeader from '../PageHeader'
import Services from '@/components/services/Services'
import Newsletter from '@/components/services/Newsletter'
import Pricing from '@/components/services/Pricing'

export default function page() {
  return (
    <div>
<PageHeader title="Services" currentPage="Service"/>
<Services />
<Newsletter />
<Pricing />
    </div>
  )
}
