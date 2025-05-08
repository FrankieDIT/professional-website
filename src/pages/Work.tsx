
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import ExperienceCard from '@/components/ExperienceCard';
import Button from '@/components/Button';

const Work = () => {
  // Work experience data from resume
  const workExperiences = [
    {
      position: 'IT Systems Engineer II',
      company: 'Nomad Health',
      period: '06/2024 - Present',
      description: [
        'Uses Jira workflows to create custom routing procedures for Zendesk tickets',
        'Develops internal tools and scripts to expedite common tasks and procedures',
        'Assists in the operation of Nomad Health systems from user management through integration improvement',
        'Collaborates with the IT Team members to proactively address IT pain points',
        'Utilizes Okta Workflows and Workato to automate tasks administration, access, and systems tasks',
        'Works closely with C Suite to form drive IT goals and directives',
        'Administers and manages macOS devices using JAMF, ensuring seamless deployment, configuration, and maintenance'
      ],
      skills: ['Jira', 'Zendesk', 'Okta', 'JAMF', 'Script Development']
    },
    {
      position: 'IT Systems Administrator',
      company: 'Nomad Health',
      period: '12/2021 - 10/2023',
      description: [
        'Managed user account lifecycles by creating, modifying, and terminating accounts across multiple platforms, including Okta and Google Administrator',
        'Implemented single sign-on (SSO) solutions and multi-factor authentication (MFA) methods to enhance user authentication security while optimizing user experience',
        'Leveraged command line and scripting languages such as Bash and PowerShell to automate routine system maintenance tasks'
      ],
      skills: ['Okta', 'Google Workspace', 'SSO', 'MFA', 'Bash', 'PowerShell']
    },
    {
      position: 'Technical Systems Analyst, Associate',
      company: 'Atrium Health',
      period: '10/2019 - 12/2021',
      description: [
        'Provided first and second-level support for Microsoft Office 365 applications, including Outlook, SharePoint, OneDrive, and Teams',
        'Employed strong problem-solving skills to diagnose complex technical issues and swiftly devise effective solutions',
        'Utilized ServiceNow to manage and process tickets, troubleshoot technical issues, improve efficiency, and reduce errors'
      ],
      skills: ['Microsoft Office 365', 'ServiceNow', 'Technical Support', 'Problem Solving']
    },
    {
      position: 'US Diplomat, Public Diplomacy',
      company: 'US Department of State',
      period: '06/2013 - 08/2018',
      description: [
        'Evaluated visa applications, ensuring applicants met the necessary criteria and qualifications',
        'Conducted thorough security background checks on visa applicants to identify potential risks or threats',
        'Provided support and assistance to American citizens abroad by conducting onsite visits',
        'Coordinated Media Center and Outreach during the 2015 Presidential visit to Kingston, Jamaica'
      ],
      skills: ['Security Protocols', 'Diplomatic Relations', 'Event Coordination', 'Public Service']
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
