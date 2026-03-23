import React from 'react'
import PageHeader from '../PageHeader'
import Services from '@/components/services/Services'
import Newsletter from '@/components/services/Newsletter'

export default function page() {
  return (
    <div>
<PageHeader title="Services" currentPage="Service"/>
<Services />
<Newsletter />
    </div>
  )
}
