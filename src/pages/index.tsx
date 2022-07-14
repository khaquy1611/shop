import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import About from 'components/home/About';
import ProductSuggest from 'components/home/ProductSuggest';
import Item from 'components/product/Item';
import { ProductTypes } from 'types/index';
import { getProduct } from 'utils';

interface PropsType {
  trendingProduct: ProductTypes[];
  suggestedProduct: ProductTypes[];
}

const Home = ({ trendingProduct, suggestedProduct }: PropsType) => {
  const { t } = useTranslation('common');

  const renderTrendingItem = () => {
    return trendingProduct.map((item) => <Item product={item} key={item.id} />);
  };

  return (
    <div className="archive post-type-archive post-type-archive-product theme-oxygen woocommerce-shop woocommerce woocommerce-page woocommerce-js woo-variation-swatches wvs-theme-oxygen wvs-theme-child-oxygen wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-css wpb-js-composer js-comp-ver-6.7.0 vc_responsive oxygen-top-menu top-header-flat ht-3">
      <div className="top-first breadcrumb_header">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-widget" />
          </div>
        </div>
      </div>
      <div className="page-container">
        <main id="main" className="site-main" role="main">
          <div className="wpb_text_column wpb_content_element h3_title_home">
            <div className="wpb_wrapper">
              <h3 style={{ textAlign: 'center' }}>{t('textBestseller')}</h3>
            </div>
          </div>
          <div className="products-archive">
            <div className="products-archive--products">
              <div className="woocommerce-notices-wrapper" />
              <ul className="products columns-4">{renderTrendingItem()}</ul>
            </div>
          </div>
        </main>
        <ProductSuggest suggested={suggestedProduct} />
        <About />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const allProduct = getProduct();
  const trendingProduct = [...allProduct].slice(0, 4);
  const suggestedProduct = [...allProduct].slice(5, 8);
  return {
    props: { trendingProduct, suggestedProduct }
  };
}

export default Home;
