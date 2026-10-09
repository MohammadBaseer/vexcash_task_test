import {
  FaRegMoneyBillAlt,
  FaRegFileAlt,
  FaUserCircle,
  FaRegEnvelope,
  FaRegEdit,
  FaRegHandshake,
  FaSignOutAlt,
} from 'react-icons/fa';
import type { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'kredite', label: 'Kredite', icon: FaRegMoneyBillAlt },
  { id: 'dokumente', label: 'Dokumente hochladen', icon: FaRegFileAlt },
  { id: 'persoenliche-daten', label: 'Persönliche Daten', icon: FaUserCircle },
  { id: 'email', label: 'E-Mail ändern', icon: FaRegEnvelope },
  { id: 'kennwort', label: 'Kennwort ändern', icon: FaRegEdit },
  { id: 'kunden-werben', label: 'Kunden werben', icon: FaRegHandshake },
  { id: 'abmelden', label: 'Abmelden', icon: FaSignOutAlt },
];
