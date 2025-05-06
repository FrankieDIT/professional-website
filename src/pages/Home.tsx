
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import Button from '@/components/Button';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <SectionContainer className="min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <motion.span 
                className="inline-block text-palette-purple font-medium mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi there, I'm
              </motion.span>
              <motion.h1 
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 gradient-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Your Name
              </motion.h1>
              <motion.h2 
                className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Professional Title or Tagline
              </motion.h2>
              <motion.p 
                className="text-gray-600 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                A brief introduction about yourself, your expertise, and what you're passionate about. Make it engaging and concise to capture visitors' attention.
              </motion.p>
              <motion.div 
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Button to="/about" size="lg">
                  Learn About Me
                </Button>
                <Button to="/projects" variant="outline" size="lg">
                  View My Work
                </Button>
              </motion.div>
            </div>

            <motion.div 
              className="order-1 md:order-2 flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
                <div className="absolute inset-0 bg-palette-purple rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-palette-turquoise to-palette-purple rounded-full opacity-30"></div>
                <img
                  src="/lovable-uploads/ca280d1c-3d6a-41b1-9699-3fe5af813017.png"
                  alt="Profile"
                  className="rounded-full w-full h-full object-cover border-4 border-white z-10 relative"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </SectionContainer>

      {/* Featured Sections */}
      <div className="bg-gray-50">
        <SectionContainer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-heading text-center">Featured</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* About Quick Preview */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-palette-purple">About</h3>
              <p className="text-gray-600 mb-4">Get to know more about my background, skills, and professional journey.</p>
              <Button to="/about" variant="ghost" className="flex items-center">
                Learn more <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Projects Quick Preview */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-palette-purple">Projects</h3>
              <p className="text-gray-600 mb-4">Explore a selection of my recent work and side projects that showcase my abilities.</p>
              <Button to="/projects" variant="ghost" className="flex items-center">
                View projects <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Work Experience Quick Preview */}
            <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-palette-purple">Experience</h3>
              <p className="text-gray-600 mb-4">Review my professional experience, roles, and the companies I've worked with.</p>
              <Button to="/work" variant="ghost" className="flex items-center">
                See my experience <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </SectionContainer>
      </div>

      {/* Call to Action */}
      <SectionContainer className="text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="section-heading">Let's Connect</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button href="mailto:your.email@example.com" size="lg">
          Get In Touch
        </Button>
      </SectionContainer>
    </PageLayout>
  );
};

export default Home;
