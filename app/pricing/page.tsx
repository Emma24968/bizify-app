import PageHeader from '@/app/PageHeader'
import React from 'react'
import Plan from '../../components/Plan'
import Newsletter from '../../components/services/Newsletter'
import CTA from '../../components/CTA'

export default function Pricing() {
  return (
    <div>
        <PageHeader
  title="Home"
  currentPage="Pricing Plan"
/>
<Plan />
<Newsletter />
<CTA />
    </div>
  )
}
