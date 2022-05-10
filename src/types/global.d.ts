import { AppProps } from 'next/app'
import { GetStaticProps, GetStaticPaths, GetServerSideProps, NextPage } from 'next'
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};


export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};