import React from 'react';
import { IIconProps } from '../../../../types';
import { iconSize } from '../../../../utils/helpers';
/* eslint-disable max-len */

export default (props: IIconProps) => {
  const size = props.size ? iconSize[props.size] : '24';
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.2651 13.3011C19.0683 13.0682 18.7771 12.9627 18.4811 12.9627C18.163 12.9627 17.8391 13.0849 17.6223 13.3011C17.1463 13.7761 17.215 14.4566 17.6223 14.9391C17.6936 15.0237 17.7623 15.1104 17.833 15.1953C16.7182 15.0888 15.7027 14.7116 14.8116 13.7945C14.3047 13.2727 13.877 12.6958 13.4754 12.0993C13.0863 11.5212 12.722 10.9245 12.3356 10.341C12.2618 10.2295 12.1859 10.1225 12.1105 10.0146C10.3774 7.53561 8.20989 6.00009 5.11435 6.00009C4.95253 6.00009 4.7879 6.00434 4.62089 6.01265C3.15442 6.08696 3.12364 8.33082 4.5496 8.33082C4.57306 8.33082 4.59668 8.33012 4.62089 8.32895C4.78192 8.32084 4.94139 8.31659 5.09984 8.31659C6.58418 8.31659 7.95016 8.69453 9.02088 9.81776C9.67918 10.5085 10.1986 11.2996 10.7074 12.0993C10.9486 12.4784 11.1877 12.8591 11.4381 13.2325C11.6533 13.5537 11.8766 13.8727 12.1099 14.1837C12.7751 15.0699 13.5297 15.8898 14.4668 16.4973C15.4807 17.1544 16.5788 17.4436 17.7192 17.5248L17.4478 17.8181C16.6699 18.6584 17.4524 19.8198 18.3187 19.8198C18.582 19.8198 18.8533 19.7123 19.0906 19.4561L21.1815 17.1976C21.6881 16.6503 21.5314 15.9682 21.1222 15.5582C20.4939 14.8133 19.8936 14.0457 19.2651 13.3011Z'
        fill='currentColor'
      />
      <path
        d='M19.2651 10.5187C19.0683 10.7515 18.7771 10.8571 18.4811 10.8571C18.163 10.8571 17.8391 10.7349 17.6223 10.5187C17.1463 10.0437 17.215 9.36321 17.6223 8.8807C17.6936 8.79613 17.7623 8.70942 17.833 8.6245C16.7182 8.73098 15.7027 9.10818 14.8116 10.0253C14.3047 10.547 13.877 11.124 13.4754 11.7205C13.0863 12.2986 12.722 12.8952 12.3356 13.4788C12.2618 13.5903 12.1859 13.6973 12.1105 13.8052C10.3774 16.2842 8.20989 17.8197 5.11435 17.8197C4.95253 17.8197 4.7879 17.8154 4.62089 17.8071C3.15442 17.7328 3.12364 15.489 4.5496 15.489C4.57306 15.489 4.59668 15.4897 4.62089 15.4908C4.78192 15.4989 4.94139 15.5032 5.09984 15.5032C6.58418 15.5032 7.95016 15.1253 9.02088 14.002C9.67918 13.3113 10.1986 12.5202 10.7074 11.7205C10.9486 11.3414 11.1877 10.9607 11.4381 10.5872C11.6533 10.2661 11.8766 9.94713 12.1099 9.63607C12.7751 8.74985 13.5297 7.92996 14.4668 7.32253C15.4807 6.66538 16.5788 6.37615 17.7192 6.29498L17.4478 6.00173C16.6699 5.16141 17.4524 4 18.3187 4C18.582 4 18.8533 4.10753 19.0906 4.3637L21.1815 6.62222C21.6881 7.16945 21.5314 7.85155 21.1222 8.26161C20.4939 9.00645 19.8936 9.77405 19.2651 10.5187Z'
        fill='currentColor'
      />
      <path
        d='M19.2651 13.3007C19.0683 13.0679 18.7771 12.9624 18.4811 12.9624C18.163 12.9624 17.8391 13.0845 17.6223 13.3007C17.1463 13.7757 17.215 14.4562 17.6223 14.9387C17.6936 15.0233 17.7623 15.11 17.833 15.1949C16.7182 15.0884 15.7027 14.7112 14.8116 13.7941C14.3047 13.2724 13.877 12.6954 13.4754 12.0989C13.0863 11.5208 12.722 10.9242 12.3356 10.3406C12.2618 10.2291 12.1859 10.1221 12.1105 10.0142C10.3774 7.53523 8.20989 5.99971 5.11435 5.99971C4.95253 5.99971 4.7879 6.00396 4.62089 6.01227C3.15442 6.08658 3.12364 8.33044 4.5496 8.33044C4.57306 8.33044 4.59668 8.32974 4.62089 8.32857C4.78192 8.32046 4.94139 8.31621 5.09984 8.31621C6.58418 8.31621 7.95015 8.69415 9.02088 9.81738C9.67918 10.5081 10.1986 11.2993 10.7074 12.0989C10.9486 12.4781 11.1877 12.8588 11.4381 13.2322C11.6533 13.5533 11.8766 13.8723 12.1099 14.1833C12.7751 15.0696 13.5297 15.8894 14.4668 16.4969C15.4807 17.154 16.5788 17.4433 17.7192 17.5244L17.4478 17.8177C16.6699 18.658 17.4524 19.8194 18.3187 19.8194C18.582 19.8194 18.8533 19.7119 19.0906 19.4557L21.1815 17.1972C21.6881 16.65 21.5314 15.9679 21.1222 15.5578C20.4939 14.813 19.8936 14.0454 19.2651 13.3007Z'
        fill='currentColor'
      />
    </svg>
  );
};