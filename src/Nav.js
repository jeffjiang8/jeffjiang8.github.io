import React from 'react';
import { NavLink } from 'react-router-dom';

const routes = [
  { to: '/', label: 'Home' },
  { to: '/summary', label: 'Summary' },
  { to: '/education', label: 'Education' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/leadershipandvolunteer', label: 'Leadership/Volunteer' },
  { to: '/contact', label: 'Contact' }
];

const Nav = () => {
  const links = routes.map(({ to, label }) => {
    return <NavLink strict exact to={to} key={to}>{label}</NavLink>}
  )

  return <nav>{ links }</nav>;
}

export default Nav
