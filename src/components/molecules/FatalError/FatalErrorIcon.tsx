import React from 'react';

interface IProps {
  variant?: 'default' | 'server' | 'task'
}


export default ({ variant = 'default' }: IProps) => {

  if (variant === 'server') {
    return <svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <mask id='mask0_692:116' maskUnits='userSpaceOnUse' x='57' y='37' width='124' height='130'>
        <path d='M146.163 37.7385C146.045 37.3029 145.649 37.0005 145.198 37.0005H57.1446L87.5805 149.097H151.592L162.85 166.005H180.989L146.163 37.7385Z' fill='url(#paint0_linear_692:116)' />
      </mask>
      <g mask='url(#mask0_692:116)'>
        <path d='M145.962 37.0005H57.1446L87.5805 149.097H151.592L162.85 166.005H180.989L145.962 37.0005Z' fill='url(#paint1_linear_692:116)' />
        <g filter='url(#filter0_f_692:116)'>
          <path d='M57.1337 37.0005H145.027L122.343 166.005H66.9482L57.1337 37.0005Z' fill='url(#paint2_linear_692:116)' />
        </g>
      </g>
      <mask id='mask1_692:116' maskUnits='userSpaceOnUse' x='20' y='37' width='126' height='130'>
        <path d='M54.6682 38.4758C54.9049 37.6049 55.6956 37.0005 56.5981 37.0005H145.899H144.6C144.148 37.0005 143.753 37.3033 143.635 37.7393L108.926 166.005H90.1385L87.6336 149.097H49.4331L38.1609 166.005H20L54.6682 38.4758Z' fill='url(#paint3_linear_692:116)' />
      </mask>
      <g mask='url(#mask1_692:116)'>
        <path d='M54.6682 38.4758C54.9049 37.6049 55.6956 37.0005 56.5981 37.0005H145.899H144.6C144.148 37.0005 143.753 37.3033 143.635 37.7393L108.926 166.005H90.1385L87.6336 149.097H49.4331L38.1609 166.005H20L54.6682 38.4758Z' fill='url(#paint4_linear_692:116)' />
        <path d='M108.926 166.005H90.1385L87.6336 149.097H49.4331L38.1609 166.005H20L54.6682 38.4758C54.9049 37.6049 55.6956 37.0005 56.5981 37.0005H145.899H143.834' stroke='black' strokeOpacity='0.05' />
        <path d='M108.926 166.005L143.835 37.0005' stroke='#EFF3F9' />
      </g>
      <path d='M82.2345 66.9295H96.3613L84.589 100.689H74.3863L82.2345 66.9295Z' fill='url(#paint5_linear_692:116)' />
      <path d='M78.1464 119.214C81.8804 118.108 84.1661 114.707 83.2516 111.618C82.3372 108.53 78.5689 106.923 74.8349 108.029C71.101 109.135 68.8153 112.536 69.7297 115.624C70.6442 118.713 74.4125 120.32 78.1464 119.214Z' fill='url(#paint6_linear_692:116)' />
      <path d='M82.2345 66.9295H96.3613L84.589 100.689H74.3863L82.2345 66.9295Z' fill='url(#paint7_linear_692:116)' />
      <path d='M78.1464 119.214C81.8804 118.108 84.1661 114.707 83.2516 111.618C82.3372 108.53 78.5689 106.923 74.8349 108.029C71.101 109.135 68.8153 112.536 69.7297 115.624C70.6442 118.713 74.4125 120.32 78.1464 119.214Z' fill='url(#paint8_linear_692:116)' />
      <path d='M74.7011 100.439L82.4331 67.1795H96.0094L84.4114 100.439H74.7011ZM83.0119 111.689C83.8751 114.605 81.7216 117.894 78.0754 118.974C74.4293 120.055 70.8327 118.469 69.9695 115.553C69.1062 112.638 71.2598 109.349 74.906 108.268C78.5521 107.188 82.1487 108.774 83.0119 111.689Z' stroke='black' strokeOpacity='0.05' strokeWidth='0.5' />
      <defs>
        <filter id='filter0_f_692:116' x='50.1337' y='30.0005' width='101.894' height='143.005' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='3.5' result='effect1_foregroundBlur_692:116' />
        </filter>
        <linearGradient id='paint0_linear_692:116' x1='119.067' y1='37.0005' x2='119.067' y2='166.005' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#8398B7' />
          <stop offset='1' stopColor='#9FB2CD' />
        </linearGradient>
        <linearGradient id='paint1_linear_692:116' x1='119.067' y1='37.0005' x2='144.352' y2='166.005' gradientUnits='userSpaceOnUse'>
          <stop offset='0.348' stopColor='#8398B7' />
          <stop offset='1' stopColor='#9FB2CD' />
        </linearGradient>
        <linearGradient id='paint2_linear_692:116' x1='101.081' y1='37.0005' x2='97.3933' y2='166.005' gradientUnits='userSpaceOnUse'>
          <stop offset='0.161255' stopColor='#687E9F' />
          <stop offset='1' stopColor='#687E9F' stopOpacity='0' />
        </linearGradient>
        <linearGradient id='paint3_linear_692:116' x1='108.745' y1='37.0005' x2='56.1112' y2='169.101' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#E4E9F2' />
          <stop offset='0.989025' stopColor='#D2DBEA' />
        </linearGradient>
        <linearGradient id='paint4_linear_692:116' x1='108.745' y1='37.0005' x2='56.1112' y2='169.101' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#E4E9F2' />
          <stop offset='0.989025' stopColor='#D2DBEA' />
        </linearGradient>
        <linearGradient id='paint5_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#6F85A5' />
          <stop offset='1' stopColor='#687E9F' />
        </linearGradient>
        <linearGradient id='paint6_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#6F85A5' />
          <stop offset='1' stopColor='#687E9F' />
        </linearGradient>
        <linearGradient id='paint7_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#6F85A5' />
          <stop offset='1' stopColor='#687E9F' />
        </linearGradient>
        <linearGradient id='paint8_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#6F85A5' />
          <stop offset='1' stopColor='#687E9F' />
        </linearGradient>
      </defs>
    </svg>;


  } else if (variant === 'task') {
    return <svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <mask id='mask0_692:83' maskUnits='userSpaceOnUse' x='34' y='36' width='134' height='133'>
        <path fillRule='evenodd' clipRule='evenodd' d='M68.217 45.7557C36.4625 64.0615 25.4135 104.389 43.5385 135.83C61.6635 167.271 102.099 177.92 133.853 159.614C165.608 141.308 176.657 100.98 158.532 69.5393C140.407 38.0983 99.9716 27.45 68.217 45.7557ZM90.892 85.0895C81.1406 90.7109 77.7771 103.146 83.3794 112.864C88.9817 122.582 101.428 125.903 111.18 120.282C120.931 114.661 124.295 102.225 118.692 92.5072C113.09 82.7891 100.643 79.468 90.892 85.0895Z' fill='url(#paint0_linear_692:83)' />
      </mask>
      <g mask='url(#mask0_692:83)'>
        <path fillRule='evenodd' clipRule='evenodd' d='M68.217 45.7557C36.4625 64.0615 25.4135 104.389 43.5385 135.83C61.6635 167.271 102.099 177.92 133.853 159.614C165.608 141.308 176.657 100.98 158.532 69.5393C140.407 38.0983 99.9716 27.45 68.217 45.7557ZM90.892 85.0895C81.1406 90.7109 77.7771 103.146 83.3794 112.864C88.9817 122.582 101.428 125.903 111.18 120.282C120.931 114.661 124.295 102.225 118.692 92.5072C113.09 82.7891 100.643 79.468 90.892 85.0895Z' fill='url(#paint1_linear_692:83)' />
        <g filter='url(#filter0_f_692:83)'>
          <path d='M30.8452 115.331C30.9743 117.165 32.4177 118.61 34.2416 118.842L40.0284 119.578C43.3176 119.997 46.0078 122.401 46.7919 125.622L49.1136 135.161C49.9964 138.788 53.3784 141.239 57.0998 140.95C60.8436 140.66 63.8162 137.683 64.1014 133.938L64.8072 124.672C65.129 120.446 68.0795 116.882 72.1708 115.777L79.3787 113.83C81.4264 113.277 82.6355 111.211 82.6709 109.09C82.7634 103.561 85.5312 98.1066 90.488 94.7123C98.5121 89.2176 109.399 91.1632 114.805 99.0579C115.412 99.9444 115.925 100.868 116.344 101.818C117.063 103.444 118.765 104.543 120.497 104.14C124.16 103.289 128.004 104.369 130.688 107.002L131.904 108.194C133.847 110.099 136.555 111.009 139.254 110.663C142.299 110.273 144.927 108.339 146.204 105.548L149.5 99C153.601 88.5908 167.5 86.5 167.5 86.5C165.563 79.6591 162.323 75.581 158.097 69.4091C136.719 38.191 93.4998 30.6125 61.5629 52.4819C40.073 67.1976 29.1674 91.497 30.8452 115.331Z' fill='url(#paint2_linear_692:83)' />
        </g>
        <g filter='url(#filter1_b_692:83)'>
          <path d='M31.0018 103.049C30.9885 104.888 32.3157 106.44 34.1161 106.813L39.8286 107.995C43.0755 108.667 45.5716 111.272 46.104 114.544L47.6803 124.234C48.2797 127.918 51.4617 130.624 55.1944 130.624C58.9494 130.624 62.1436 127.886 62.7177 124.175L64.1387 114.991C64.7867 110.803 68.0042 107.478 72.1688 106.693L79.5058 105.31C81.5902 104.917 82.9556 102.951 83.1551 100.839C83.6753 95.3335 86.857 90.11 92.0617 87.1096C100.487 82.2526 111.191 85.0351 115.97 93.3246C116.506 94.2555 116.945 95.2162 117.29 96.1952C117.881 97.8722 119.493 99.0995 121.251 98.8325C124.969 98.2676 128.717 99.6411 131.19 102.474L132.31 103.757C134.099 105.807 136.729 106.924 139.447 106.788C142.513 106.635 145.282 104.91 146.771 102.226L146.999 101.816C149.409 97.4723 153.212 94.0671 157.794 92.1491L166.074 88.6829C167.832 87.947 168.839 86.0696 168.373 84.2218C166.891 78.3559 164.59 72.6033 161.426 67.116C142.53 34.3368 100.027 23.4353 66.4926 42.7669C43.9279 55.7748 31.1741 79.1571 31.0018 103.049Z' fill='#657B9E' />
        </g>
      </g>
      <mask id='mask1_692:83' maskUnits='userSpaceOnUse' x='31' y='33' width='138' height='98'>
        <path d='M31.0018 103.049C30.9885 104.888 32.3157 106.44 34.1161 106.813L39.8286 107.995C43.0755 108.667 45.5716 111.272 46.104 114.544L47.6803 124.234C48.2797 127.918 51.4617 130.624 55.1944 130.624C58.9494 130.624 62.1436 127.886 62.7177 124.175L64.1387 114.991C64.7867 110.803 68.0042 107.478 72.1688 106.693L79.5058 105.31C81.5902 104.917 82.9556 102.951 83.1551 100.839C83.6753 95.3335 86.857 90.11 92.0617 87.1096C100.487 82.2526 111.191 85.0351 115.97 93.3246C116.506 94.2555 116.945 95.2162 117.29 96.1952C117.881 97.8722 119.493 99.0995 121.251 98.8325C124.969 98.2676 128.717 99.6411 131.19 102.474L132.31 103.757C134.099 105.807 136.729 106.924 139.447 106.788C142.513 106.635 145.282 104.91 146.771 102.226L146.999 101.816C149.409 97.4723 153.212 94.0671 157.794 92.1491L166.074 88.6829C167.832 87.947 168.839 86.0696 168.373 84.2218C166.891 78.3559 164.59 72.6033 161.426 67.116C142.53 34.3368 100.027 23.4353 66.4926 42.7669C43.9279 55.7748 31.1741 79.1571 31.0018 103.049Z' fill='url(#paint3_linear_692:83)' />
      </mask>
      <g mask='url(#mask1_692:83)'>
        <g filter='url(#filter2_b_692:83)'>
          <path d='M31.0018 103.049C30.9885 104.888 32.3157 106.44 34.1161 106.813L39.8286 107.995C43.0755 108.667 45.5716 111.272 46.104 114.544L47.6803 124.234C48.2797 127.918 51.4617 130.624 55.1944 130.624C58.9494 130.624 62.1436 127.886 62.7177 124.175L64.1387 114.991C64.7867 110.803 68.0042 107.478 72.1688 106.693L79.5058 105.31C81.5902 104.917 82.9556 102.951 83.1551 100.839C83.6753 95.3335 86.857 90.11 92.0617 87.1096C100.487 82.2526 111.191 85.0351 115.97 93.3246C116.506 94.2555 116.945 95.2162 117.29 96.1952C117.881 97.8722 119.493 99.0995 121.251 98.8325C124.969 98.2676 128.717 99.6411 131.19 102.474L132.31 103.757C134.099 105.807 136.729 106.924 139.447 106.788C142.513 106.635 145.282 104.91 146.771 102.226L146.999 101.816C149.409 97.4723 153.212 94.0671 157.794 92.1491L166.074 88.6829C167.832 87.947 168.839 86.0696 168.373 84.2218C166.891 78.3559 164.59 72.6033 161.426 67.116C142.53 34.3368 100.027 23.4353 66.4926 42.7669C43.9279 55.7748 31.1741 79.1571 31.0018 103.049Z' fill='url(#paint4_linear_692:83)' />
        </g>
        <g filter='url(#filter3_b_692:83)'>
          <path d='M31.0513 106.179C30.0798 81.2173 42.9434 56.3424 66.4926 42.7669C100.027 23.4353 142.53 34.3368 161.426 67.116C165.162 73.5966 167.696 80.4472 169.097 87.4175M83.2199 104.61C82.3346 97.8205 85.6751 90.7913 92.0617 87.1096C100.487 82.2526 111.191 85.0351 115.97 93.3246C117.068 95.2298 117.758 97.2601 118.066 99.3162' stroke='#8397B4' strokeOpacity='0.19' />
        </g>
        <g filter='url(#filter4_b_692:83)'>
          <path d='M31.0513 106.179L39.8286 107.995C43.0756 108.667 45.5716 111.272 46.104 114.544L47.6803 124.234C48.2797 127.918 51.4618 130.624 55.1944 130.624C58.9494 130.624 62.1436 127.886 62.7177 124.175L64.1387 114.991C64.7867 110.803 68.0043 107.478 72.1688 106.693L83.22 104.61M118.066 99.3162L121.251 98.8324C124.969 98.2676 128.717 99.6411 131.19 102.474L132.31 103.757C134.099 105.807 136.729 106.924 139.447 106.788C142.513 106.635 145.282 104.91 146.771 102.226L146.999 101.816C149.409 97.4723 153.212 94.0671 157.794 92.1491L169.097 87.4175' stroke='white' strokeOpacity='0.33' />
        </g>
      </g>
      <rect x='148.843' y='78.6666' width='9.23314' height='25.8528' rx='4.61657' transform='rotate(155.814 148.843 78.6666)' fill='#889BB7' />
      <rect x='148.512' y='78.541' width='8.73314' height='25.3528' rx='4.36657' transform='rotate(155.814 148.512 78.541)' stroke='#657B9E' strokeOpacity='0.28' strokeWidth='0.5' />
      <path d='M126.016 33.9388C128.33 32.868 131.074 33.8758 132.145 36.1897C133.216 38.5036 132.208 41.2475 129.894 42.3182L114.811 49.2981C112.497 50.3688 109.753 49.3611 108.682 47.0472C107.612 44.7333 108.619 41.9894 110.933 40.9186L126.016 33.9388Z' fill='#657B9E' />
      <rect x='81.1299' y='57.0938' width='9.23314' height='25.8528' rx='4.61657' transform='rotate(-58.5157 81.1299 57.0938)' fill='white' />
      <rect x='80.7861' y='57.1764' width='9.73314' height='26.3528' rx='4.86657' transform='rotate(-58.5157 80.7861 57.1764)' stroke='black' strokeOpacity='0.05' strokeWidth='0.5' />
      <rect x='63.0068' y='64' width='9.23314' height='25.8528' rx='4.61657' transform='rotate(44.1494 63.0068 64)' fill='url(#paint5_linear_692:83)' />
      <rect x='63.0121' y='64.3535' width='8.73314' height='25.3528' rx='4.36657' transform='rotate(44.1494 63.0121 64.3535)' stroke='#8699B6' strokeOpacity='0.13' strokeWidth='0.5' />
      <defs>
        <filter id='filter0_f_692:83' x='20.6768' y='29.986' width='156.823' height='120.987' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='5' result='effect1_foregroundBlur_692:83' />
        </filter>
        <filter id='filter1_b_692:83' x='15.0016' y='17.2032' width='169.485' height='129.421' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='8' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <filter id='filter2_b_692:83' x='19.0016' y='21.2032' width='161.485' height='121.421' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='6' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <filter id='filter3_b_692:83' x='18.5' y='20.7035' width='163.087' height='97.4948' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='6' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <filter id='filter4_b_692:83' x='18.95' y='74.9562' width='162.34' height='68.1681' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
          <feFlood floodOpacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='6' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <linearGradient id='paint0_linear_692:83' x1='41' y1='103' x2='167' y2='132' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#697FA1' />
          <stop offset='1' stopColor='#889BB7' />
        </linearGradient>
        <linearGradient id='paint1_linear_692:83' x1='64.5' y1='152.5' x2='165.5' y2='91.5' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#697FA1' />
          <stop offset='0.685799' stopColor='#889BB7' />
        </linearGradient>
        <linearGradient id='paint2_linear_692:83' x1='39.7595' y1='109.742' x2='166.078' y2='94.6369' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#5D7599' />
          <stop offset='1' stopColor='#697FA1' />
        </linearGradient>
        <linearGradient id='paint3_linear_692:83' x1='102.5' y1='23' x2='103' y2='146.5' gradientUnits='userSpaceOnUse'>
          <stop offset='0.235011' stopColor='#E4E9F2' />
          <stop offset='0.688608' stopColor='#E4E9F2' stopOpacity='0.43' />
        </linearGradient>
        <linearGradient id='paint4_linear_692:83' x1='102.5' y1='23' x2='103' y2='146.5' gradientUnits='userSpaceOnUse'>
          <stop offset='0.235011' stopColor='#E4E9F2' />
          <stop offset='0.688608' stopColor='#E4E9F2' stopOpacity='0.43' />
        </linearGradient>
        <linearGradient id='paint5_linear_692:83' x1='67.6234' y1='64' x2='67.6234' y2='89.8528' gradientUnits='userSpaceOnUse'>
          <stop stopColor='#889BB7' stopOpacity='0.42' />
          <stop offset='1' stopColor='#889BB7' stopOpacity='0.58' />
        </linearGradient>
      </defs>
    </svg>;
  }

  return <svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <mask id='mask0_788:26738' maskUnits='userSpaceOnUse' x='32' y='34' width='109' height='109'>
      <path d='M140.599 88.3418C140.599 118.307 116.307 142.599 86.3419 142.599C56.3766 142.599 32.085 118.307 32.085 88.3418C32.085 58.3765 56.3766 34.0849 86.3419 34.0849C116.307 34.0849 140.599 58.3765 140.599 88.3418Z' fill='#EEF1F7' />
    </mask>
    <g mask='url(#mask0_788:26738)'>
      <path d='M152.769 88.3418C152.769 125.028 123.028 154.768 86.3419 154.768C49.6554 154.768 19.9152 125.028 19.9152 88.3418C19.9152 51.6553 49.6554 21.9151 86.3419 21.9151C123.028 21.9151 152.769 51.6553 152.769 88.3418Z' fill='white' />
      <path fillRule='evenodd' clipRule='evenodd' d='M86.2574 139.015C114.29 139.015 137.015 116.29 137.015 88.2574C137.015 60.2249 114.29 37.5 86.2574 37.5C58.2249 37.5 35.5 60.2249 35.5 88.2574C35.5 116.29 58.2249 139.015 86.2574 139.015Z' fill='white' />
      <g filter='url(#filter0_f_788:26738)'>
        <path fillRule='evenodd' clipRule='evenodd' d='M88.2574 132.015C116.29 132.015 139.015 109.29 139.015 81.2574C139.015 53.2249 116.29 30.5 88.2574 30.5C60.2249 30.5 37.5 53.2249 37.5 81.2574C37.5 109.29 60.2249 132.015 88.2574 132.015Z' fill='url(#paint0_linear_788:26738)' />
      </g>
      <path fillRule='evenodd' clipRule='evenodd' d='M100.753 54.8819L99.0176 31.1519L102.01 30.9331L103.658 53.4706L124.69 42.4471L126.083 45.1043L90.3549 63.83L88.1463 85.3758L92.2352 105.832L77.0445 146.17L74.237 145.113L89.1251 105.578L85.3097 86.4899L62.8614 76.1231L56.4659 57.5069L46.5146 51.422L48.0797 48.8626L58.9523 55.5109L65.2824 73.9367L75.3333 78.5783L86.3807 73.1799L87.5348 61.921L100.999 54.8639L100.753 54.8819ZM86.0204 76.695L78.8463 80.2006L85.3531 83.2055L86.0204 76.695Z' fill='url(#paint1_radial_788:26738)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M98.4825 30.6897L102.472 30.3979L104.101 52.6739L124.901 41.7721L126.758 45.315L90.8249 64.1482L88.6514 85.3518L92.7536 105.875L77.3362 146.814L73.5929 145.404L88.6068 105.536L84.8692 86.8373L62.458 76.4875L56.0515 57.8396L45.8273 51.5877L47.914 48.1751L59.3667 55.1782L65.6859 73.5722L75.3273 78.0247L85.9117 72.8525L87.0648 61.6028L100.238 54.6983L98.4825 30.6897ZM100.753 54.8819L100.999 54.8639L87.5349 61.9209L86.3808 73.1798L75.3333 78.5783L65.2824 73.9367L58.9523 55.5108L48.0797 48.8626L46.5147 51.422L56.4659 57.5069L62.8615 76.1231L85.3097 86.4899L89.1251 105.578L74.237 145.113L77.0445 146.17L92.2352 105.832L88.1464 85.3758L90.3549 63.83L126.083 45.1043L124.69 42.4471L103.658 53.4706L102.01 30.9331L99.0177 31.1519L100.753 54.8819ZM78.8464 80.2006L85.3531 83.2055L86.0205 76.6949L78.8464 80.2006ZM80.0113 80.1879L84.9271 82.458L85.4313 77.5393L80.0113 80.1879Z' fill='url(#paint2_linear_788:26738)' />
      <path fillRule='evenodd' clipRule='evenodd' d='M100.753 54.8819L99.0174 31.1519L102.009 30.9331L103.658 53.4706L124.69 42.4471L126.083 45.1043L90.3546 63.83L88.1461 85.3758L92.235 105.832L77.0442 146.17L74.2367 145.113L89.1249 105.578L85.3094 86.4899L62.8612 76.1231L56.4657 57.5069L46.5144 51.422L48.0794 48.8626L58.952 55.5109L65.2822 73.9367L75.3331 78.5783L86.3805 73.1799L87.5346 61.921L100.999 54.8639L100.753 54.8819ZM86.0202 76.695L78.8461 80.2006L85.3528 83.2055L86.0202 76.695Z' fill='url(#paint3_linear_788:26738)' />
      <g filter='url(#filter1_f_788:26738)'>
        <path fillRule='evenodd' clipRule='evenodd' d='M86.2574 41C59.6056 41 38 62.6056 38 89.2574C38 115.909 59.6056 137.515 86.2574 137.515C112.909 137.515 134.515 115.909 134.515 89.2574C134.515 62.6056 112.909 41 86.2574 41ZM33 89.2574C33 59.8441 56.8441 36 86.2574 36C115.671 36 139.515 59.8441 139.515 89.2574C139.515 118.671 115.671 142.515 86.2574 142.515C56.8441 142.515 33 118.671 33 89.2574Z' fill='url(#paint4_linear_788:26738)' />
      </g>
    </g>
    <path fillRule='evenodd' clipRule='evenodd' d='M160.064 167.807C158.103 169.767 154.921 169.758 152.972 167.785L119.724 134.14L135.828 118.036L169.474 151.284C171.446 153.233 171.456 156.415 169.495 158.376L160.064 167.807Z' fill='#9DB0CC' />
    <path fillRule='evenodd' clipRule='evenodd' d='M158.331 173.67C156.368 175.633 153.182 175.621 151.233 173.644L116.744 138.642L137.41 117.975L170.977 151.051C173.745 153.778 173.762 158.239 171.014 160.986L158.331 173.67Z' fill='#8197B6' />
    <path fillRule='evenodd' clipRule='evenodd' d='M86.2574 139.015C114.29 139.015 137.015 116.29 137.015 88.2574C137.015 60.2249 114.29 37.5 86.2574 37.5C58.2249 37.5 35.5 60.2249 35.5 88.2574C35.5 116.29 58.2249 139.015 86.2574 139.015ZM86.2574 148.515C119.537 148.515 146.515 121.537 146.515 88.2574C146.515 54.9782 119.537 28 86.2574 28C52.9782 28 26 54.9782 26 88.2574C26 121.537 52.9782 148.515 86.2574 148.515Z' fill='url(#paint5_linear_788:26738)' />
    <path fillRule='evenodd' clipRule='evenodd' d='M122.239 135.974L151.914 166.003C154.448 168.567 158.584 168.579 161.134 166.03L167.719 159.445C170.268 156.896 170.256 152.759 167.691 150.226L136.977 119.874L137.185 119.536C142.785 110.438 146.015 99.7255 146.015 88.2574C146.015 55.2543 119.26 28.5 86.2574 28.5C53.2543 28.5 26.5 55.2543 26.5 88.2574C26.5 121.26 53.2543 148.015 86.2574 148.015C99.6117 148.015 111.942 143.635 121.891 136.233L122.239 135.974ZM137.515 88.2574C137.515 116.566 114.566 139.515 86.2574 139.515C57.9487 139.515 35 116.566 35 88.2574C35 59.9487 57.9487 37 86.2574 37C114.566 37 137.515 59.9487 137.515 88.2574ZM137.611 119.798C143.258 110.623 146.515 99.8207 146.515 88.2574C146.515 54.9782 119.537 28 86.2574 28C52.9782 28 26 54.9782 26 88.2574C26 121.537 52.9782 148.515 86.2574 148.515C99.7228 148.515 112.157 144.098 122.189 136.634L151.558 166.354C154.287 169.116 158.742 169.129 161.487 166.384L168.072 159.799C170.817 157.054 170.804 152.599 168.043 149.87L137.611 119.798ZM86.2574 139.015C114.29 139.015 137.015 116.29 137.015 88.2574C137.015 60.2249 114.29 37.5 86.2574 37.5C58.2249 37.5 35.5 60.2249 35.5 88.2574C35.5 116.29 58.2249 139.015 86.2574 139.015Z' fill='black' fillOpacity='0.05' />
    <path fillRule='evenodd' clipRule='evenodd' d='M137.515 88.2574C137.515 116.566 114.566 139.515 86.2574 139.515C57.9487 139.515 35 116.566 35 88.2574C35 59.9487 57.9487 37 86.2574 37C114.566 37 137.515 59.9487 137.515 88.2574ZM137.015 88.2574C137.015 116.29 114.29 139.015 86.2574 139.015C58.2249 139.015 35.5 116.29 35.5 88.2574C35.5 60.2249 58.2249 37.5 86.2574 37.5C114.29 37.5 137.015 60.2249 137.015 88.2574Z' fill='url(#paint6_linear_788:26738)' />
    <defs>
      <filter id='filter0_f_788:26738' x='33.5' y='26.5' width='109.515' height='109.515' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur_788:26738' />
      </filter>
      <filter id='filter1_f_788:26738' x='21' y='24' width='130.515' height='130.515' filterUnits='userSpaceOnUse' colorInterpolationFilters='sRGB'>
        <feFlood floodOpacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='6' result='effect1_foregroundBlur_788:26738' />
      </filter>
      <linearGradient id='paint0_linear_788:26738' x1='96.5' y1='31' x2='72' y2='127.5' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#EFF2F8' />
        <stop offset='0.967839' stopColor='#E3E9F1' />
      </linearGradient>
      <radialGradient id='paint1_radial_788:26738' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(86.3419 88.3419) rotate(92.9817) scale(64.2451 43.7776)'>
        <stop stopColor='#C1CCDC' />
        <stop offset='0.57585' stopColor='#C1CCDC' stopOpacity='0' />
      </radialGradient>
      <linearGradient id='paint2_linear_788:26738' x1='86' y1='31' x2='95.5' y2='159.5' gradientUnits='userSpaceOnUse'>
        <stop offset='0.106129' stopColor='white' stopOpacity='0' />
        <stop offset='0.439008' stopColor='white' />
        <stop offset='0.742576' stopColor='white' stopOpacity='0' />
      </linearGradient>
      <linearGradient id='paint3_linear_788:26738' x1='97.5' y1='33' x2='77' y2='143' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#C1CDDD' stopOpacity='0.58' />
        <stop offset='0.869931' stopColor='#C3CFE0' />
        <stop offset='0.921677' stopColor='#C1CDDD' stopOpacity='0.46' />
      </linearGradient>
      <linearGradient id='paint4_linear_788:26738' x1='107.5' y1='43.5' x2='82' y2='142.5' gradientUnits='userSpaceOnUse'>
        <stop offset='0.0362397' stopColor='#8197B6' />
        <stop offset='1' stopColor='#8197B6' stopOpacity='0' />
      </linearGradient>
      <linearGradient id='paint5_linear_788:26738' x1='86.2574' y1='28' x2='86.2574' y2='148.515' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#9EB1CD' />
        <stop offset='0.72594' stopColor='#8196B5' />
      </linearGradient>
      <linearGradient id='paint6_linear_788:26738' x1='86.2574' y1='37.5' x2='86' y2='143' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#5F7596' />
        <stop offset='1' stopColor='#8197B6' />
      </linearGradient>
    </defs>
  </svg>;
};
