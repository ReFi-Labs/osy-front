import {
  ICON_DEFAULT_COLOR,
  ICON_DEFAULT_SIZE,
  ICON_PROPERTY_TRANSFORM_REVERSE,
  ICON_STYLE_TRANSFORM_REVERSE,
} from '@/configs/icons';
import SvgIconProps from '@/types/SvgIconProps';

export const SvgIconChevLeft: React.FC<SvgIconProps> = ({
  size = ICON_DEFAULT_SIZE,
  color = ICON_DEFAULT_COLOR,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M9.75669 11.966L14.2344 16.9596L13.0633 18.2656L8.01663 12.6375C7.68213 12.2644 7.68211 11.6677 8.01663 11.2946L13.0633 5.66646L14.2344 6.97245L9.75669 11.966Z"
        fill={color}
      />
    </g>
  </svg>
);

export const SvgIconChevRight: React.FC<SvgIconProps> = ({
  size = ICON_DEFAULT_SIZE,
  color = ICON_DEFAULT_COLOR,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M14.2433 11.966L9.76562 16.9596L10.9367 18.2656L15.9834 12.6375C16.3179 12.2644 16.3179 11.6677 15.9834 11.2946L10.9367 5.66646L9.76562 6.97245L14.2433 11.966Z"
        fill={color}
      />
    </g>
  </svg>
);

export const SvgIconExpandLess: React.FC<SvgIconProps> = ({
  size = ICON_DEFAULT_SIZE,
  color = ICON_DEFAULT_COLOR,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M12.0027 10.7225L7.00911 15.2002L5.70312 14.0291L11.3313 8.98245C11.7043 8.64795 12.3011 8.64793 12.6741 8.98245L18.3023 14.0291L16.9963 15.2002L12.0027 10.7225Z"
        fill={color}
      />
    </g>
  </svg>
);

export const SvgIconExpandMore: React.FC<SvgIconProps> = ({
  size = ICON_DEFAULT_SIZE,
  color = ICON_DEFAULT_COLOR,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M12.0027 13.2091L7.00911 8.73145L5.70312 9.90251L11.3313 14.9492C11.7043 15.2837 12.3011 15.2837 12.6741 14.9492L18.3023 9.90251L16.9963 8.73145L12.0027 13.2091Z"
        fill={color}
      />
    </g>
  </svg>
);

export const SvgIconArrowRight: React.FC<SvgIconProps> = ({
  size = ICON_DEFAULT_SIZE,
  color = ICON_DEFAULT_COLOR,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M18.5974 11.747L13.8096 6.78516L12.6366 7.97096L16.0785 11.5379H4.85156V13.2219H16.0785L12.6366 16.7889L13.8096 17.9747L18.5974 13.0128C18.9363 12.6616 18.9363 12.0982 18.5974 11.747Z"
        fill={color}
      />
    </g>
  </svg>
);

export const SvgIconArrowLeft: React.FC<SvgIconProps> = ({
  size = ICON_DEFAULT_SIZE,
  color = ICON_DEFAULT_COLOR,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    transform={ICON_PROPERTY_TRANSFORM_REVERSE}
    style={{ transform: ICON_STYLE_TRANSFORM_REVERSE }}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path
        d="M18.5974 11.747L13.8096 6.78516L12.6366 7.97096L16.0785 11.5379H4.85156V13.2219H16.0785L12.6366 16.7889L13.8096 17.9747L18.5974 13.0128C18.9363 12.6616 18.9363 12.0982 18.5974 11.747Z"
        fill={color}
      />
    </g>
  </svg>
);
