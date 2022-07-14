import React, { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ProductDetailsBeadcrumb from 'components/product-details/ProductDetailsBeadcrumb';
import ProductDetailsImage from 'components/product-details/ProductDetailsImage';
import ProductDetailsInfomation from 'components/product-details/ProductDetailsInfomation';
import Item from 'components/product/Item';
import { ProductCartTypes, ProductTypes } from 'types';
import { getProduct } from 'utils';

interface PropsTypes {
  productData: ProductTypes;
  similarProduct: ProductCartTypes[];
}

const Product = ({ productData, similarProduct }: PropsTypes) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');
  const [cart, setCart] = useState<ProductCartTypes[]>([]);
  const [isVisble, setIsVisible] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(1);

  const renderSimilarProduct = () => {
    return similarProduct.map((item) => <Item product={item} key={item.id} />);
  };

  const addToCart = (product: ProductCartTypes, quantityProduct: number) => {
    const productCartItem: ProductCartTypes = { ...product };
    const index = cart.findIndex((productCart: ProductCartTypes) => productCart.id === product.id);
    if (index !== -1) {
      cart[index].quantity += quantityProduct;
      setQuantity(quantityProduct);
    } else {
      cart.push({ ...productCartItem, quantity: quantityProduct });
      setQuantity(quantityProduct);
    }
    setCart([...cart]);
    if (cart.length > 0) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart'));
    if (cartData) {
      setCart(cartData);
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <div className="product-template-default single single-product postid-500 theme-oxygen woocommerce woocommerce-page woocommerce-js woo-variation-swatches wvs-theme-oxygen wvs-theme-child-oxygen wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-css wpb-js-composer js-comp-ver-6.7.0 vc_responsive oxygen-top-menu top-header-flat ht-3">
      <ProductDetailsBeadcrumb productData={productData} page="product" />
      <div id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          <div className="clear" />
          <div className="products-archive">
            <div className="products-archive--products">
              {isVisble && (
                <div className="woocommerce-notices-wrapper">
                  <div className="woocommerce-message" role="alert">
                    <Link href="/cart">
                      <a href="" className="button wc-forward">
                        {t('textDetailsSeeCart')}
                      </a>
                    </Link>
                    {quantity > 1
                      ? `${quantity}x ${locale === 'vi' ? productData.name : productData.en_name} ${t('textDetailsAdded')}`
                      : `${locale === 'vi' ? productData.name : productData.en_name} ${t('textDetailsAdded')}`}
                  </div>
                </div>
              )}
              <div
                id="product-500"
                className="product type-product post-500 status-publish first instock product_cat-cham-soc-da-mat product_cat-san-pham-ban-chay product_tag-cleansing-oil product_tag-dau-tay-trang product_tag-green-tea product_tag-tay-trang product_tag-tay-trang-cho-da-dau product_tag-tay-trang-cho-da-mun product_tag-tay-trang-the-saem product_tag-the-saem product_tag-tra-xanh has-post-thumbnail featured shipping-taxable purchasable product-type-simple mobile-cols-2"
              >
                <div className="single-product-wrapper">
                  <div className="product-gallery zoom lightbox">
                    <div className="sale_tag product-featured">
                      {/* <div className="ribbon">
                        <strong className="ribbon-content">
                          <span>Nổi bật</span>
                        </strong>
                      </div> */}
                    </div>
                    <ProductDetailsImage details={productData} />
                  </div>
                  <ProductDetailsInfomation addToCart={addToCart} productData={productData} />
                </div>
                <section className="related products">
                  <h2>{t('textBestseller')}</h2>
                  <ul className="products columns-4">{renderSimilarProduct()}</ul>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const pathsVi = getProduct().map((item) => ({
    params: {
      slug: item.link
    },
    locale: 'vi'
  }));
  const pathsEn = getProduct().map((item) => ({
    params: {
      slug: item.link
    },
    locale: 'en'
  }));
  return {
    paths: [...pathsVi, ...pathsEn],
    fallback: false
  };
};

export const getStaticProps = async ({ params }) => {
  const { slug } = params;

  const productData = getProduct().find((product: ProductTypes) => product.link === slug);
  const similarProduct = getProduct()
    .filter(
      (product: ProductCartTypes) =>
        product.type === productData.type && product.code !== productData.code
    )
    .slice(1, 5);
  return {
    props: { productData, similarProduct }
  };
};
export default Product;
