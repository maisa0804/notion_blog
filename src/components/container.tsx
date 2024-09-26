import React from 'react'

const Container = ({ children }: Readonly<{ children: React.ReactNode; }>) => {
  return (
    <section className='px-[1.6rem] lg:px-[3.2rem] max-w-[1440px] flex justify-center mx-auto'>
      <div>
        {children}
      </div>
    </section>
  )
}

export default Container;
