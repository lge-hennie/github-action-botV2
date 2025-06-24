import React from 'react';
import styles from './index.module.css';
import { TextBadgeSize, TextBadgeType, TextBadgeVariant } from './index.types';

interface TextBadgeProps {
  size: TextBadgeSize;
  type: TextBadgeType;
  children: string;
  variant: TextBadgeVariant;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  style?: React.CSSProperties;
  id?: string;
}

const TextBadge: React.FC<TextBadgeProps> = ({ children, variant, size, type, Icon, style, id }) => {
  return (
    <div className={`${styles.textBadge} ${styles[variant + '-' + type]} ${styles[size]} button-05-m`} style={style} id={id}>
      {Icon && <Icon className={styles[`iconSize-${size}`]} />}
      {children}
    </div>
  );
};

export default TextBadge;
