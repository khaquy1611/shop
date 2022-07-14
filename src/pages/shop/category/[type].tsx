import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ProductDetailsBeadcrumb from 'components/product-details/ProductDetailsBeadcrumb';
import FilterProduct from 'components/product/FilterProduct';
import Item from 'components/product/Item';
import Paginate from 'components/product/Paginate';
import { ProductTypes, CategoryTypes } from 'types/index';
import { getCategory, getProduct } from 'utils';

interface List {
  listProduct: ProductTypes[];
  category: CategoryTypes;
}

const Type = ({ listProduct, category }: List) => {
  const router = useRouter();
  const [product, setProduct] = useState<ProductTypes[]>([]);
  const [currentPage, setCurrentPage] = useState<number>();
  const [sort, setSort] = useState<string>();
  const [showSelect, setShowSelect] = useState(false);
  const routerQuery = router.query.type;

  useEffect(() => {
    const { query } = router;
    setCurrentPage(query.page ? Number(query.page) : 1);
    setSort(query.sort ? (query.sort as string) : 'default');
  }, [router]);

  const onPushRouter = (typeSort: string, pageNumber: number) => {
    router.push(`/shop/category/${routerQuery}?sort=${typeSort}&page=${pageNumber}`, undefined, {
      shallow: true
    });
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
                <ProductDetailsBeadcrumb categoryType={category} page="category" />
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
                onGetPage={(pageNumber) => onPushRouter(sort, pageNumber)}
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
export const getStaticPaths = async () => {
  const pathsVi = getCategory().map((item) => ({
    params: {
      type: item.type
    },
    locale: 'vi'
  }));
  const pathsEn = getCategory().map((item) => ({
    params: {
      type: item.type
    },
    locale: 'en'
  }));
  return {
    paths: [...pathsVi, ...pathsEn],
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const { type } = params;
  const listCategory = getCategory();
  const category = listCategory.find((item) => item.type === type);
  const listProduct = getProduct().filter((product) => product.type === type);

  return {
    props: { listProduct, category }
  };
}

export default Type;
