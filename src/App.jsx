import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {

  const [open, setOpen] = React.useState(false);
  return (
    <div className='h-full max-w-[1500px] mx-auto relative overflow-hidden'>
      <div className=' w-[90%] lg:max-w-6xl max-w-3xl left-[50%] translate-x-[-50%] py-10 z-50 absolute top-0'>
        <Navbar />
      </div>

      {open && <Sidebar />}
      {/* <Sidebar /> */}
      <AnimatePresence>
        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <Hero />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <Section2 />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <Section3 />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <Section4 />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <Contact />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <Footer />
            </motion.div>
          )}
        </InView>
      </AnimatePresence>
    </div>
  );
}

export default App;
