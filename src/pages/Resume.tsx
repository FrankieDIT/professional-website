
import PageLayout from '@/components/PageLayout';
import SectionContainer from '@/components/SectionContainer';
import Button from '@/components/Button';
import { FileText, Download } from 'lucide-react';

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
            <h2 className="text-3xl font-bold text-palette-purple">Your Name</h2>
            <p className="text-xl text-gray-600">Professional Title</p>
            <div className="flex justify-center items-center gap-4 mt-2 text-sm text-gray-500">
              <span>yourname@example.com</span>
              <span className="hidden sm:block">•</span>
              <span>(123) 456-7890</span>
              <span className="hidden sm:block">•</span>
              <span>City, State</span>
            </div>
            <div className="flex justify-center gap-3 mt-2">
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-palette-purple hover:text-palette-purple-dark transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-palette-purple hover:text-palette-purple-dark transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a 
                href="https://yourportfolio.com" 
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
              A concise professional summary highlighting your most important qualifications, skills, and career achievements. 
              Make it compelling and tailored to the type of positions you're targeting.
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
                <h4 className="font-medium">Job Title</h4>
                <span className="text-gray-500 text-sm">Jan 2021 - Present</span>
              </div>
              <div className="text-palette-purple mb-2">Company Name, City, State</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Key accomplishment or responsibility with quantifiable results</li>
                <li>Another significant achievement from this position</li>
                <li>Additional notable contribution or skill demonstrated</li>
              </ul>
            </div>
            
            {/* Job 2 */}
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Previous Job Title</h4>
                <span className="text-gray-500 text-sm">Jun 2018 - Dec 2020</span>
              </div>
              <div className="text-palette-purple mb-2">Previous Company, City, State</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Key accomplishment or responsibility with quantifiable results</li>
                <li>Another significant achievement from this position</li>
                <li>Additional notable contribution or skill demonstrated</li>
              </ul>
            </div>
            
            {/* Job 3 */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Earlier Job Title</h4>
                <span className="text-gray-500 text-sm">Sep 2016 - May 2018</span>
              </div>
              <div className="text-palette-purple mb-2">Earlier Company, City, State</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Key accomplishment or responsibility with quantifiable results</li>
                <li>Another significant achievement from this position</li>
                <li>Additional notable contribution or skill demonstrated</li>
              </ul>
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4 text-palette-purple flex items-center">
              <GraduationCap className="w-5 h-5 mr-2" /> Education
            </h3>
            
            {/* Degree 1 */}
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Degree Name</h4>
                <span className="text-gray-500 text-sm">Graduation Year</span>
              </div>
              <div className="text-palette-purple">University Name, City, State</div>
              <div className="text-gray-600">Relevant coursework, honors, or achievements</div>
            </div>
            
            {/* Degree 2 (if applicable) */}
            <div>
              <div className="flex flex-col sm:flex-row justify-between mb-1">
                <h4 className="font-medium">Earlier Degree Name</h4>
                <span className="text-gray-500 text-sm">Graduation Year</span>
              </div>
              <div className="text-palette-purple">University Name, City, State</div>
              <div className="text-gray-600">Relevant coursework, honors, or achievements</div>
            </div>
          </div>

          {/* Skills Section */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-palette-purple flex items-center">
              <Code className="w-5 h-5 mr-2" /> Skills
            </h3>
            
            <div className="flex flex-wrap gap-2">
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 1</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 2</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 3</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 4</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 5</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 6</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 7</span>
              <span className="bg-palette-purple/10 text-palette-purple px-3 py-1 rounded-full text-sm">Skill 8</span>
            </div>
          </div>
        </SectionContainer>
      </div>
    </PageLayout>
  );
};

export default Resume;
