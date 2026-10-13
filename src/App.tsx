import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Operations from './components/Operations';
import Sustainability from './components/Sustainability';
import Investors from './components/Investors';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Operations />
        <Sustainability />
        <Investors />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
