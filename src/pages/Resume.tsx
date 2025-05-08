
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import Button from '@/components/Button';
import { FileText, Download, Code, Briefcase, School } from 'lucide-react';

const Resume = () => {
  return (
    <PageLayout>
      <div className="page-container">
        <SectionContainer index={0} className="text-center">
          <h1 className="section-heading">My Resume</h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Below you'll find a digital version of my resume. You can also download a PDF copy for your records.
          </p>
          <Button 
            className="flex items-center mb-12"
            href="#" // Replace with actual PDF link
            external
          >
            <Download className="w-4 h-4 mr-2" /> Download PDF Resume
          </Button>
        </SectionContainer>

        <SectionContainer index={1} className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <div className="mb-8 text-center border-b pb-6">
            <h2 className="text-3xl font-bold text-palette-purple">Frankie Day</h2>
            <p className="text-xl text-gray-600">IT Systems Engineer II</p>
            <div className="flex justify-center items-center gap-4 mt-2 text-sm text-gray-500">
              <span>frankie@frankie-day.com</span>
              <span className="hidden sm:block">•</span>
              <span>Charlotte, NC</span>
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <a 
                href="https://linkedin.com/in/frankieday" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-palette-purple hover:text-palette-purple-dark transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a 
                href="https://github.com/frankieday" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-palette-purple hover:text-palette-purple-dark transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a 
                href="https://frankie-day.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-palette-purple hover:text-palette-purple-dark transition-colors"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Summary Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2 text-palette-purple flex items-center">
              <FileText className="w-5 h-5 mr-2" /> Summary
            </h3>
            <p className="text-gray-600">
              Dedicated IT Systems Engineer with a strong background in systems administration, technical analysis, and troubleshooting across diverse IT environments. 
              Skilled in managing and integrating tools such as Jamf, Okta, and Google Workspace, with experience in creating efficient workflows, 
              including Jira/Zendesk integrations. Adept at problem-solving and implementing technology solutions that enhance team performance and operational efficiency.
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-palette-purple flex items-center">
              <Briefcase className="w-5 h-5 mr-2" /> Work Experience
            </h3>
            
            {/* Job 1 */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">IT Systems Engineer II</h4>
                <span className="text-gray-500 text-sm">06/2024 - Present</span>
              </div>
              <div className="text-palette-purple mb-2">Nomad Health, New York, NY (Remote)</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Uses Jira workflows to create custom routing procedures for Zendesk tickets</li>
                <li>Develops internal tools and scripts to expedite common tasks and procedures</li>
                <li>Assists in the operation of Nomad Health systems from user management through integration improvement</li>
                <li>Collaborates with the IT Team members to proactively address IT pain points</li>
                <li>Utilizes Okta Workflows and Workato to automate tasks administration, access, and systems tasks</li>
              </ul>
            </div>
            
            {/* Job 2 */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">IT Systems Administrator</h4>
                <span className="text-gray-500 text-sm">12/2021 - 10/2023</span>
              </div>
              <div className="text-palette-purple mb-2">Nomad Health, New York, NY (Remote)</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Managed user account lifecycles by creating, modifying, and terminating accounts across multiple platforms</li>
                <li>Implemented single sign-on (SSO) solutions and multi-factor authentication (MFA) methods</li>
                <li>Leveraged command line and scripting languages such as Bash and PowerShell to automate routine system maintenance tasks</li>
              </ul>
            </div>
            
            {/* Job 3 */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Technical Systems Analyst, Associate</h4>
                <span className="text-gray-500 text-sm">10/2019 - 12/2021</span>
              </div>
              <div className="text-palette-purple mb-2">Atrium Health, Charlotte, NC</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Provided first and second-level support for Microsoft Office 365 applications</li>
                <li>Employed strong problem-solving skills to diagnose complex technical issues</li>
                <li>Utilized ServiceNow to manage and process tickets, troubleshoot technical issues</li>
              </ul>
            </div>

            {/* Job 4 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">US Diplomat, Public Diplomacy</h4>
                <span className="text-gray-500 text-sm">06/2013 - 08/2018</span>
              </div>
              <div className="text-palette-purple mb-2">US Department of State, Washington, DC</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Evaluated visa applications, ensuring applicants met the necessary criteria</li>
                <li>Conducted thorough security background checks on visa applicants</li>
                <li>Coordinated Media Center and Outreach during the 2015 Presidential visit to Kingston, Jamaica</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-palette-purple flex items-center">
              <School className="w-5 h-5 mr-2" /> Education
            </h3>
            
            {/* Degree 1 */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Per Scholas AWS Re/Start Training</h4>
                <span className="text-gray-500 text-sm">08/2024</span>
              </div>
              <div className="text-palette-purple">Charlotte, NC</div>
              <div className="text-gray-600">500-hour hands-on AWS training focusing on Linux Server & Bash Script, Windows Server, AWS Cloud Computing</div>
            </div>
            
            {/* Degree 2 */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Bachelor's Degree in Mass Communications</h4>
                <span className="text-gray-500 text-sm">08/2009</span>
              </div>
              <div className="text-palette-purple">Winston-Salem State University, Winston-Salem, NC</div>
              <div className="text-gray-600">Honors: Dean's List</div>
            </div>

            {/* Degree 3 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Associate's Degree in General Studies</h4>
                <span className="text-gray-500 text-sm">07/2022</span>
              </div>
              <div className="text-palette-purple">Central Piedmont Community College, Charlotte, NC</div>
              <div className="text-gray-600">Focus in Computer Science</div>
            </div>
          </div>

          {/* Certifications Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-palette-purple flex items-center">
              <FileText className="w-5 h-5 mr-2" /> Certifications
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-palette-purple/5 p-3 rounded-lg">
                <div className="font-medium">Okta Certified Professional</div>
                <div className="text-sm text-gray-600">Okta Workforce Identity Cloud | 01/2025</div>
              </div>
              <div className="bg-palette-purple/5 p-3 rounded-lg">
                <div className="font-medium">Jamf Certified Associate</div>
                <div className="text-sm text-gray-600">Jamf Pro | 12/2024</div>
              </div>
              <div className="bg-palette-purple/5 p-3 rounded-lg">
                <div className="font-medium">AWS Certified Cloud Practitioner</div>
                <div className="text-sm text-gray-600">Amazon Web Services | 07/2024</div>
              </div>
              <div className="bg-palette-purple/5 p-3 rounded-lg">
                <div className="font-medium">Google Project Management</div>
                <div className="text-sm text-gray-600">Professional Certificate | 05/2024</div>
              </div>
              <div className="bg-palette-purple/5 p-3 rounded-lg">
                <div className="font-medium">CompTIA Security+</div>
                <div className="text-sm text-gray-600">CompTIA | 04/2024</div>
              </div>
              <div className="bg-palette-purple/5 p-3 rounded-lg">
                <div className="font-medium">CompTIA Network+</div>
                <div className="text-sm text-gray-600">CompTIA | 04/2024</div>
              </div>
              <div className="bg-palette-purple/5 p-3 rounded-lg">
                <div className="font-medium">CompTIA A+</div>
                <div className="text-sm text-gray-600">CompTIA | 04/2024</div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-palette-purple flex items-center">
              <Code className="w-5 h-5 mr-2" /> Skills
            </h3>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Okta</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Jamf</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">AWS</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Google Workspace</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Jira</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Zendesk</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Bash</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">PowerShell</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Office 365</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">IT Support</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">System Administration</span>
            </div>
          </div>
        </SectionContainer>
      </div>
    </PageLayout>
  );
};

export default Resume;
