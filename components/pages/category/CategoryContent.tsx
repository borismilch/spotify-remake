import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'

interface CategoryContentPorps {
  category: string
}

import { categories } from '@/utils/mock/categories'
import { ICategoryItem } from '@/models/.'

const CategoryContent: React.FC<CategoryContentPorps> = (props) => {

  const PageTitle = dynamic(() => import('@/components/reusable/pageTitlte/PageTitle'))
  const PageTitleContent = dynamic(() => import('@/components/reusable/pageTitlte/PageTitleContent'))
  const CategoryAlbums = dynamic(() => import('./CategoryAlbums'))

  const { category } = props

  const currentCategory: ICategoryItem = categories.find(item => item.title === category)

  return (
      
    <PageTitle
      bgColor={currentCategory.color}
      titleContent={
      <PageTitleContent 
        rounded
        picture={
          <Image
             src={currentCategory.img}
             alt={currentCategory.title}
             layout='fill'
             objectFit='cover'
          />
          
        }
        subtitle={'More than 200 millions listen'}
        type={'Profile'}
        title={currentCategory.title}
        
      />
      }
    >

      <CategoryAlbums 
        category={category}
        reverse={false} 
        title="Most popular"
      />

      <CategoryAlbums 
        category={category} 
        reverse={true} 
        title="fresh hits"
      />

    </PageTitle>
  
  )
}

export default CategoryContent