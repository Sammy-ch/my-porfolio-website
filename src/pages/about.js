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
          <AnimatedText text={"About Me"} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
          <div className="grid w-full grid-cols-6 gap-3 sm:gap-8 ">
            <div className="col-span-3 flex flex-col items-start justify-start pr-10 dark:text-light xl:col-span-8 md:order-2 pb-[20px]">
              <p className="font-medium text-[20px]">
              Hi there, my name is Alain Cherubin and I'm a self-taught front-end web developer. While I may not have any prior experience working in the industry, I'm passionate about web development and eager to learn as much as I can.

              I first became interested in web development when i was intrigued by animations and features on websites.As I learned more about programming languages like HTML, CSS, and JavaScript, I became fascinated with the idea of creating beautiful, functional websites that could be accessed by anyone in the world.

              </p>

              <p className="font-medium my-4 text-[20px]">
              Since then, I've spent countless hours honing my skills and building my portfolio. I've worked on a variety of personal projects, from simple landing pages to more complex web applications. I've also taken online courses and attended workshops to stay up-to-date with the latest trends and best practices in front-end development.

              One of the things that excites me most about web development is the constant opportunity for growth and learning. With new frameworks, libraries, and tools being developed all the time, there's always something new to explore and experiment with.
              </p>

              <p className="font-medium text-[20px]">
              Above all, I'm a hard-working, dedicated individual who is eager to contribute to a team and make a meaningful impact. I'm excited to take on new challenges and work collaboratively with other developers to create amazing websites and applications.

              Thank you for taking the time to learn more about me. If you have any questions or would like to discuss a potential job opportunity, feel free to reach out via email or LinkedIn. I look forward to hearing from you!
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
