import { ViewProps } from 'react-native';

export interface IAccordionProps extends ViewProps {
  defaultExpanded?: boolean;
  expanded?: boolean;
  onToggle?: (expanded: boolean) => void;
  disabled?: boolean;
  children: React.ReactNode;
}

export interface IAccordionHeaderProps extends ViewProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  expandIcon?: React.ReactNode;
}

export interface IAccordionContentProps extends ViewProps {
  children: React.ReactNode;
}
