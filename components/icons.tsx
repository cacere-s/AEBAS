import * as React from 'react'
import { IconSvgProps } from '@/types'

export const PreguntasIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || width}
    height={size || height}
    viewBox='0 0 11 11'
    {...props}
  >
    <path
      d='M5.5 1C3.02 1 1 3.02 1 5.5c0 1.792 1.063 3.332 2.584 4.055L2.5 11h6L7.416 9.555C8.937 8.832 10 7.292 10 5.5C10 3.02 7.98 1 5.5 1zm-.125 1.012v1.994a1.5 1.5 0 0 0-.844.35L3.12 2.942a3.475 3.475 0 0 1 2.256-.931zm.25 0c.874.03 1.66.377 2.256.931L6.469 4.356l-.002-.002a1.5 1.5 0 0 0-.842-.348V2.012zM2.943 3.119l1.412 1.412s0 .002-.002.002a1.5 1.5 0 0 0-.347.842H2.012c.03-.874.377-1.66.931-2.256zm5.114 0c.554.596.9 1.382.931 2.256H6.994a1.5 1.5 0 0 0-.35-.844L8.058 3.12zM2.012 5.625h1.994a1.5 1.5 0 0 0 .35.844L2.942 7.88a3.475 3.475 0 0 1-.931-2.256zm4.982 0h1.994a3.474 3.474 0 0 1-.931 2.256L6.644 6.469l.002-.002a1.5 1.5 0 0 0 .348-.842zm-2.463 1.02s.002 0 .002.002A1.5 1.5 0 0 0 5 6.911v2.04a3.47 3.47 0 0 1-1.88-.895L4.53 6.644zm1.938 0L7.88 8.056A3.47 3.47 0 0 1 6 8.95V6.912a1.5 1.5 0 0 0 .469-.268z'
      fill='currentColor'
    />
  </svg>
)

export const LightbulbIcon: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={size || width}
    height={size || height}
    viewBox='0 0 24 24'
    {...props}
  >
    <path
      fill='currentColor'
      d='M8 2C4.1 2 1 5.1 1 9c0 2.4 1.2 4.5 3 5.7V17c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7M5 21c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-1H5zm15.5-6.5V16H19v-1.5zm-2-5H17V9c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1-.5 1.9-1.3 2.4l-.3.2c-.6.4-.9 1-.9 1.7v.2H19v-.2c0-1.2.6-2.3 1.6-2.9l.3-.2q.6-.45.6-1.2c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5z'
    />
  </svg>
)

export const SopaLetrasIcon: React.FC<IconSvgProps> = ({
  size,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || width}
      height={size || height}
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M2 2v20h20V2zm18 10h-4v4h4v4h-4v-4h-4v4H8v-4H4v-4h4V8H4V4h4v4h4V4h4v4h4zm-4-4v4h-4V8zm-4 4v4H8v-4z'
      />
    </svg>
  )
}

export const FotosyPalabraIcon: React.FC<IconSvgProps> = ({
  size,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size || width}
      height={size || height}
      viewBox='0 0 22 24'
      {...props}
    >
      <path
        fill='currentColor'
        d='M4.258 1.86c0 .117.203.136 1.246.136 1.047 0 1.25-.02 1.25-.137s-.203-.136-1.25-.136c-1.043 0-1.246.02-1.246.136zm2.96 0c0 .109.184.136 1.11.136.926 0 1.11-.027 1.11-.137 0-.117-.184-.136-1.11-.136-.926 0-1.11.02-1.11.136zm2.59.035c0 .101.083.207.196.234.266.094.547.582.547.973 0 .253.035.343.144.343.133 0 .149-.09.114-.554-.04-.508-.075-.59-.38-.86-.378-.344-.62-.398-.62-.136zm2.778-.036c0 .118.203.137 1.246.137 1.047 0 1.25-.02 1.25-.137s-.203-.136-1.25-.136c-1.043 0-1.246.02-1.246.136zm2.867 0c0 .118.195.137 1.156.137.961 0 1.157-.02 1.157-.137s-.196-.136-1.157-.136c-.96 0-1.156.02-1.156.136zm2.684.016c0 .094.129.238.277.32.316.172.461.48.461.942 0 .246.04.308.188.308.21 0 .23-.191.093-.77-.133-.573-1.02-1.26-1.02-.8zm-14.52.082c-.297.211-.472.672-.472 1.262 0 .433.02.496.187.496.164 0 .184-.063.184-.496 0-.508.175-.996.379-1.063.074-.027.085-.082.027-.187-.082-.149-.102-.149-.305-.012zm8.266.102c-.324.336-.41.578-.41 1.168 0 .425.02.488.187.488.164 0 .184-.063.184-.504 0-.508.113-.844.332-.973a.245.245 0 0 0 .133-.199c0-.246-.188-.234-.426.02zM10.55 4.984c0 .907.027 1.09.136 1.09.122 0 .141-.183.141-1.09 0-.906-.02-1.086-.14-1.086-.11 0-.137.18-.137 1.086zm8.324 0c0 1.028.012 1.09.188 1.09.175 0 .183-.062.183-1.09 0-1.023-.008-1.086-.183-1.086-.176 0-.188.063-.188 1.086zm-15.73.274c0 1.023.011 1.086.187 1.086s.184-.063.184-1.086c0-1.024-.008-1.086-.184-1.086s-.187.062-.187 1.086zm8.328 0c0 1.023.011 1.086.187 1.086s.184-.063.184-1.086c0-1.024-.008-1.086-.184-1.086s-.187.062-.187 1.086zm-.922 2.355c0 .907.027 1.09.136 1.09.122 0 .141-.183.141-1.09 0-.906-.02-1.086-.14-1.086-.11 0-.137.18-.137 1.086zm8.324.012c0 .988.02 1.086.168 1.059.14-.028.156-.164.187-1.098.028-1.016.016-1.059-.168-1.059-.175 0-.187.055-.187 1.098zm-15.71.234c.026.934.046 1.07.194 1.098.137.027.157-.074.157-1.062 0-1.043-.008-1.094-.184-1.094-.187 0-.195.043-.168 1.058zm8.327 0c.028.934.047 1.07.195 1.098.137.027.157-.074.157-1.062 0-1.043-.008-1.094-.184-1.094-.187 0-.195.043-.168 1.058zm-1.34 1.34c-.222.192-.351.23-.863.23-.527 0-.59.016-.59.18 0 .164.063.18.555.18.379 0 .684-.062.926-.18.433-.218.629-.5.406-.582-.176-.062-.129-.09-.434.172zm8.371-.023c-.156.16-.351.215-.832.254-.488.035-.617.078-.648.199-.027.144.047.16.539.16.61 0 1.164-.215 1.36-.523.093-.157.081-.192-.028-.239-.082-.027-.156-.054-.168-.054-.008 0-.11.093-.223.203zm-14.96.07c-.176.281.48.543 1.343.543.582 0 .645-.016.645-.18 0-.164-.063-.18-.719-.18-.492 0-.777-.046-.91-.136-.211-.156-.285-.164-.36-.047zm8.328 0c-.176.281.48.543 1.386.543.63 0 .696-.016.696-.18 0-.164-.067-.18-.758-.18-.527-.011-.824-.046-.945-.136-.211-.164-.305-.172-.38-.047zm-5.875.363c0 .172.062.18 1.156.18 1.09 0 1.156-.008 1.156-.18 0-.171-.066-.18-1.156-.18-1.094 0-1.156.008-1.156.18zm8.328 0c0 .172.062.18 1.156.18 1.09 0 1.156-.008 1.156-.18 0-.171-.066-.18-1.156-.18-1.094 0-1.156.008-1.156.18zm-10.07.88c.03.144.16.163 1.23.163 1.074 0 1.203-.02 1.234-.164.028-.136-.074-.152-1.234-.152-1.156 0-1.258.016-1.23.152zm2.945.027c0 .171.062.18 1.11.18 1.046 0 1.108-.008 1.108-.18s-.062-.18-1.109-.18-1.11.008-1.11.18zm2.59-.008c0 .097.082.199.183.234.262.082.559.606.559.988 0 .227.035.329.136.329.184 0 .184-.735 0-1.09-.136-.262-.593-.633-.777-.633-.055 0-.101.078-.101.172zm2.793-.02c.03.145.175.164 1.261.192 1.172.015 1.219.015 1.219-.164 0-.172-.055-.18-1.258-.18-1.148 0-1.25.016-1.222.152zm2.87 0c.028.145.165.164 1.165.192 1.082.015 1.129.015 1.129-.164 0-.172-.055-.18-1.164-.18-1.055 0-1.157.016-1.13.152zm2.665.02a.26.26 0 0 0 .195.234c.266.09.543.582.543.969 0 .293.031.348.195.348.188 0 .196-.04.149-.41-.082-.551-.285-.926-.649-1.133-.367-.227-.433-.227-.433-.008zm-14.547.125c-.324.262-.445.59-.445 1.25 0 .472.02.535.187.535.164 0 .184-.063.184-.578 0-.5.039-.625.242-.863.156-.18.21-.317.156-.407-.066-.11-.11-.101-.324.063zm8.308.027c-.34.356-.425.59-.425 1.223 0 .472.02.535.187.535.164 0 .184-.063.184-.578 0-.5.039-.625.242-.863.164-.2.21-.317.148-.426-.074-.125-.113-.117-.336.11zm-1.347 2.938c0 .906.027 1.086.136 1.086.122 0 .141-.18.141-1.086 0-.907-.02-1.086-.14-1.086-.11 0-.137.18-.137 1.086zm8.324 0c0 1.023.012 1.086.188 1.086.175 0 .183-.063.183-1.086 0-1.024-.008-1.086-.183-1.086-.176 0-.188.062-.188 1.086zm-15.73.316c0 1.07.011 1.133.187 1.133s.184-.063.184-1.133-.008-1.133-.184-1.133-.187.063-.187 1.133zm8.328 0c0 1.07.011 1.133.187 1.133s.184-.063.184-1.133-.008-1.133-.184-1.133-.187.063-.187 1.133zm-.922 2.313c0 .906.027 1.085.136 1.085.122 0 .141-.18.141-1.085 0-.907-.02-1.086-.14-1.086-.11 0-.137.18-.137 1.086zm8.324.007c0 .989.02 1.09.168 1.063.14-.027.156-.164.187-1.098.028-1.015.016-1.058-.168-1.058-.175 0-.187.05-.187 1.093zm-15.71.239c.026.933.046 1.07.194 1.093.137.028.157-.07.157-1.058 0-1.043-.008-1.098-.184-1.098-.187 0-.195.047-.168 1.063zm8.327 0c.028.933.047 1.07.195 1.093.137.028.157-.07.157-1.058 0-1.043-.008-1.098-.184-1.098-.187 0-.195.047-.168 1.063zm-1.25 1.297c-.156.214-.601.359-1.144.359-.297 0-.399.039-.399.137 0 .109.13.136.637.136.5 0 .695-.047.945-.207.305-.199.414-.52.203-.582-.054-.02-.168.047-.242.157zm8.281.043c-.218.218-.57.316-1.136.316-.258 0-.36.039-.36.137 0 .218 1.164.191 1.543-.043.38-.227.547-.508.344-.582-.082-.028-.148-.055-.156-.047-.012.011-.113.101-.235.218zm-14.906.082c-.082.101-.054.164.14.316.204.164.372.191 1.016.191.602 0 .778-.027.778-.129 0-.09-.192-.132-.739-.16-.519-.027-.789-.09-.906-.199-.148-.129-.195-.129-.289-.02zm8.32.007c-.066.075-.039.157.102.282.27.246 1.934.32 1.934.09 0-.118-.11-.145-.63-.145-.433 0-.73-.055-.972-.172-.258-.125-.36-.145-.434-.055zm-5.921.364c0 .117.195.136 1.156.136.96 0 1.156-.02 1.156-.136 0-.118-.195-.137-1.156-.137-.961 0-1.156.02-1.156.137zm8.328 0c0 .117.191.136 1.156.136.96 0 1.156-.02 1.156-.136 0-.118-.195-.137-1.156-.137-.965 0-1.156.02-1.156.137zM2.313 23.07v.317h4.074v-.633H2.313zm4.812 0v.317h4.07v-.633h-4.07zm4.719 0v.317h4.07v-.633h-4.07zm4.812 0v.317h4.07v-.633h-4.07zm0 0'
      />
    </svg>
  )
}

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  )
}

export const MoonFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z'
      fill='currentColor'
    />
  </svg>
)

export const SunFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g fill='currentColor'>
      <path d='M19 12a7 7 0 11-7-7 7 7 0 017 7z' />
      <path d='M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z' />
    </g>
  </svg>
)

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
      fill='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
)

export const SearchIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}
  >
    <path
      d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <path
      d='M22 22L20 20'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
  </svg>
)

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
  const { width, height = 40 } = props

  return (
    <svg
      fill='none'
      height={height}
      viewBox='0 0 161 32'
      width={width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        className='fill-black dark:fill-white'
        d='M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z'
      />
      <path
        className='fill-black dark:fill-white'
        d='M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z'
      />
      <path
        className='fill-white dark:fill-black'
        d='M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z'
      />
    </svg>
  )
}
