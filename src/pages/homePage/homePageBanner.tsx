import Lottie, { LottieRefCurrentProps } from 'lottie-react';
import brrLottie from '../../assets/animated/brrr-2.7s.mp4.lottie.json';
import tokenLottie from '../../assets/animated/tokens-5.64s.mp4.lottie.json';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import assets from '../../components/assets';
import Image from '../../components/image';
import SwiperClass from 'swiper';

const HomePageBanner = () => {
  const brrLottieRef = useRef<LottieRefCurrentProps>() as any;
  const tokenLottieRef = useRef<LottieRefCurrentProps>() as any;
  const swiperRef = React.useRef<SwiperClass>();

  const handleSwiperInit = (Swiper: SwiperClass) => {
    swiperRef.current = Swiper;
  };

  useEffect(() => {
    console.log('swiperRef.current', swiperRef.current);
    console.log('brrLottieRef?.current', brrLottieRef?.current);
    if (!swiperRef?.current?.autoplay?.running) {
      swiperRef?.current?.autoplay.start();
    }
    brrLottieRef?.current?.play();
  }, [swiperRef?.current]);

  const handleSwiperChange = (a: any) => {
    console.log('i', a?.realIndex);
    console.log("sref",swiperRef?.current)
    if (!swiperRef?.current?.autoplay?.running) {
      swiperRef?.current?.autoplay.start();
    }
    switch (a?.realIndex) {
      case 0:
        tokenLottieRef?.current?.stop();
        brrLottieRef?.current?.play();
        break;
      case 1:
        brrLottieRef?.current?.stop();
        tokenLottieRef?.current?.play();
        console.log('1ref', brrLottieRef);
        console.log('2ref', tokenLottieRef);
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}
      onInit={handleSwiperInit}
      loop={true}
      autoplay={false}
      allowTouchMove={false}
      preventInteractionOnTransition={true}
      fadeEffect={{
        crossFade: true,
      }}
      onSlideChange={handleSwiperChange}
      modules={[EffectFade, Autoplay]}
      className="animate-swiper"
    >
      <SwiperSlide data-swiper-autoplay="2720">
        <div className={`md:flex mb-10 animate-banner pt-10 md:pt-0`}>
          <div className={`md:flex md:flex-row-reverse`}>
            <div className={`justify-center flex flex-col items-center md:flex-row-reverse`}>
              <div className={'animate-text'}>
                <Brrr />
              </div>

              <div className={`animate-lottie`}>
                <Lottie
                  animationData={brrLottie}
                  loop={false}
                  autoplay={false}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  height={495}
                  width={825}
                  lottieRef={brrLottieRef}
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide data-swiper-autoplay="5250">
        <div className={`md:flex mb-10 animate-banner pt-10 md:pt-0`}>
          <div className={`md:flex md:flex-row-reverse`}>
            <div className={`justify-center flex flex-col items-center md:flex-row-reverse`}>
              <div className={'animate-text'}>
                <TokensText />
              </div>
              <div className={`animate-lottie`}>
                <Lottie
                  animationData={tokenLottie}
                  loop={false}
                  autoplay={false}
                  rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
                  height={495}
                  width={825}
                  lottieRef={tokenLottieRef}
                />
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const Brrr = () => {
  return (
    <div className={'relative brrrline-wrap'}>
      <div className={'brrrline brrrline-left'}>
        <Image src={assets.svg.brrrlinetop} className={'desktop'} />
        <Image src={assets.svg.brrrlineleft} className={'mobile'} />
      </div>
      <div className={'banner-title'}>BRRR!</div>
      <div className={'brrrline brrrline-right'}>
        <Image src={assets.svg.brrrlinebottom} className={'desktop'} />
        <Image src={assets.svg.brrrlineright} className={'mobile'} />
      </div>
    </div>
  );
};

const TokensText = () => {
  const TEXTS = ['Supply', 'Burrow', 'Loop', 'Thrive'];
  return (
    <div className={'mb-4 md:mb-0'}>
      {TEXTS.map((d) => (
        <div className={'flex items-end gap-5 justify-center md:justify-normal'} key={d}>
          <div className={'t1b'}>{d}</div>
          <div className={'signboard-ball bg-primary-500'} style={{ width: 10, height: 10, marginBottom: 12 }} />
        </div>
      ))}
    </div>
  );
};

export default HomePageBanner;
