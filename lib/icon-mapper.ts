import {
  FileText,
  Languages,
  GraduationCap,
  Plane,
  FileEdit,
  FileCheck,
  Heart,
  CreditCard,
  BookOpen,
  Award,
  Home,
  MoreHorizontal,
  Users,
  Landmark,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  FileText,
  Languages,
  GraduationCap,
  Plane,
  FileEdit,
  FileCheck,
  Heart,
  IdCard: CreditCard,
  CreditCard,
  BookOpen,
  Award,
  Home,
  MoreHorizontal,
  Users,
  Landmark,
};

export function getIconComponent(iconName: string): LucideIcon {
  return iconMap[iconName] || FileText;
}
