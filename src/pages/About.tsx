import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import Button from '@/components/Button';

const About = () => {
  // Skills data
  const skills = {
    technical: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4', 'Skill 5', 'Skill 6'],
    soft: ['Communication', 'Leadership', 'Problem Solving', 'Teamwork', 'Adaptability']
  };

  // Education data
  const education = [
    {
      degree: 'Master of Science',
      field: 'Your Field',
      institution: 'University Name',
      year: '2018 - 2020',
      description: 'Brief description of your studies, key achievements, or relevant information about this educational experience.'
    },
    {
      degree: 'Bachelor of Arts',
      field: 'Your Field',
      institution: 'University Name',
      year: '2014 - 2018',
      description: 'Brief description of your studies, key achievements, or relevant information about this educational experience.'
    }
  ];

  return (
    <PageLayout>
      <div className="page-container">
        <div className="max-w-3xl mx-auto">
          <SectionContainer index={0}>
            <h1 className="section-heading">About Me</h1>
            <div className="prose prose-lg text-gray-600">
              <p>
                Welcome to my online portfolio! I'm Frankie Day, an IT professional passionate about IT, AI, CI/CD, and diversity, equity and inclusion. 
                With 5 of experience in the field, I've had hands-on experience with every part of the IT workflow.
              </p>
              <p>
                I've had a variety of jobs in my career that have sharpened my communication skills, 
              </p>
              <p>
                Outside of my professional life, I enjoy [personal interests or hobbies]. These activities help me 
                maintain a creative mindset and bring fresh perspectives to my work.
              </p>
              <p>
                I'm constantly seeking to expand my knowledge and skills through constant learning and upskilling. 
                I believe that everyone belongs in tech, and tech belongs to the world!
              </p>
            </div>
          </SectionContainer>

          <SectionContainer index={1}>
            <h2 className="section-heading">Skills</h2>
            
            <div className="mb-8">
              <h3 className="text-xl font-medium text-palette-purple mb-3">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill, index) => (
                  <span key={index} className="bg-palette-purple/10 text-palette-purple px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-medium text-palette-purple mb-3">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.soft.map((skill, index) => (
                  <span key={index} className="bg-palette-turquoise/10 text-palette-turquoise px-4 py-2 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </SectionContainer>
          <SectionContainer index={3} className="text-center" children={undefined}>
            <h2 className="section-heading">Want to know more?</h2>
            <p className="text-gray-600 mb-6">Check out my work experience or download my full resume.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/work">Work Experience</Button>
              <Button to="/resume" variant="outline">View Resume</Button>
            </div>
          </SectionContainer>
        </div>
      </div>
    </PageLayout>
  );
};

export default About;
