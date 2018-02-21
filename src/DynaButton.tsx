import * as React from "react";
import {EColor} from "dyna-ui-styles";

import "./dyna-button.less";

export enum EStyle {
  ROUNDED = "ROUNDED",
  FLAT = "FLAT",
}

export {EColor}

export enum ESize {
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  XLARGE = "XLARGE",
}

export interface IDynaButtonProps {
  className?: string;
  children: any;
  style?: EStyle;
  color?: EColor;
  size?: ESize;
  href?: string
  onClick?: () => void;
}

export class DynaButton extends React.Component<IDynaButtonProps> {
  static defaultProps: IDynaButtonProps = {
    className: '',
    children: null,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
    size: ESize.MEDIUM,
    href: null,
    onClick: () => undefined,
  };

  public render(): JSX.Element {
    const {
      className: cn,
      children,
      style, color, size,
      href, onClick
    } = this.props;

    const className: string = [
      'dyna-button',
      `dnbtn-style-${style}`,
      `dnbtn-color-${color}`,
      `dnbtn-size-${size}`,
    ].join(' ').trim();

    return (
      <a className={className} href={href} onClick={onClick}>
        <button className={cn || ''}>{children}</button>
      </a>
    );
  }
}
