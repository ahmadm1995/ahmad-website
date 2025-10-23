import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portraitAhmad.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Ahmad Mahmoud. I live in New Jersey.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Ahmad Mahmoud. I live in New Jersey, where I am working on the
            future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My fascination with technology began at six years old, when I discovered I could reshape 
              our family's digital world—starting with the computer passwords, much to my parents' surprise. 
              That early curiosity never faded; technology remains my gateway to endless possibilities, each 
              project opening new doors to explore.
            </p>
            <p>
              In my senior year of high school, I landed my dream job at Best Buy, where I discovered my 
              talent for translating complex technology into meaningful solutions for customers. Within months, 
              I became the top-performing sales associate on my team, particularly excelling with Apple's ecosystem. 
              My success caught the attention of Apple's regional representative, who personally recommended me for a 
              position at the Apple Store. After six months of leading sales at Best Buy, I transitioned to Apple, 
              where I could deepen my expertise in premium technology experiences.
            </p>
            <p>
              Unlike many developers, I didn't write my first line of code until college. Starting my junior year, programming 
              felt like learning a new language—frustrating, intimidating, but ultimately transformative. My Computer Science 
              degree tested every ounce of determination I had, but emerging on the other side with both knowledge and resilience 
              was worth every late night. Now, I'm building projects that aim to solve problems I'm passionate about, proving that 
              when you start matters less than where you're determined to go.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink> */}
            <SocialLink href="https://www.instagram.com/thearabianstallion" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            {/* <SocialLink href="#" icon={GitHubIcon}  className="mt-4">
              Follow on GitHub
            </SocialLink> */}
            <SocialLink href="https://www.linkedin.com/in/ahmad-mahmoud-63b524a1/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:ahmad.mahmoud9523@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              ahmad.mahmoud9523@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
