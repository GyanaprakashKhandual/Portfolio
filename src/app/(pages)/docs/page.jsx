import DocPage from '@/app/pages/Doc.page'
import React, { Suspense } from 'react'

function page() {
  return (
    <div className='bg-white'>
      <Suspense fallback={null}>
        <DocPage />
      </Suspense>
    </div>
  )
}

export default page