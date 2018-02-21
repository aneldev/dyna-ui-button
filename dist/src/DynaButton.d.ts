import * as React from "react";
import { EColor } from "dyna-ui-styles";
import "./dyna-button.less";
export declare enum EStyle {
    ROUNDED = "ROUNDED",
    FLAT = "FLAT",
}
export { EColor };
export declare enum ESize {
    SMALL = "SMALL",
    MEDIUM = "MEDIUM",
    LARGE = "LARGE",
    XLARGE = "XLARGE",
}
export interface IDynaButtonProps {
    children: any;
    style?: EStyle;
    color?: EColor;
    size?: ESize;
    href?: string;
    onClick?: () => void;
}
export declare class DynaButton extends React.Component<IDynaButtonProps> {
    static defaultProps: IDynaButtonProps;
    render(): JSX.Element;
}
