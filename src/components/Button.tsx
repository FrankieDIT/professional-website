
import { forwardRef, ButtonHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  className?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', to, href, className, external = false, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-palette-purple';
    
    const variantStyles: Record<ButtonVariant, string> = {
      primary: 'bg-palette-purple text-white hover:bg-palette-purple-dark',
      secondary: 'bg-palette-turquoise text-white hover:bg-palette-turquoise-dark',
      outline: 'border border-palette-purple text-palette-purple hover:bg-palette-purple/5',
      ghost: 'text-palette-purple hover:bg-palette-purple/5'
    };

    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3'
    };

    const buttonStyles = cn(baseStyles, variantStyles[variant], sizeStyles[size], className);

    if (to) {
      return (
        <Link to={to} className={buttonStyles}>
          {children}
        </Link>
      );
    }

    if (href) {
      return (
        <a 
          href={href} 
          className={buttonStyles}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={buttonStyles} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
