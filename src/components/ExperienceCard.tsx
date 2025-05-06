
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  position: string;
  company: string;
  period: string;
  description: string[];
  skills?: string[];
  className?: string;
}

const ExperienceCard = ({
  position,
  company,
  period,
  description,
  skills,
  className,
}: ExperienceCardProps) => {
  return (
    <div className={cn('border-l-2 border-palette-purple pl-6 pb-10 relative', className)}>
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-palette-purple"></div>
      <div className="mb-1">
        <h3 className="text-lg font-semibold text-palette-purple">{position}</h3>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm">
          <span className="font-medium text-gray-700">{company}</span>
          <span className="text-gray-500">{period}</span>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        {description.map((item, index) => (
          <p key={index} className="text-gray-600 text-sm">
            • {item}
          </p>
        ))}
      </div>

      {skills && skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="text-xs bg-palette-turquoise/10 text-palette-turquoise rounded-full px-2 py-1"
            >
              {skill}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;
