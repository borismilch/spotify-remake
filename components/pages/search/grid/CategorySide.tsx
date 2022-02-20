import React from 'react'

import dynamic from 'next/dynamic'

const CategorySide = () => {

  const CategoryGrid = dynamic(() => import('./Cardsgrid'))
  const MostPopular = dynamic(() => import('./MostPopular'))

  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-title text-2xl font-bold'>Most popular</h1>

      <MostPopular />

      <h1 className='text-title text-2xl font-bold'>Categories</h1>

      <CategoryGrid />
    </div>
  )
}

export default React.memo(CategorySide)