import React from 'react';
import LayoutContainer from '../../layout/layoutContainer/layoutContainer';
import './homePage.scss';
import clsx from 'clsx';
import { BaseProps } from '../../interfaces/interfaces';
import HomePageRoadMap from './homePageRoadMap';
import HomePageArticles from './homePageArticles';
import HomePageYield from './homePageYield';
import HomePageBanner from './homePageBanner';

const HomePage = (props: BaseProps) => {
  return (
    <LayoutContainer className={'home-page'}>
      <HomePageBanner />
      <Section>
        <HomePageYield />
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
