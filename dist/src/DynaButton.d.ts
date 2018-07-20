import * as React from "react";
import { EColor } from "dyna-ui-styles";
import "./dyna-button.less";
export declare enum EStyle {
    ROUNDED = "ROUNDED",
    FLAT = "FLAT"
}
export { EColor };
export declare enum ESize {
    XSMALL = "XSMALL",
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE",
    XLARGE = "XLARGE",
    XXLARGE = "XXLARGE"
}
export interface IDynaButtonProps {
    className?: string;
    children: any;
    style?: EStyle;
    color?: EColor;
    size?: ESize;
    disabled?: boolean;
    href?: string;
    onClick?: () => void;
}
export declare class DynaButton extends React.Component<IDynaButtonProps> {
    static defaultProps: IDynaButtonProps;
    private handleClick;
    render(): JSX.Element;
}
