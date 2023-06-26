import Head from 'next/head';
import { Inter } from 'next/font/google';
import { Button, Grid, Stack } from '@mui/material';
import { Projects } from '@/src/components/Projects';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kanban </title>
        <meta name="description" content="Kanban project manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Projects />
    </>
  );
}
