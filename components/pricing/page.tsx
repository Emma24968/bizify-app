import PageHeader from '@/app/PageHeader'
import React from 'react'
import Plan from '../Plan'
import Newsletter from '../services/Newsletter'
import CTA from '../CTA'

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
