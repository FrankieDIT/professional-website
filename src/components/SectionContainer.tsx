
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
  index?: number;
}

const SectionContainer = ({ children, className, id, index = 0 }: SectionContainerProps) => {
  const sectionVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6
      }
    }
  };

  return (
    <motion.section
      id={id}
      className={cn('py-16', className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={sectionVariants}
    >
      {children}
    </motion.section>
  );
};

export default SectionContainer;
