import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/pic-2.jpg";
import Skills from "@/components/Skills";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>Alain Cherubin | About Page</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect/>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout classname="pt-16">
          <AnimatedText text={"Passion Fuels Purpose!"} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-6 gap-3 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start pr-10 dark:text-light xl:col-span-8 md:order-2 pb-[20px]">
              <h2 className="mb-4 dark:text-light/75 text-[45px] font-bold uppercase text-dark/75 xl:text-center md:text-lg sm:text-base xs:text-sm ">
                About me
              </h2>
              <p className="font-medium text-[20px]">
                Hi, I&apos;m Alain Cherubin,a self-taught web developer
                with a passion for creating beautiful, functional, and
                user-centered digital experiences. With 4 years of experience in
                the field. I am always looking for new and innovative ways to
                bring my clients&apos; visions to life.
              </p>

              <p className="font-medium my-4 text-[20px]">
                I believe that design is about more than just making things look
                pretty ... it&apos;s about solving problems and creating
                intuitive, enjoyable experiences for users.
              </p>

              <p className="font-medium text-[20px]">
                Whether I&apos;m working on a website, mobile app, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </p>
            </div>

            <div className="col-span-3 dark:bg-dark dark:border-light relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 xl:col-span-4 md:order-1 md:col-span-8 md:pb-5">
              <div className="absolute dark:bg-light top-0 -right-4 -z-10 w-[102%] h-[102%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Sammysaint"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                        (max-width: 1200px) 50vw,
                          33vw"
              />
            </div>

          </div>
          <Skills/>
        </Layout>
      </main>
    </>
  );
};

export default about;
