
import { cn } from '@/lib/utils';
import Button from './Button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  className?: string;
}

const ProjectCard = ({ title, description, tags, image, link, className }: ProjectCardProps) => {
  return (
    <div 
      className={cn(
        'bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg', 
        className
      )}
    >
      {image && (
        <div className="h-48 w-full overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-palette-purple mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs bg-palette-purple/10 text-palette-purple rounded-full px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
        
        {link && (
          <Button href={link} variant="outline" size="sm" external>
            View Project
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
