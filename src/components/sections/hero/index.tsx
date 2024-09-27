import Card from '@/components/card'

import Introduction from '@/components/introduction'
import { getAllPosts } from '@/lib/data/getAllPosts'

const Hero = async () => {
  const allPosts= await getAllPosts()

  if (allPosts) {
    return (
      <section className='hero lg:flex gap-4 max-w-screen'>
        <div className='article-list w-full grid gap-x-4 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:order-2'>
          {allPosts.map(post => <Card key={post!.slug} title={post!.title} img={post!.img} date={post!.date} tags={post!.tags} slug={post!.slug}/> )}
        </div>
        <div className='intro-box lg:order-1 mt-32 lg:mt-0'>
          <Introduction />
        </div>
      </section>
    )
  }
  return <h1>Nopost</h1>
}

export default Hero
