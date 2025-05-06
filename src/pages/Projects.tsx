
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import ProjectCard from '@/components/ProjectCard';

const Projects = () => {
  // Sample project data
  const featuredProjects = [
    {
      title: 'Project Name 1',
      description: 'A brief description of this project and what technologies or approaches were used. Include key features and outcomes.',
      image: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&q=80&w=700',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: '#'
    },
    {
      title: 'Project Name 2',
      description: 'A brief description of this project and what technologies or approaches were used. Include key features and outcomes.',
      image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=700',
      tags: ['Next.js', 'GraphQL', 'Styled Components'],
      link: '#'
    }
  ];

  const otherProjects = [
    {
      title: 'Project Name 3',
      description: 'A brief description of this project and what technologies or approaches were used.',
      tags: ['JavaScript', 'CSS', 'HTML'],
      link: '#'
    },
    {
      title: 'Project Name 4',
      description: 'A brief description of this project and what technologies or approaches were used.',
      tags: ['Vue.js', 'Firebase', 'SCSS'],
      link: '#'
    },
    {
      title: 'Project Name 5',
      description: 'A brief description of this project and what technologies or approaches were used.',
      tags: ['React Native', 'Redux', 'Node.js'],
      link: '#'
    },
    {
      title: 'Project Name 6',
      description: 'A brief description of this project and what technologies or approaches were used.',
      tags: ['Angular', 'TypeScript', 'Material UI'],
      link: '#'
    }
  ];

  return (
    <PageLayout>
      <div className="page-container">
        <SectionContainer index={0}>
          <h1 className="section-heading text-center">My Projects</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Here you'll find a collection of my work - from personal projects to professional collaborations.
            Each project represents different skills and approaches in my journey.
          </p>
        </SectionContainer>

        <SectionContainer index={1}>
          <h2 className="text-2xl font-bold mb-8 text-palette-purple">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </SectionContainer>

        <SectionContainer index={2}>
          <h2 className="text-2xl font-bold mb-8 text-palette-purple">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </SectionContainer>

        <SectionContainer index={3} className="text-center">
          <h2 className="text-2xl font-bold mb-4">Interested in collaborating?</h2>
          <p className="text-gray-600 mb-6">
            I'm always open to discussing product design work or partnership opportunities.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-flex items-center bg-palette-purple text-white px-6 py-3 rounded-md hover:bg-palette-purple-dark transition-colors"
          >
            Get in Touch
          </a>
        </SectionContainer>
      </div>
    </PageLayout>
  );
};

export default Projects;
