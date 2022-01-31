import React from 'react';
import { IIconProps } from '../../../types';
import { iconSize } from '../../../utils/helpers';
/* eslint-disable max-len */

export default ({ size = 'xs', ...props }: IIconProps) => {
  return (
    <svg
      {...props}
      width={iconSize[size]}
      height={iconSize[size]}
      viewBox='0 0 41 40' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M20.4998 7C15.0919 7 10.4552 10.3021 8.49609 15H32.5034C30.5443 10.3021 25.9077 7 20.4998 7Z' fill='#8A96A8'/><path d='M20.4998 33C15.4843 33 11.1322 30.1598 8.96419 26H32.0353C29.8673 30.1598 25.5152 33 20.4998 33Z' fill='#8A96A8'/><path d='M11.3957 23C12.6597 23 13.3964 22.367 13.3964 21.3724C13.3964 20.5887 12.9328 20.1634 11.9483 19.9759L11.4878 19.8888C11.0305 19.8017 10.8336 19.6979 10.8336 19.4802C10.8336 19.2626 11.0241 19.0884 11.3989 19.0884C11.6879 19.0884 11.9006 19.1788 12.0499 19.42C12.2119 19.6778 12.3929 19.7816 12.6787 19.7816C13.0153 19.7783 13.2376 19.5606 13.2376 19.2391C13.2376 19.1286 13.2186 19.0382 13.1805 18.9411C12.9423 18.3382 12.2913 18 11.383 18C10.2937 18 9.49976 18.6129 9.49976 19.5841C9.49976 20.3342 9.99835 20.8198 10.9098 20.9906L11.3703 21.0777C11.8848 21.1748 12.0626 21.2719 12.0626 21.4997C12.0626 21.7374 11.8149 21.9116 11.4116 21.9116C11.1099 21.9116 10.8431 21.8145 10.6843 21.5767C10.5033 21.3088 10.3318 21.225 10.0777 21.225C9.74429 21.225 9.49976 21.4595 9.49976 21.8011C9.49976 21.9116 9.52199 22.0255 9.56962 22.136C9.76652 22.6082 10.3636 23 11.3957 23Z' fill='#8A96A8'/><path d='M15.881 23C16.3066 23 16.5575 22.7689 16.6813 22.2599L17.2022 20.15H17.2276L17.7484 22.2599C17.8786 22.7823 18.1168 23 18.5582 23C18.9774 23 19.2124 22.779 19.3458 22.2666L20.1429 19.1386C20.1906 18.9545 20.2191 18.7569 20.2191 18.633C20.2191 18.2311 19.9746 18 19.5554 18C19.2029 18 18.9933 18.2043 18.9139 18.6296L18.4439 21.138H18.4185L17.8437 18.5626C17.7611 18.1942 17.5451 18 17.2149 18C16.8719 18 16.6718 18.1775 16.5861 18.5626L16.0112 21.138H15.9858L15.5158 18.6296C15.4364 18.2043 15.2268 18 14.8743 18C14.4551 18 14.2106 18.2311 14.2106 18.633C14.2106 18.7602 14.2423 18.9612 14.2868 19.1386L15.0807 22.2565C15.2141 22.7823 15.4491 23 15.881 23Z' fill='#8A96A8'/><path d='M22.6085 22.2565C22.6085 22.7321 22.3639 23 21.9352 23C21.5065 23 21.2619 22.7321 21.2619 22.2565V18.7435C21.2619 18.2679 21.5065 18 21.9352 18C22.3639 18 22.6085 18.2679 22.6085 18.7435V22.2565Z' fill='#8A96A8'/><path d='M24.3722 23C24.8009 23 25.0454 22.7321 25.0454 22.2565V21.205H26.2522C26.5952 21.205 26.8048 21.0107 26.8048 20.6725C26.8048 20.3342 26.5889 20.14 26.2522 20.14H25.0454V19.2157H26.3888C26.7445 19.2157 26.9827 19.0114 26.9827 18.6497C26.9827 18.288 26.7508 18.0837 26.3888 18.0837H24.3722C23.9434 18.0837 23.6989 18.3516 23.6989 18.8272V22.2565C23.6989 22.7321 23.9434 23 24.3722 23Z' fill='#8A96A8'/><path d='M30.2294 22.2565C30.2294 22.7321 29.9849 23 29.5562 23C29.1275 23 28.8829 22.7321 28.8829 22.2565V19.2157H28.2065C27.8508 19.2157 27.6126 19.0114 27.6126 18.6497C27.6126 18.288 27.8444 18.0837 28.2065 18.0837H30.9059C31.2679 18.0837 31.4998 18.288 31.4998 18.6497C31.4998 19.0114 31.2616 19.2157 30.9059 19.2157H30.2294V22.2565Z' fill='#8A96A8'/></svg> );
};
