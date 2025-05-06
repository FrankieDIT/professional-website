
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import { motion } from 'framer-motion';

const Hobbies = () => {
  // Sample hobbies data
  const hobbies = [
    {
      title: 'Photography',
      description: 'I love capturing moments and exploring visual storytelling through photography.',
      image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=700'
    },
    {
      title: 'Hiking',
      description: 'Exploring nature trails and reaching mountaintops gives me perspective and peace.',
      image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=700'
    },
    {
      title: 'Reading',
      description: 'Books are portals to new worlds and ideas that expand my horizons.',
      image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=700'
    },
    {
      title: 'Cooking',
      description: 'Creating delicious meals combines creativity and precision in the perfect way.',
      image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=700'
    }
  ];

  return (
    <PageLayout>
      <div className="page-container">
        <SectionContainer index={0}>
          <h1 className="section-heading text-center">My Hobbies</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            When I'm not working, I enjoy a variety of activities that keep me balanced and inspired.
            Here's a glimpse into what I'm passionate about outside of my professional life.
          </p>
        </SectionContainer>

        <SectionContainer index={1}>
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

        <SectionContainer index={2} className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Why Hobbies Matter</h2>
          <div className="max-w-3xl mx-auto prose prose-purple">
            <p>
              I believe that maintaining a rich life outside of work is essential for creativity and perspective.
              My hobbies help me recharge, learn new skills, and connect with different communities.
            </p>
            <p>
              The problem-solving skills I use in [Hobby] often translate to my professional work, helping me
              approach challenges from new angles. Similarly, the attention to detail I've developed through 
              [Another Hobby] enhances my professional output.
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
