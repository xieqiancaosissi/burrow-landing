import assets from '../components/assets';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={'footer -mt-10 md:mt-5 py-10 xl:px-20 lg:px-10 px-6 bg-gray-800 flex flex-col md:flex-col-reverse'}>
      <div className={'flex justify-center md:justify-end mb-5 md:mb-0'}>
        <div className={'flex gap-5 md:gap-8'}>
          {ICONS?.map((d) => {
            return (
              <Link key={d.to} to={d.to} target={d.target} className={'footer-icon'}>
                {d.svg}
              </Link>
            );
          })}
        </div>
      </div>

      <div className={'flex justify-center md:justify-between border-solid md:border-b border-gray-700 md:pb-10 md:mb-10'}>
        <div className={'logo hidden md:block'}>{assets.svg.logo}</div>
        <div className="flex gap-10 md:gap-20 text-gray-300">
          {NAVIGATIONS.map((d) => {
            return (
              <Link title={d.title} key={d.title} to={d.to}>
                {d.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const NAVIGATIONS = [
  {
    title: 'App',
    to: 'https://app.burrow.finance/',
  },
  {
    title: 'Docs',
    to: 'https://docs.burrow.finance/product-docs/introduction/burrow',
    target: '_blank',
  },
  {
    title: 'Bug Bounty',
    to: 'https://immunefi.com/bounty/burrow/',
    target: '_blank',
  },
];

const ICONS = [
  {
    svg: assets.svg.twitter,
    to: 'https://twitter.com/burrow_finance',
    target: '_blank',
  },
  // {
  //   svg: assets.svg.telegram,
  //   to: 'https://t.me/ref_finance',
  //   target: '_blank',
  // },
  {
    svg: assets.svg.discord,
    to: 'https://discord.com/invite/gUWBKy9Vur',
    target: '_blank',
  },
  {
    svg: assets.svg.medium,
    to: 'https://burrowfinance.medium.com',
    target: '_blank',
  },
];

export default Footer;
