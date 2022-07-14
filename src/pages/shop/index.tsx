import React, { useEffect, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import FilterProduct from 'components/product/FilterProduct';
import Item from 'components/product/Item';
import Paginate from 'components/product/Paginate';
import { ProductTypes } from 'types/index';
import { getProduct } from 'utils';

interface List {
  listProduct: ProductTypes[];
}

const Shop = ({ listProduct }: List) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [product, setProduct] = useState<ProductTypes[]>([]);
  const [currentPage, setCurrentPage] = useState<number>();
  const [sort, setSort] = useState<string>();
  const [showSelect, setShowSelect] = useState(false);

  useEffect(() => {
    const { query } = router;
    setCurrentPage(query.page ? Number(query.page) : 1);
    setSort(query.sort ? query.sort as string : 'default');
  }, [router]);

  const onPushRouter = (typeSort: string, pageNumber: number) => {
    router.push(`/shop?sort=${typeSort}&page=${pageNumber}`, undefined, { shallow: true });
  };

  useEffect(() => {
    if (currentPage && sort) {
      const from = (currentPage - 1) * 20;
      const to = currentPage * 20;
      const sortProduct = [...listProduct];
      if (sort === 'asc') {
        sortProduct.sort((a, b) => a.price - b.price);
      } else if (sort === 'desc') {
        sortProduct.sort((a, b) => b.price - a.price);
      }
      setProduct(sortProduct.filter((item, index) => index >= from && index < to));
      window.scrollTo(0, 0);
    }
  }, [currentPage, listProduct, sort]);

  const onSetSort = (type) => {
    onPushRouter(type, 1);
  };

  const postsPerPage = 20;

  return (
    <div className="archive post-type-archive post-type-archive-product theme-oxygen woocommerce-shop woocommerce woocommerce-page woocommerce-js woo-variation-swatches wvs-theme-oxygen wvs-theme-child-oxygen wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-css wpb-js-composer js-comp-ver-6.7.0 vc_responsive oxygen-top-menu top-header-flat ht-3">
      <div className="top-first breadcrumb_header">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-widget">
              <nav className="woocommerce-breadcrumb">
                <Link href="/">{t('textBreadCumHome')}</Link>
                <span className="sep">»</span>
                {t('textCartTableProducts')}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          <FilterProduct
            showSelect={showSelect}
            setShowSelect={() => setShowSelect(!showSelect)}
            sort={sort}
            setSort={(value) => onSetSort(value)}
            totalPosts={listProduct.length}
            firstProduct={(currentPage - 1) * postsPerPage + 1}
            lastProduct={currentPage * postsPerPage}
          />
          <div className="products-archive">
            <div className="products-archive--products">
              <div className="woocommerce-notices-wrapper" />
              <ul className="products columns-4">
                {product.map((item) => (
                  <Item product={item} key={item.id} />
                ))}
              </ul>
              <Paginate
                totalPages={listProduct.length / postsPerPage}
                onGetPage={(value) => onPushRouter(sort, value)}
                pageNumber={currentPage}
                onNextPage={() => onPushRouter(sort, currentPage + 1)}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Shop;

export async function getStaticProps() {
  const listProduct = getProduct();

  return {
    props: { listProduct }
  };
}
