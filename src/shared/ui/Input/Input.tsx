import './input.scss';
import { ForwardedRef, memo } from 'react';

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  ref?: ForwardedRef<HTMLInputElement>;
}

export const Input: React.FC<IInputProps> = memo(({ name, ref, className, ...rest }) => {
  return <input className={className || 'input'} ref={ref} id={rest.id ?? (name && name)} {...rest} />;
});

export default Input;
