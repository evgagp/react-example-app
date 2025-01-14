import './button.scss';
import { ComponentProps, FC, memo, Ref } from 'react';
import cn from 'classnames';

type ButtonVariantTypes = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger';

interface IButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariantTypes;
  isActive?: boolean;
  className?: string;
  ref?: Ref<HTMLButtonElement>;
}

export const buttonVariant: Record<ButtonVariantTypes, string> = {
  default: 'button_default',
  secondary: 'button_secondary',
  primary: 'button_primary',
  success: 'button_success',
  warning: 'button_warning',
  info: 'button_info',
  danger: 'button_danger',
} as const;

export const Button: FC<IButtonProps> = memo(({ variant = 'default', isActive, className, ref, ...rest }) => {
  const classNames = cn([
    className,
    'button',
    buttonVariant[variant],
    isActive && buttonVariant[variant] + '__active',
    rest.disabled && buttonVariant[variant] + '__disabled',
  ]);

  return (
    <button ref={ref} disabled={rest.disabled} className={classNames} {...rest}>
      {rest.children}
    </button>
  );
});
