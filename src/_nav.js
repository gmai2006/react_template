import React from 'react';
import CIcon from '@coreui/icons-react';
import { cilPuzzle } from '@coreui/icons';
import { CNavGroup, CNavItem } from '@coreui/react';
import { allTables } from './allTables';

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
  },
  {
    component: CNavGroup,
    name: 'Tables',
    to: '/tables',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: allTables,
  },
];

export default _nav;
