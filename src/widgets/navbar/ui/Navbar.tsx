import { Button } from '@/shared/ui';
import cn from 'classnames';
import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './navbar.module.scss';

const Links = [
  { to: '/', label: 'Main' },
  { to: '/todos', label: 'Tasks' },
];

export const Navbar = memo(() => {
  return (
    <div className={classes['navbar']}>
      <nav className={classes['navbar-container']}>
        {Links.map(({ to, label }) => (
          <NavLink to={to} key={to} aria-label={label}>
            {({ isActive }) => (
              <Button className={cn(classes['navbar-button'], isActive && classes['navbar-button__active'])}>
                {label}
              </Button>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  );
});
