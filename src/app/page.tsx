import React from 'react';
import HeroHeader from '../components/HeroHeader';
import PageTitle from '../components/PageTitle';
import SearchBlock from '../components/SearchBlock';
import AdvertisingBlocks from '../components/AdvertisingBlocks';
import PopularProducts from '../components/PopularProducts';
import PopularCategories from '../components/PopularCategories';
import LastAddedProducts from '../components/LastAddedProducts';
import PopularQueries from '../components/PopularQueries';
import VisualModelBlock from '../components/VisualModelBlock';

export default function Page() {
  return (
    <main className="relative -mt-28">
      <HeroHeader />
      <PageTitle title="גלריית תמונות מקצועית" subtitle="מגוון קטגוריות ואוספים ייחודיים" />
      <SearchBlock />
      <div className="grow">
        <AdvertisingBlocks />
        <PopularProducts />
        <PopularCategories />
        <VisualModelBlock />
        <LastAddedProducts />
        <PopularQueries />
      </div>
    </main>
  );
}
