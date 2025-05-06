
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';

interface PageLayoutProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3
};

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <motion.main 
        className="flex-grow pt-16"
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};

export default PageLayout;
