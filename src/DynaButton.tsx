import * as React from "react";
import {DynaFastClick} from "dyna-ui-fast-click";
import {EColor} from "dyna-ui-styles";

import "./dyna-button.less";

export enum EStyle {
  ROUNDED = "ROUNDED",
  FLAT = "FLAT",
}

export {EColor}

export enum ESize {
  XSMALL = "XSMALL",
  SMALL = "SMALL",
  MEDIUM = "MEDIUM",
  LARGE = "LARGE",
  XLARGE = "XLARGE",
  XXLARGE = "XXLARGE",
}

export interface IDynaButtonProps {
  className?: string;
  children: any;
  style?: EStyle;
  color?: EColor;
  size?: ESize;
  disabled?: boolean;
  href?: string;
  target?: string;
  onClick?: () => void;
}

export class DynaButton extends React.Component<IDynaButtonProps> {
  static defaultProps: IDynaButtonProps = {
    className: '',
    children: null,
    style: EStyle.ROUNDED,
    color: EColor.WHITE_BLACK,
    size: ESize.MEDIUM,
    disabled: false,
    href: null,
    target: "_blank",
    onClick: () => undefined,
  };

  private handleClick(): void {
    const {disabled, onClick} = this.props;
    if (disabled) return;
    onClick();
  }

  public render(): JSX.Element {
    const {
      className: cn,
      children,
      style, color, size,
      disabled,
      href, target,
    } = this.props;

    const className: string = [
      'dyna-button',
      `dnbtn-style-${style}`,
      `dnbtn-color-${color}`,
      `dnbtn-size-${size}`,
    ].join(' ').trim();

    return (
      <a className={className} href={href} target={href && target || null}>
        <DynaFastClick
          onClick={this.handleClick.bind(this)}
        >
          <button
            className={cn || ''}
            disabled={disabled}
          >{children}</button>
        </DynaFastClick>
      </a>
    );
  }
}
