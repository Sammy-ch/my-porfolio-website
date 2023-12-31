import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/svgs/devop-programmer.svg";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Alain Cherubin | Porfolio</title>
        <meta name="description" content="My portfolio website" />
      </Head>
      <TransitionEffect/>

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout classname="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">

            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Sammy saint"
                className="w-full h-auto lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                          33vw"
              />
            </div>

            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center ">
              <AnimatedText
                text="Hi my name is Alain and i'm a Front end web Developer."
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                As a Front end developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>

              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link href="/Resume_SS.pdf" target={"_blank"} className="flex items-center bg-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark hover:dark:border-light border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base" download={true}>
                  Resume
                  <LinkArrow className={"w-6 m-1"} />
                </Link>
                <Link href="mailto:sammystcherubin@gmail.com" target={"_blank"} className="ml-4 text-lg font-medium capiatlize text-dark dark:text-light underline md:text-base ">
                  Contact
                </Link>
              </div>
            </div>

          </div>
        </Layout>

        <HireMe />

        <div className="absolute right-10 bottom-10 inline-block w-20 md:hidden ">
          <Image src={lightBulb} alt="img" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
