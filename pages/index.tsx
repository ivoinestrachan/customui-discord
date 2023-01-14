import type { NextPage } from 'next'
import Head from 'next/head'
 import { signIn } from "next-auth/react";
 import { unstable_getServerSession } from "next-auth";
 import { GetServerSideProps } from "next";
 import { authOptions } from "./api/auth/[...nextauth]";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center py-2 backdrop-blur-xl bg-white/10">
        <Head>
          <title>Discord</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <div>
            <button className='bg-[#7289DA] text-white py-4 pl-10 pr-10 rounded-sm'
               onClick={(e) => {
                e.preventDefault();
                signIn("discord");
              }}
            >Login with Discord</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home


export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};
