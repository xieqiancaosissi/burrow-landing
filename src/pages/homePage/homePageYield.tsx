import { BaseProps } from '../../interfaces/interfaces';
import Button from '../../components/button';
import assets from '../../components/assets';
import { Box } from '../../components/box';
import Image from '../../components/image';
import React from 'react';
import { ArrowRightIcon } from '../../components/svgIcon';
import { Link } from 'react-router-dom';

interface Props extends BaseProps {
  burrowData: any;
}

const HomePageYield = ({ children, burrowData }: Props) => {
  const { yield_apy, yield_apy_up_to, total_supplied } = burrowData || {};

  const handleSupplyBorrowClick = () => {
    window.location.href = 'https://app.burrow.finance';
  };

  const ButtonNode = ({ children }: BaseProps) => (
    <Button color={'third'} className={'box-button'} onClick={handleSupplyBorrowClick}>
      {children}
      <div
        className={'rounded-full bg-black absolute btn-arrow'}
        style={{
          right: 5,
          top: 5,
        }}
      >
        {assets.svg.arrowRight}
      </div>
    </Button>
  );

  return (
    <div className={'lg:grid gap-5 grid-cols-2 homepage-yield'}>
      <Box1
        text1={'Market Size'}
        text2={total_supplied || ''}
        text3={'The first money market on NEAR native, bring more liquidity and DeFi compatibility'}
      >
        <div className={'flex xs:gap-5 justify-between xs:justify-start'}>
          <ButtonNode>Supply</ButtonNode>
          <ButtonNode>Borrow</ButtonNode>
        </div>
      </Box1>

      <Box1 text1={'Yield available'} text2={'20+'} text3={'Supply and borrow interest-bearing assets (stETH, stNEAR, aUSDC) on NEAR'}>
        <Link
          to={'https://app.burrow.finance/markets/'}
          className={'rounded-full border border-black absolute btn-arrow yield-arrow'}
          style={{
            top: 30,
            right: 30,
            height: 66,
            width: 66,
          }}
        >
          <ArrowRightIcon stroke={'#000'} />
        </Link>

        <div>
          <Image src={assets.img.tokens} />
        </div>
      </Box1>

      <Box2 text1={'Yield APY'} text2={yield_apy || ''}>
        <Image src={assets.svg.svgNear} />

        <Link
          to={'https://app.burrow.finance/tokenDetail/wrap.near'}
          className={'rounded-full border border-white btn-arrow absolute yield-arrow'}
          style={{
            bottom: 40,
            right: 30,
            height: 66,
            width: 66,
          }}
        >
          <ArrowRightIcon stroke={'#fff'} />
        </Link>
      </Box2>

      <Box2 text1={'Yield APY up to'} text2={yield_apy_up_to || ''}>
        <div className={'flex'}>
          <Image src={assets.svg.svgUsd} className={'-mx-2'} />
          <Image src={assets.svg.svgUsdt} className={'-mx-2 relative z-10'} />
          <Image src={assets.svg.svgDai} className={'-mx-2'} />
        </div>

        <Link
          to={'https://app.burrow.finance/tokenDetail/dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near'}
          className={'rounded-full border border-white btn-arrow absolute yield-arrow'}
          style={{
            bottom: 40,
            right: 30,
            height: 66,
            width: 66,
          }}
        >
          <ArrowRightIcon stroke={'#fff'} />
        </Link>
      </Box2>
    </div>
  );
};

const Box1 = ({ text1, text2, text3, children }: any) => (
  <Box className={'mb-5 lg:mb-0 bg-primary-500 relative box1'}>
    <div className={'t2 mb-4 font-medium'}>{text1}</div>
    <div className={'t1 mb-4'}>{text2}</div>
    <div className={'t3 mb-6'}>{text3}</div>
    {children}
  </Box>
);

const Box2 = ({ text1, text2, children }: any) => (
  <Box className={'mb-5 lg:mb-0 bg-gray-800 text-white relative box2'}>
    <div className={'mb-8'}>{children}</div>
    <div className={'t2 mb-3'}>{text1}</div>
    <div className={'t1 mb-1 text-primary-500'}>{text2}</div>
  </Box>
);

export default HomePageYield;
