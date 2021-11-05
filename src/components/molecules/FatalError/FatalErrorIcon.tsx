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
        <path d='M108.926 166.005H90.1385L87.6336 149.097H49.4331L38.1609 166.005H20L54.6682 38.4758C54.9049 37.6049 55.6956 37.0005 56.5981 37.0005H145.899H143.834' stroke='black' stroke-opacity='0.05' />
        <path d='M108.926 166.005L143.835 37.0005' stroke='#EFF3F9' />
      </g>
      <path d='M82.2345 66.9295H96.3613L84.589 100.689H74.3863L82.2345 66.9295Z' fill='url(#paint5_linear_692:116)' />
      <path d='M78.1464 119.214C81.8804 118.108 84.1661 114.707 83.2516 111.618C82.3372 108.53 78.5689 106.923 74.8349 108.029C71.101 109.135 68.8153 112.536 69.7297 115.624C70.6442 118.713 74.4125 120.32 78.1464 119.214Z' fill='url(#paint6_linear_692:116)' />
      <path d='M82.2345 66.9295H96.3613L84.589 100.689H74.3863L82.2345 66.9295Z' fill='url(#paint7_linear_692:116)' />
      <path d='M78.1464 119.214C81.8804 118.108 84.1661 114.707 83.2516 111.618C82.3372 108.53 78.5689 106.923 74.8349 108.029C71.101 109.135 68.8153 112.536 69.7297 115.624C70.6442 118.713 74.4125 120.32 78.1464 119.214Z' fill='url(#paint8_linear_692:116)' />
      <path d='M74.7011 100.439L82.4331 67.1795H96.0094L84.4114 100.439H74.7011ZM83.0119 111.689C83.8751 114.605 81.7216 117.894 78.0754 118.974C74.4293 120.055 70.8327 118.469 69.9695 115.553C69.1062 112.638 71.2598 109.349 74.906 108.268C78.5521 107.188 82.1487 108.774 83.0119 111.689Z' stroke='black' stroke-opacity='0.05' stroke-width='0.5' />
      <defs>
        <filter id='filter0_f_692:116' x='50.1337' y='30.0005' width='101.894' height='143.005' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='3.5' result='effect1_foregroundBlur_692:116' />
        </filter>
        <linearGradient id='paint0_linear_692:116' x1='119.067' y1='37.0005' x2='119.067' y2='166.005' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#8398B7' />
          <stop offset='1' stop-color='#9FB2CD' />
        </linearGradient>
        <linearGradient id='paint1_linear_692:116' x1='119.067' y1='37.0005' x2='144.352' y2='166.005' gradientUnits='userSpaceOnUse'>
          <stop offset='0.348' stop-color='#8398B7' />
          <stop offset='1' stop-color='#9FB2CD' />
        </linearGradient>
        <linearGradient id='paint2_linear_692:116' x1='101.081' y1='37.0005' x2='97.3933' y2='166.005' gradientUnits='userSpaceOnUse'>
          <stop offset='0.161255' stop-color='#687E9F' />
          <stop offset='1' stop-color='#687E9F' stop-opacity='0' />
        </linearGradient>
        <linearGradient id='paint3_linear_692:116' x1='108.745' y1='37.0005' x2='56.1112' y2='169.101' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#E4E9F2' />
          <stop offset='0.989025' stop-color='#D2DBEA' />
        </linearGradient>
        <linearGradient id='paint4_linear_692:116' x1='108.745' y1='37.0005' x2='56.1112' y2='169.101' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#E4E9F2' />
          <stop offset='0.989025' stop-color='#D2DBEA' />
        </linearGradient>
        <linearGradient id='paint5_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#6F85A5' />
          <stop offset='1' stop-color='#687E9F' />
        </linearGradient>
        <linearGradient id='paint6_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#6F85A5' />
          <stop offset='1' stop-color='#687E9F' />
        </linearGradient>
        <linearGradient id='paint7_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#6F85A5' />
          <stop offset='1' stop-color='#687E9F' />
        </linearGradient>
        <linearGradient id='paint8_linear_692:116' x1='82.9448' y1='66.9295' x2='82.9448' y2='119.563' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#6F85A5' />
          <stop offset='1' stop-color='#687E9F' />
        </linearGradient>
      </defs>
    </svg>;


  } else if (variant === 'task') {
    return <svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <mask id='mask0_692:83' maskUnits='userSpaceOnUse' x='34' y='36' width='134' height='133'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M68.217 45.7557C36.4625 64.0615 25.4135 104.389 43.5385 135.83C61.6635 167.271 102.099 177.92 133.853 159.614C165.608 141.308 176.657 100.98 158.532 69.5393C140.407 38.0983 99.9716 27.45 68.217 45.7557ZM90.892 85.0895C81.1406 90.7109 77.7771 103.146 83.3794 112.864C88.9817 122.582 101.428 125.903 111.18 120.282C120.931 114.661 124.295 102.225 118.692 92.5072C113.09 82.7891 100.643 79.468 90.892 85.0895Z' fill='url(#paint0_linear_692:83)' />
      </mask>
      <g mask='url(#mask0_692:83)'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M68.217 45.7557C36.4625 64.0615 25.4135 104.389 43.5385 135.83C61.6635 167.271 102.099 177.92 133.853 159.614C165.608 141.308 176.657 100.98 158.532 69.5393C140.407 38.0983 99.9716 27.45 68.217 45.7557ZM90.892 85.0895C81.1406 90.7109 77.7771 103.146 83.3794 112.864C88.9817 122.582 101.428 125.903 111.18 120.282C120.931 114.661 124.295 102.225 118.692 92.5072C113.09 82.7891 100.643 79.468 90.892 85.0895Z' fill='url(#paint1_linear_692:83)' />
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
          <path d='M31.0513 106.179C30.0798 81.2173 42.9434 56.3424 66.4926 42.7669C100.027 23.4353 142.53 34.3368 161.426 67.116C165.162 73.5966 167.696 80.4472 169.097 87.4175M83.2199 104.61C82.3346 97.8205 85.6751 90.7913 92.0617 87.1096C100.487 82.2526 111.191 85.0351 115.97 93.3246C117.068 95.2298 117.758 97.2601 118.066 99.3162' stroke='#8397B4' stroke-opacity='0.19' />
        </g>
        <g filter='url(#filter4_b_692:83)'>
          <path d='M31.0513 106.179L39.8286 107.995C43.0756 108.667 45.5716 111.272 46.104 114.544L47.6803 124.234C48.2797 127.918 51.4618 130.624 55.1944 130.624C58.9494 130.624 62.1436 127.886 62.7177 124.175L64.1387 114.991C64.7867 110.803 68.0043 107.478 72.1688 106.693L83.22 104.61M118.066 99.3162L121.251 98.8324C124.969 98.2676 128.717 99.6411 131.19 102.474L132.31 103.757C134.099 105.807 136.729 106.924 139.447 106.788C142.513 106.635 145.282 104.91 146.771 102.226L146.999 101.816C149.409 97.4723 153.212 94.0671 157.794 92.1491L169.097 87.4175' stroke='white' stroke-opacity='0.33' />
        </g>
      </g>
      <rect x='148.843' y='78.6666' width='9.23314' height='25.8528' rx='4.61657' transform='rotate(155.814 148.843 78.6666)' fill='#889BB7' />
      <rect x='148.512' y='78.541' width='8.73314' height='25.3528' rx='4.36657' transform='rotate(155.814 148.512 78.541)' stroke='#657B9E' stroke-opacity='0.28' stroke-width='0.5' />
      <path d='M126.016 33.9388C128.33 32.868 131.074 33.8758 132.145 36.1897C133.216 38.5036 132.208 41.2475 129.894 42.3182L114.811 49.2981C112.497 50.3688 109.753 49.3611 108.682 47.0472C107.612 44.7333 108.619 41.9894 110.933 40.9186L126.016 33.9388Z' fill='#657B9E' />
      <rect x='81.1299' y='57.0938' width='9.23314' height='25.8528' rx='4.61657' transform='rotate(-58.5157 81.1299 57.0938)' fill='white' />
      <rect x='80.7861' y='57.1764' width='9.73314' height='26.3528' rx='4.86657' transform='rotate(-58.5157 80.7861 57.1764)' stroke='black' stroke-opacity='0.05' stroke-width='0.5' />
      <rect x='63.0068' y='64' width='9.23314' height='25.8528' rx='4.61657' transform='rotate(44.1494 63.0068 64)' fill='url(#paint5_linear_692:83)' />
      <rect x='63.0121' y='64.3535' width='8.73314' height='25.3528' rx='4.36657' transform='rotate(44.1494 63.0121 64.3535)' stroke='#8699B6' stroke-opacity='0.13' stroke-width='0.5' />
      <defs>
        <filter id='filter0_f_692:83' x='20.6768' y='29.986' width='156.823' height='120.987' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
          <feGaussianBlur stdDeviation='5' result='effect1_foregroundBlur_692:83' />
        </filter>
        <filter id='filter1_b_692:83' x='15.0016' y='17.2032' width='169.485' height='129.421' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='8' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <filter id='filter2_b_692:83' x='19.0016' y='21.2032' width='161.485' height='121.421' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='6' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <filter id='filter3_b_692:83' x='18.5' y='20.7035' width='163.087' height='97.4948' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='6' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <filter id='filter4_b_692:83' x='18.95' y='74.9562' width='162.34' height='68.1681' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feGaussianBlur in='BackgroundImage' stdDeviation='6' />
          <feComposite in2='SourceAlpha' operator='in' result='effect1_backgroundBlur_692:83' />
          <feBlend mode='normal' in='SourceGraphic' in2='effect1_backgroundBlur_692:83' result='shape' />
        </filter>
        <linearGradient id='paint0_linear_692:83' x1='41' y1='103' x2='167' y2='132' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#697FA1' />
          <stop offset='1' stop-color='#889BB7' />
        </linearGradient>
        <linearGradient id='paint1_linear_692:83' x1='64.5' y1='152.5' x2='165.5' y2='91.5' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#697FA1' />
          <stop offset='0.685799' stop-color='#889BB7' />
        </linearGradient>
        <linearGradient id='paint2_linear_692:83' x1='39.7595' y1='109.742' x2='166.078' y2='94.6369' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#5D7599' />
          <stop offset='1' stop-color='#697FA1' />
        </linearGradient>
        <linearGradient id='paint3_linear_692:83' x1='102.5' y1='23' x2='103' y2='146.5' gradientUnits='userSpaceOnUse'>
          <stop offset='0.235011' stop-color='#E4E9F2' />
          <stop offset='0.688608' stop-color='#E4E9F2' stop-opacity='0.43' />
        </linearGradient>
        <linearGradient id='paint4_linear_692:83' x1='102.5' y1='23' x2='103' y2='146.5' gradientUnits='userSpaceOnUse'>
          <stop offset='0.235011' stop-color='#E4E9F2' />
          <stop offset='0.688608' stop-color='#E4E9F2' stop-opacity='0.43' />
        </linearGradient>
        <linearGradient id='paint5_linear_692:83' x1='67.6234' y1='64' x2='67.6234' y2='89.8528' gradientUnits='userSpaceOnUse'>
          <stop stop-color='#889BB7' stop-opacity='0.42' />
          <stop offset='1' stop-color='#889BB7' stop-opacity='0.58' />
        </linearGradient>
      </defs>
    </svg>;
  }

  return <svg width='200' height='200' viewBox='0 0 200 200' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <mask id='mask0_692:154' maskUnits='userSpaceOnUse' x='32' y='34' width='109' height='109'>
      <circle cx='86.3419' cy='88.3418' r='54.2569' fill='#EEF1F7' />
    </mask>
    <g mask='url(#mask0_692:154)'>
      <circle cx='86.3419' cy='88.3418' r='66.4267' fill='white' />
      <path fill-rule='evenodd' clip-rule='evenodd' d='M86.2574 139.015C114.29 139.015 137.015 116.29 137.015 88.2574C137.015 60.2249 114.29 37.5 86.2574 37.5C58.2249 37.5 35.5 60.2249 35.5 88.2574C35.5 116.29 58.2249 139.015 86.2574 139.015Z' fill='white' />
      <g filter='url(#filter0_f_692:154)'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M88.2574 132.015C116.29 132.015 139.015 109.29 139.015 81.2574C139.015 53.2249 116.29 30.5 88.2574 30.5C60.2249 30.5 37.5 53.2249 37.5 81.2574C37.5 109.29 60.2249 132.015 88.2574 132.015Z' fill='url(#paint0_linear_692:154)' />
      </g>
      <path d='M98.9994 30.9026L98.7501 30.9208L98.7683 31.1701L100.499 54.8437L87.4188 61.6995L87.2998 61.7619L87.2861 61.8955L86.1462 73.0162L75.3303 78.3015L65.4841 73.7545L59.1887 55.4296L59.1595 55.3445L59.0827 55.2976L48.2101 48.6493L47.9968 48.5189L47.8664 48.7322L46.3014 51.2916L46.1709 51.5049L46.3842 51.6353L56.2587 57.6733L62.625 76.2043L62.6597 76.3053L62.7566 76.3501L85.0894 86.6636L88.8659 105.557L74.003 145.024L73.9149 145.258L74.1489 145.347L76.9564 146.404L77.1903 146.492L77.2784 146.258L92.4692 105.92L92.4944 105.853L92.4804 105.783L88.3989 85.3638L90.5899 63.9891L126.199 45.3257L126.42 45.2096L126.304 44.9882L124.912 42.3311L124.796 42.1096L124.574 42.2257L103.879 53.0723L102.259 30.9149L102.241 30.6655L101.991 30.6838L98.9994 30.9026ZM85.1401 82.8318L79.4288 80.1943L85.7258 77.1172L85.1401 82.8318Z' fill='url(#paint1_radial_692:154)' stroke='url(#paint2_linear_692:154)' stroke-width='0.5' />
      <path fill-rule='evenodd' clip-rule='evenodd' d='M100.753 54.8819L99.0173 31.1519L102.009 30.9331L103.657 53.4706L124.69 42.4471L126.083 45.1043L90.3546 63.83L88.146 85.3758L92.2349 105.832L77.0442 146.17L74.2367 145.113L89.1248 105.578L85.3094 86.4899L62.8612 76.1231L56.4656 57.5069L46.5144 51.422L48.0794 48.8626L58.952 55.5109L65.2821 73.9367L75.333 78.5783L86.3805 73.1799L87.5345 61.921L100.999 54.8639L100.753 54.8819ZM86.0201 76.695L78.8461 80.2006L85.3528 83.2055L86.0201 76.695Z' fill='url(#paint3_linear_692:154)' />
      <g filter='url(#filter1_f_692:154)'>
        <path fill-rule='evenodd' clip-rule='evenodd' d='M86.2574 140.015C114.29 140.015 137.015 117.29 137.015 89.2574C137.015 61.2249 114.29 38.5 86.2574 38.5C58.2249 38.5 35.5 61.2249 35.5 89.2574C35.5 117.29 58.2249 140.015 86.2574 140.015Z' stroke='url(#paint4_linear_692:154)' stroke-width='5' />
      </g>
    </g>
    <mask id='mask1_692:154' maskUnits='userSpaceOnUse' x='119' y='118' width='51' height='50'>
      <path fill-rule='evenodd' clip-rule='evenodd' d='M162.91 164.961C159.38 168.491 153.652 168.474 150.144 164.923L119.724 134.14L135.828 118.036L166.612 148.456C170.162 151.964 170.179 157.692 166.649 161.221L162.91 164.961Z' fill='black' />
    </mask>
    <g mask='url(#mask1_692:154)'>
      <path fill-rule='evenodd' clip-rule='evenodd' d='M160.064 167.807C158.103 169.767 154.921 169.758 152.972 167.785L119.724 134.14L135.828 118.036L169.474 151.284C171.446 153.233 171.456 156.415 169.495 158.376L160.064 167.807Z' fill='#9DB0CC' />
      <path fill-rule='evenodd' clip-rule='evenodd' d='M158.33 173.67C156.368 175.633 153.182 175.621 151.233 173.644L116.744 138.642L137.41 117.975L170.977 151.051C173.745 153.778 173.762 158.239 171.014 160.986L158.33 173.67Z' fill='#8197B6' />
    </g>
    <circle cx='86.2574' cy='88.2574' r='55.5074' stroke='url(#paint5_linear_692:154)' stroke-width='9.5' />
    <path fill-rule='evenodd' clip-rule='evenodd' d='M86.2574 139.015C114.29 139.015 137.015 116.29 137.015 88.2574C137.015 60.2249 114.29 37.5 86.2574 37.5C58.2249 37.5 35.5 60.2249 35.5 88.2574C35.5 116.29 58.2249 139.015 86.2574 139.015ZM86.2574 148.515C119.537 148.515 146.515 121.537 146.515 88.2574C146.515 54.9782 119.537 28 86.2574 28C52.9782 28 26 54.9782 26 88.2574C26 121.537 52.9782 148.515 86.2574 148.515Z' fill='url(#paint6_linear_692:154)' />
    <path d='M122.367 136.458L122.214 136.304L122.04 136.434C112.049 143.866 99.6673 148.265 86.2574 148.265C53.1162 148.265 26.25 121.399 26.25 88.2574C26.25 55.1162 53.1162 28.25 86.2574 28.25C119.399 28.25 146.265 55.1162 146.265 88.2574C146.265 99.7731 143.021 110.53 137.398 119.667L137.294 119.836L137.435 119.976L167.867 150.048C170.53 152.679 170.543 156.975 167.895 159.622L161.31 166.207C158.663 168.854 154.367 168.841 151.736 166.179L122.367 136.458ZM86.2574 139.265C114.428 139.265 137.265 116.428 137.265 88.2574C137.265 60.0868 114.428 37.25 86.2574 37.25C58.0868 37.25 35.25 60.0868 35.25 88.2574C35.25 116.428 58.0868 139.265 86.2574 139.265Z' stroke='black' stroke-opacity='0.05' stroke-width='0.5' />
    <path d='M86.2574 139.265C114.428 139.265 137.265 116.428 137.265 88.2574C137.265 60.0868 114.428 37.25 86.2574 37.25C58.0868 37.25 35.25 60.0868 35.25 88.2574C35.25 116.428 58.0868 139.265 86.2574 139.265Z' stroke='url(#paint7_linear_692:154)' stroke-width='0.5' />
    <defs>
      <filter id='filter0_f_692:154' x='33.5' y='26.5' width='109.515' height='109.515' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='2' result='effect1_foregroundBlur_692:154' />
      </filter>
      <filter id='filter1_f_692:154' x='21' y='24' width='130.515' height='130.515' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'>
        <feFlood flood-opacity='0' result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation='6' result='effect1_foregroundBlur_692:154' />
      </filter>
      <linearGradient id='paint0_linear_692:154' x1='96.5' y1='31' x2='72' y2='127.5' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#EFF2F8' />
        <stop offset='0.967839' stop-color='#E3E9F1' />
      </linearGradient>
      <radialGradient id='paint1_radial_692:154' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='translate(86.3419 88.3419) rotate(92.9817) scale(64.2451 43.7776)'>
        <stop stop-color='#C1CCDC' />
        <stop offset='0.57585' stop-color='#C1CCDC' stop-opacity='0' />
      </radialGradient>
      <linearGradient id='paint2_linear_692:154' x1='86' y1='31' x2='95.5' y2='159.5' gradientUnits='userSpaceOnUse'>
        <stop offset='0.106129' stop-color='white' stop-opacity='0' />
        <stop offset='0.439008' stop-color='white' />
        <stop offset='0.742576' stop-color='white' stop-opacity='0' />
      </linearGradient>
      <linearGradient id='paint3_linear_692:154' x1='97.5' y1='33' x2='77' y2='143' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#C1CDDD' stop-opacity='0.58' />
        <stop offset='0.869931' stop-color='#C3CFE0' />
        <stop offset='0.921677' stop-color='#C1CDDD' stop-opacity='0.46' />
      </linearGradient>
      <linearGradient id='paint4_linear_692:154' x1='107.5' y1='43.5' x2='82' y2='142.5' gradientUnits='userSpaceOnUse'>
        <stop offset='0.0362397' stop-color='#8197B6' />
        <stop offset='1' stop-color='#8197B6' stop-opacity='0' />
      </linearGradient>
      <linearGradient id='paint5_linear_692:154' x1='86.2574' y1='28' x2='86.2574' y2='148.515' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#9EB1CD' />
        <stop offset='0.72594' stop-color='#8196B5' />
      </linearGradient>
      <linearGradient id='paint6_linear_692:154' x1='86.2574' y1='28' x2='86.2574' y2='148.515' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#9EB1CD' />
        <stop offset='0.72594' stop-color='#8196B5' />
      </linearGradient>
      <linearGradient id='paint7_linear_692:154' x1='86.2574' y1='37.5' x2='86' y2='143' gradientUnits='userSpaceOnUse'>
        <stop stop-color='#5F7596' />
        <stop offset='1' stop-color='#8197B6' />
      </linearGradient>
    </defs>
  </svg>;


};
