import React, { useEffect, useState } from 'react';
import LayoutContainer from '../../layout/layoutContainer/layoutContainer';
import './homePage.scss';
import clsx from 'clsx';
import { BaseProps } from '../../interfaces/interfaces';
import HomePageRoadMap from './homePageRoadMap';
import HomePageArticles from './homePageArticles';
import HomePageYield from './homePageYield';
import Datasource from '../../data/datasource';
// @ts-ignore
const HomePageBanner = React.lazy(() => import('./homePageBanner.tsx'));

const BannerPlaceholder = () => {
  return (
    <div className={'flex justify-center items-center'} style={{ height: 558 }}>
      Loading...
    </div>
  );
};

const HomePage = (props: BaseProps) => {
  const [burrowData, setBurrowData] = useState();

  useEffect(() => {
    fetchData().then();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Datasource.shared.getBurrowData();
      setBurrowData(response);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <LayoutContainer className={'home-page'}>
      <React.Suspense fallback={<BannerPlaceholder />}>
        <HomePageBanner />
      </React.Suspense>
      <Section>
        <HomePageYield burrowData={burrowData} />
      </Section>
      <Section>
        <HomePageRoadMap />
      </Section>
      <Section>
        <HomePageArticles />
      </Section>
    </LayoutContainer>
  );
};

const Section = ({ children, className }: BaseProps) => {
  return <div className={clsx('mb-20 md:mb-44', className)}>{children}</div>;
};

export default HomePage;
