import * as React from 'react';
import {DynaButton, EColor, ESize, EStyle, IDynaButtonProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

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
          public render(): JSX.Element {
            return (
              <div>
                <h4>enabled</h4>
                <DynaButton
                  {...this.props}
                  onClick={() => console.log('button pressed')}
                >dyna button</DynaButton>
                <h4>disabled</h4>
                <DynaButton
                  {...this.props}
                  disabled
                  onClick={() => console.log('button pressed')}
                >dyna button</DynaButton>
              </div>
            );
          }
        }
        return <MyApp />;
      })(),
      wrapperStyle:{
      },
      props: [
        {
          slug: 'xsmall',
          title: 'xsmall',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.XSMALL,
          } as IDynaButtonProps
        },
        {
          slug: 'small',
          title: 'small',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.SMALL,
          } as IDynaButtonProps
        },
        {
          slug: 'medium',
          title: 'medium',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'large',
          title: 'large',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.LARGE,
          } as IDynaButtonProps
        },
        {
          slug: 'x-large',
          title: 'x-large',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.XLARGE,
          } as IDynaButtonProps
        },
        {
          slug: 'xx-large',
          title: 'xx-large',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.XXLARGE,
          } as IDynaButtonProps
        },
      ]
    },

    {
      slug: 'flat-sizes',
      faIconName: 'flask',
      title: 'rounded - white/black - sizes',
      center: true,
      component: (() => {
        class MyApp extends React.Component {
          public render(): JSX.Element {
            return (
              <div>
                <h4>enabled</h4>
                <DynaButton
                  {...this.props}
                  onClick={() => console.log('button pressed')}
                >dyna button</DynaButton>
                <h4>disabled</h4>
                <DynaButton
                  {...this.props}
                  disabled
                  onClick={() => console.log('button pressed')}
                >dyna button</DynaButton>
              </div>
            );
          }
        }
        return <MyApp />;
      })(),
      wrapperStyle:{
      },
      props: [
        {
          slug: 'xsmall',
          title: 'xsmall',
          props: {
            style: EStyle.FLAT,
            color: EColor.WHITE_BLACK,
            size: ESize.XSMALL,
          } as IDynaButtonProps
        },
        {
          slug: 'small',
          title: 'small',
          props: {
            style: EStyle.FLAT,
            color: EColor.WHITE_BLACK,
            size: ESize.SMALL,
          } as IDynaButtonProps
        },
        {
          slug: 'medium',
          title: 'medium',
          props: {
            style: EStyle.FLAT,
            color: EColor.WHITE_BLACK,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'large',
          title: 'large',
          props: {
            style: EStyle.FLAT,
            color: EColor.WHITE_BLACK,
            size: ESize.LARGE,
          } as IDynaButtonProps
        },
        {
          slug: 'x-large',
          title: 'x-large',
          props: {
            style: EStyle.FLAT,
            color: EColor.WHITE_BLACK,
            size: ESize.XLARGE,
          } as IDynaButtonProps
        },
        {
          slug: 'xx-large',
          title: 'xx-large',
          props: {
            style: EStyle.FLAT,
            color: EColor.WHITE_BLACK,
            size: ESize.XXLARGE,
          } as IDynaButtonProps
        },
      ]
    },


    {
      slug: 'colours',
      faIconName: 'flask',
      title: 'rounded - colours',
      center: true,
      component: (() => {
        class MyApp extends React.Component {
          public render(): JSX.Element {
            return (
              <div>
                <h4>enabled</h4>
                <DynaButton
                  {...this.props}
                  onClick={() => console.log('button pressed')}
                >dyna button</DynaButton>
                <h4>disabled</h4>
                <DynaButton
                  {...this.props}
                  disabled
                  onClick={() => console.log('button pressed')}
                >dyna button</DynaButton>
              </div>
            );
          }
        }
        return <MyApp />;
      })(),
      wrapperStyle:{
      },
      props: [
        {
          slug: 'white-black',
          title: 'white-black',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_BLACK,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'black-white',
          title: 'black-white',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.BLACK_WHITE,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'transparent-white',
          title: 'transparent-white',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.TRANSPARENT_WHITE,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'white-red',
          title: 'white-red',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.WHITE_RED,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'orange-white',
          title: 'orange-white',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.ORANGE_WHITE,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
        {
          slug: 'black-orange',
          title: 'black-orange',
          props: {
            style: EStyle.ROUNDED,
            color: EColor.BLACK_ORANGE,
            size: ESize.MEDIUM,
          } as IDynaButtonProps
        },
      ]
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
