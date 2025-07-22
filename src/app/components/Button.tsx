import { forwardRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: 'arrow' | 'external' | React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ 
    children, 
    variant = 'primary', 
    size = 'md', 
    href, 
    external = false,
    icon,
    disabled = false,
    loading = false,
    className = '',
    onClick,
    type = 'button',
    ...props 
  }) => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md transform hover:scale-105',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500',
      outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:ring-gray-500'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-sm rounded-lg',
      lg: 'px-6 py-3 text-base rounded-lg'
    };

    const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const renderIcon = () => {
      if (loading) {
        return <div className="loading-spinner mr-2" />;
      }
      
      if (icon === 'arrow') {
        return <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />;
      }
      
      if (icon === 'external') {
        return <ExternalLink className="ml-2 h-4 w-4" />;
      }
      
      if (icon && typeof icon !== 'string') {
        return <span className="ml-2">{icon}</span>;
      }
      
      return null;
    };

    const content = (
      <>
        {loading && <div className="loading-spinner mr-2" />}
        {children}
        {!loading && renderIcon()}
      </>
    );

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes} group`}
            {...props}
          >
            {content}
          </a>
        );
      }
      
      return (
        <Link href={href} className={`${classes} group`} {...props}>
          {content}
        </Link>
      );
    }

    return (
      <button
        type={type}
        className={`${classes} group`}
        disabled={disabled || loading}
        onClick={onClick}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;