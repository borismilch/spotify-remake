import Head from "next/head";
import React, { ReactElement } from "react";
import Header from "./header/Header";
import { Sidebar } from './sidebar'

import Footer from './footer/Footer'

interface LayoutProps {
  title: string,
  HeaderContent?: ReactElement<any, any>
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, title, HeaderContent = <></> } = props
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
            <Header HeaderComponent={HeaderContent} />

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
