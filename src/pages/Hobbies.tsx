
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import { motion } from 'framer-motion';

const Hobbies = () => {
  // Sample hobbies data
  const hobbies = [
    {
      title: 'Mandarin Chinese',
      description: 'I am fluent in Mandarin Chinese, and love interacting with Chinese culture both online and in person.',
      image: 'https://images.unsplash.com/photo-1554219028-20be14a4a466?q=80&w=2771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Hiking and Camping',
      description: 'Exploring nature trails and reaching mountaintops gives me perspective and peace.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=700'
    },
    {
      title: 'Travel',
      description: 'Travelling to new places helps keep me focused when I return home',
      image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      title: 'Writing',
      description: 'Creativity is what keeps my mind working, and my heart full.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=3473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ];

  return (
    <PageLayout children={undefined}>
      <div className="page-container">
        <SectionContainer index={0} children={undefined}>
          <h1 className="section-heading text-center">My Hobbies</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            When I'm not working, I enjoy a variety of activities that keep me balanced and inspired.
            Here's a glimpse into what I'm passionate about outside of my professional life.
          </p>
        </SectionContainer>

        <SectionContainer index={1} children={undefined}>
          <div className="grid md:grid-cols-2 gap-8">
            {hobbies.map((hobby, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <img 
                  src={hobby.image} 
                  alt={hobby.title} 
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-palette-purple mb-3">{hobby.title}</h2>
                  <p className="text-gray-600">{hobby.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </SectionContainer>

        <SectionContainer index={2} className="bg-gray-50 rounded-xl p-8" children={undefined}>
          <h2 className="text-2xl font-bold mb-4 text-center">Why Hobbies Matter</h2>
          <div className="max-w-3xl mx-auto prose prose-purple">
            <p>
              I believe that maintaining a rich life outside of work is essential for creativity and perspective.
              My hobbies help me recharge, learn new skills, and connect with different communities.
            </p>
            <p>
              The problem-solving skills I use in international travel often translate to my professional work, helping me
              approach challenges from new angles. Similarly, the attention to detail I've developed through 
              studying languages enhances my professional output.
            </p>
            <p>
              At the end of the day, these activities make me who I am and inform my unique perspective and 
              approach to my work.
            </p>
          </div>
        </SectionContainer>
      </div>
    </PageLayout>
  );
};

export default Hobbies;
