import Link from 'next/link'
import { ButtonProps } from './type'

const LinkButton = ({ title, link }: ButtonProps) => {
  return (
    <div className='group button w-full flex justify-center items-center'>
      <Link href={link} target='_brank' className=' rounded-3xl w-full h-full py-2 px-4 text-center bg-foreground transition-colors duration-200 group-hover:bg-accent'>
        <span className='text-background transition-text-colors duration-200 group-hover:text-foreground font-bold tracking-wide'>{title}</span>
      </Link>
    </div>
  )
}

export default LinkButton
