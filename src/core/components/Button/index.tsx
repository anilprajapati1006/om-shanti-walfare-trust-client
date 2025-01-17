import React, { FC } from 'react';

import { COMPONENT_STYLES, COMMON } from '../../constants';
import { BUTTON_TYPES } from '../../enums';

const STYLES = COMPONENT_STYLES;

type ButtonProps = {
   children?: React.ReactNode;
   onClick?: () => void;
   type?: BUTTON_TYPES.BUTTON | BUTTON_TYPES.SUBMIT | BUTTON_TYPES.RESET;
   className?: string;
   value?: string;
   transparent?: boolean;
   styles?: string;
   block?: boolean;
   sm?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, value, type, className, onClick, transparent, styles, block, sm }): JSX.Element => {
   return (
      <button
         type={type}
         className={(className || (!transparent ? STYLES.BUTTON : STYLES.BUTTON_TRANSPARENT) + (sm ? ' px-6 py-3.5 text-sm' : ' px-10 py-5')) + COMMON.EMPTY_SPACE + styles + (block ? ' w-full' : ' w-auto')}
         onClick={onClick}
      >
         {children || value}
      </button>
   );
}