import { NavItem } from '@/common/navigation/dto/navigation.dto';

export interface MobileMenuProps {
    navItems: NavItem[];
    toggleMenu: () => void;
    theme: string;
}
