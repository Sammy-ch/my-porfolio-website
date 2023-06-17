import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

export const Footer = () => {
  return (
      <footer className='w-full dark:border-light border-t-2 border-solid border-dark font-medium text-lg dark:text-light sm:text-base '>
          <Layout classname='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
              <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
              <div className='flex items-center lg:py-2 '>
                Build with <span className='text-[blue] dark:text-[orange] text-2xl px-1'> &#9825;</span>by&nbsp;<Link href={"https://www.linkedin.com/in/alain-cherubin-192a51266/"} className='underline underline-offset-2'>Alain Cherubin</Link>
              </div>
              <Link href={"mailto:sammystcherubin@gmail.com"} target={"_blank"} className='underline underline-offset-2'>Say hello</Link>
          </Layout>
    </footer>
  )
}
