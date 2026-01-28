import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-base font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary:
          'bg-teal-500 text-white hover:bg-teal-600 hover:scale-105 hover:shadow-lg focus-visible:ring-teal-500 active:scale-100',
        secondary:
          'bg-gold-500 text-navy-950 hover:bg-gold-600 focus-visible:ring-gold-500',
        outline:
          'border-2 border-white text-white bg-transparent hover:bg-white hover:text-navy-900 focus-visible:ring-white',
        ghost:
          'bg-transparent hover:bg-gray-100 hover:text-navy-900 focus-visible:ring-gray-300',
        link:
          'text-teal-600 underline-offset-4 hover:underline hover:text-teal-700',
      },
      size: {
        default: 'h-12 px-6 py-3',
        sm: 'h-9 px-4 text-sm',
        lg: 'h-14 px-8 py-4 text-lg',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
