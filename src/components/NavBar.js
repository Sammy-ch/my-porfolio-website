import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'
import { motion } from 'framer-motion'
import Logo from './Logo'
import useThemeSwitcher from './hooks/useThemeSwitcher'
import { MoonIcon } from './Icons'
import { SunIcon } from './Icons'
import { useState } from 'react'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-light
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = '', toggle }) => {
  const router = useRouter()

  const handleClick = () => {
    toggle()
    router.push(href)
  }

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
        ${router.asPath === href ? 'w-full' : 'w-0'} dark:bg-dark
        `}
      >
        &nbsp;
      </span>
    </button>
  )
}

const NavBar = () => {
  const [mode, setmode] = useThemeSwitcher()
  const [IsOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!IsOpen)
  }

  return (
    <header
      className='w-full px-32 py-10 font-medium flex items-center justify-between
    dark:text-light
    relative
    z-10 lg:px-16 md:px-12 sm:px-8
    '
    >
      <button
        className='flex-col justify-center items-center hidden lg:flex'
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm -translate-y-0.5 ${
            IsOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-0.5'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm my-0.5 ${
            IsOpen ? 'opacity-0' : 'opacity-100'
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block h-0.5 w-6 rounded-sm translate-y-0.5 ${
            IsOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
          }`}
        ></span>
      </button>
      {/* Desktop Menu/Navbar */}
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href='/' title='Home' className='mr-4' />
          <CustomLink href='/about' title='About' className='mx-4' />
          <CustomLink href='/projects' title='Projects' className='ml-4' />
        </nav>

        <nav className='flex justify-center items-center flex-wrap'>
          <motion.a
            href='https://www.linkedin.com/in/alain-cherubin-192a51266/'
            target={'_blank'}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mr-3'
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            href='https://github.com/Sammy-ch'
            target={'_blank'}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 mx-3'
          >
            <GithubIcon />
          </motion.a>
          <motion.a
            href='https://twitter.com/Thewaves_aint'
            target={'_blank'}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            className='w-6 ml-3'
          >
            <TwitterIcon />
          </motion.a>

          <button
            onClick={() => setmode(mode === 'light' ? 'dark' : 'light')}
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
            }`}
          >
            {mode === 'dark' ? (
              <SunIcon className={'fill-dark'} />
            ) : (
              <MoonIcon className={'fill-dark'} />
            )}
          </button>
        </nav>
      </div>
      {/* Hamburger Menu/Navbar */}
      {IsOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 1, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
          className='min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/75
       rounded-lg backdrop-blur-md py-32'
        >
          <nav className='flex items-center flex-col justify-center'>
            <CustomMobileLink
              href='/'
              title='Home'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/about'
              title='About'
              className=''
              toggle={handleClick}
            />
            <CustomMobileLink
              href='/projects'
              title='Projects'
              className=''
              toggle={handleClick}
            />
          </nav>

          <nav className='flex justify-center items-center flex-wrap mt-2'>
            <motion.a
              href='https://www.linkedin.com'
              target={'_blank'}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mr-3 sm:mx-1'
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              href='https://www.github.com'
              target={'_blank'}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 mx-3 bg-light dark:bg-dark rounded-full sm:mx-1'
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href='https://www.twitter.com'
              target={'_blank'}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className='w-6 ml-3 sm:mx-1 '
            >
              <TwitterIcon />
            </motion.a>

            <button
              onClick={() => setmode(mode === 'light' ? 'dark' : 'light')}
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
              }`}
            >
              {mode === 'dark' ? (
                <SunIcon className={'fill-dark'} />
              ) : (
                <MoonIcon className={'fill-dark'} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className='absolute left-[50%] top-2 translate-x-[50%] sm:-translate-x-[50%] lg:-translate-x-[50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default NavBar