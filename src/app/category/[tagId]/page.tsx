import Card from '@/components/card'
import { getPostsByTagName } from '@/lib/data/getByTagName'
import { PageByTagParam } from '@/type/pageByTagParam'
import React from 'react'

const Category = async ({ params }: { params: PageByTagParam }) => {

  const articles = await getPostsByTagName(params.tagId)
  return (
    <>
      <div className="my-12">
        <h2 className="font-bold mb-6"><span className='mr-3'>#</span>{params.tagId}</h2>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {articles?.map(article => {
          return <Card key={article.slug} title={article.title} img={article.img} date={article.date} tags={article.tags} slug={article.slug} />
        })}
      </div>
    </>
  )
}

export default Category
