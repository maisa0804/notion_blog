import Card from '@/components/card'
import Introduction from '@/components/introduction'
import dammy from '@/lib/dammy'

const Hero = () => {
  return (
    <section className='hero lg:flex gap-4'>
      <div className='article-list w-full grid gap-x-4 gap-y-20 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:order-2'>
        <Card title={dammy.title} img={dammy.img} date={dammy.date} tags={dammy.tags} />
        <Card title={dammy.title} img={dammy.img} date={dammy.date} tags={dammy.tags} />
        <Card title={dammy.title} img={dammy.img} date={dammy.date} tags={dammy.tags} />
        <Card title={dammy.title} img={dammy.img} date={dammy.date} tags={dammy.tags} />
        <Card title={dammy.title} img={dammy.img} date={dammy.date} tags={dammy.tags} />
      </div>
      <div className='intro-box lg:order-1 mt-32 lg:mt-0'>
        <Introduction />
      </div>
    </section>
  )
}

export default Hero
