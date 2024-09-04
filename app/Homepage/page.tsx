import Head from 'next/head';
import { Banner } from '../components/Banner';
import { Faq } from '../components/Faq';
import { Menu } from '../components/Menu';
import { Careers } from '../components/Careers';
import { Footer } from '../components/Footer';
import { Testimonials } from '../components/Testimonials';
import { Features } from '../components/Features';

export default function Home() {
  return (
    <div>
      <Head>
        <title>HR Management Company</title>
        <meta name="description" content="HR Management Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <header className="w-full bg-white shadow">
          <Menu />
        </header>
        <Banner />
        <Features />
        <Testimonials />
        <Careers />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}
