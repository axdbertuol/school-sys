import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import BlankLayout from '../components/BlankLayout'
import DashboardLayout from '../components/DashboardLayout'
import { NextPageWithLayout } from '../types/global'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"h-full w-full"}>
        <div className={`hero min-h-[88vh] w-full`}>
          <div className="hero-content text-center text-base">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5 text-neutral">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

Home.getLayout = (page) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default Home
