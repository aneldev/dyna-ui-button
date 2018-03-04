import * as React from 'react';
import {DynaButton, EColor, ESize, EStyle, IDynaButtonProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";
import {IShowcaseViewProps} from "dyna-showcase/dist/interfaces";

require('./showcase.less');

export default {
  logo: <Logo />,
  views: [
    {
      slug: 'intro',
      faIconName: 'circle-o-notch',
      title: 'Introduction',
      center: true,
      component: (
        <div>
          <h3>dyna button</h3>
          <h4>a simple react button</h4>
          <p>Concept: <code>style</code>, <code>color</code> and <code>size</code>, </p>
        </div>
      ),
    },

    {
      slug: 'rounded-sizes',
      faIconName: 'flask',
      title: 'rounded - white/black - sizes',
      center: true,
      component: (() => {
        class MyApp extends React.Component {
          private renderButtonEnabledDisabled(key:number, size: ESize): JSX.Element {
            return (
              <div className="button-container" key={key}>
                <DynaButton
                  {...this.props}
                  size={size}
                  onClick={() => console.log('button pressed')}
                >Enabled {size.toLowerCase()}</DynaButton>
                <DynaButton
                  {...this.props}
                  size={size}
                  disabled
                  onClick={() => console.log('button pressed')}
                >Disabled {size.toLowerCase()}</DynaButton>
              </div>

            );
          }

          public renderSizes(): JSX.Element[] {
            return Object.keys(ESize).map((size: ESize, index:number) => {
              return this.renderButtonEnabledDisabled(index, size);
            });
          }

          public render(): JSX.Element[] {
            return this.renderSizes();
          }
        }
        return <MyApp />;
      })(),
      wrapperStyle:{
      },
      props: (() => {
        const props: IShowcaseViewProps[] = [];
        Object.keys(EStyle).forEach((style: EStyle) => {
          Object.keys(EColor).forEach((color: EColor) => {
            props.push({
              slug: `style-${style}-color-${color}`,
              title: `Style ${style} Color-${color}`,
              props: {
                style, color,
              }
            } as IShowcaseViewProps);
          });
        });
        return props;
      })(),
    },

    {
      slug: 'the-end',
      title: 'the end',
      description: 'Thank you',
      center: true,
      component: (
        <div style={{textAlign: 'center'}}>
          <h1>The end</h1>
          <div style={{fontSize: '20px'}}>
            <p><a href="https://github.com/aneldev/dyna-ui-button">{faIcon('github')} Github</a></p>
            <p><a href="https://www.npmjs.com/package/dyna-ui-button">{faIcon('square')} npm</a></p>
          </div>
        </div>
      ),
    },
  ]
}as IShowcase;
