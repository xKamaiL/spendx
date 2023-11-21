
import { icons as LucideIcons } from 'lucide-react';

const Icon = ({
  name,
  color,
  size,
  className,
}: {
  name: keyof typeof LucideIcons;
  color?: string;
  size?: string;
  className?: string;
}) => {
  const LucideIcon = LucideIcons[name];

  return <LucideIcon color={color} size={size} className={className} />;
};
}

export default Icon
