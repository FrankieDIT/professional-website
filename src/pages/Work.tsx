
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import ExperienceCard from '@/components/ExperienceCard';
import Button from '@/components/Button';

const Work = () => {
  // Sample work experience data
  const workExperiences = [
    {
      position: 'Senior Position',
      company: 'Company Name',
      period: 'Jan 2021 - Present',
      description: [
        'Led cross-functional team in developing feature X that improved metric Y by Z%',
        'Collaborated with product and design to implement responsive interfaces for web and mobile',
        'Optimized application performance by refactoring code and reducing load time by 40%',
        'Mentored junior developers through code reviews and pair programming sessions'
      ],
      skills: ['Skill 1', 'Skill 2', 'Skill 3', 'Skill 4']
    },
    {
      position: 'Mid-level Position',
      company: 'Company Name',
      period: 'Mar 2018 - Dec 2020',
      description: [
        "Developed and maintained features for the company's flagship product",
        'Worked with backend developers to implement RESTful API integrations',
        'Identified and fixed bugs, improving application stability',
        'Participated in agile development processes including daily standups and sprint planning'
      ],
      skills: ['Skill 2', 'Skill 5', 'Skill 6']
    },
    {
      position: 'Junior Position',
      company: 'Company Name',
      period: 'Jun 2016 - Feb 2018',
      description: [
        'Assisted in the development of front-end components using modern frameworks',
        'Implemented UI designs according to specifications',
        'Wrote unit tests to ensure code quality',
        'Documented code and processes for team knowledge sharing'
      ],
      skills: ['Skill 7', 'Skill 8', 'Skill 9']
    }
  ];

  return (
    <PageLayout>
      <div className="page-container">
        <SectionContainer index={0}>
          <h1 className="section-heading text-center">Work Experience</h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            My professional journey has allowed me to work with talented teams on diverse projects.
            Below is a summary of my career path and key roles.
          </p>
        </SectionContainer>

        <SectionContainer index={1}>
          <div className="max-w-3xl mx-auto">
            {workExperiences.map((experience, index) => (
              <ExperienceCard key={index} {...experience} />
            ))}
          </div>
        </SectionContainer>

        <SectionContainer index={2} className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Want to see my full resume?</h2>
          <p className="text-gray-600 mb-6">
            Download my complete resume or visit my LinkedIn profile for more details about my work history.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button to="/resume" variant="primary">View Resume</Button>
            <Button 
              href="https://linkedin.com/in/frankieday" 
              variant="outline" 
              external
            >
              Visit LinkedIn
            </Button>
          </div>
        </SectionContainer>
      </div>
    </PageLayout>
  );
};

export default Work;
