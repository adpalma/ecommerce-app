import { SVGProps } from 'react';

interface NavItemProps {
  onClick: () => void;
  label: string;
  NavIcon: React.ComponentType<SVGProps<SVGSVGElement>>;
  SelectedNavIcon?: React.ComponentType<SVGProps<SVGSVGElement>>;
  isSelected?: boolean;
}

export const NavItem = ({
  onClick,
  label,
  NavIcon,
  SelectedNavIcon,
  isSelected,
}: NavItemProps) => {
  const SelectedIcon = SelectedNavIcon ? SelectedNavIcon : NavIcon;
  return (
    <li onClick={onClick}>
      {isSelected ? (
        <SelectedIcon style={{ height: '24px', width: '24px' }} />
      ) : (
        <NavIcon style={{ height: '24px', width: '24px' }} />
      )}
      <div>{label}</div>
    </li>
  );
};
