import React from 'react'

const Container = ({children}: Readonly<{children: React.ReactNode;}>) => {
  return (
    <section className='px-[1.6rem] lg:px-[3.2rem]'>
      { children}
    </section>
  )
}

export default Container;
