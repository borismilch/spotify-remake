import Head from "next/head";
import React from "react";
import Header from "./header/Header";
import { Sidebar } from './sidebar'

import Footer from './footer/Footer'

const Layout: React.FC<{title: string}> = ({ children, title }) => {
  return (
    <div className="h-screen ">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>

      <div className="flex h-screen flex-col">

        <div className="flex h-full w-full flex-grow">

          <Sidebar />

          <div className="flex h-[89vh] relative flex-col w-full">
            <Header />

            <div className='flex-grow overflow-auto relative scrollbar-none flex-col bg-primary w-full flex'>
              {children}
            </div>
          </div>

        </div>

        <Footer />

      </div>

    </div>
  );
};

export default Layout;
