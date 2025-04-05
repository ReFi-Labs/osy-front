import Icon, { Props } from './Icon';
import {
  SvgIconChevLeft,
  SvgIconChevRight,
  SvgIconExpandLess,
  SvgIconExpandMore,
  SvgIconArrowRight,
  SvgIconArrowLeft,
} from './svgComponent';

export function IconChevLeft(props: Props) {
  return <Icon {...props} icon={SvgIconChevLeft} />;
}

export function IconChevRight(props: Props) {
  return <Icon {...props} icon={SvgIconChevRight} />;
}

export function IconExpandLess(props: Props) {
  return <Icon {...props} icon={SvgIconExpandLess} />;
}

export function IconExpandMore(props: Props) {
  return <Icon {...props} icon={SvgIconExpandMore} />;
}

export function IconArrowRight(props: Props) {
  return <Icon {...props} icon={SvgIconArrowRight} />;
}

export function IconArrowLeft(props: Props) {
  return <Icon {...props} icon={SvgIconArrowLeft} />;
}
