import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProductTypes } from 'types';
import convertCurrentCy from 'utils/convertCurrency';
import formatToCurrency from 'utils/formatprice/formatPrice';

interface PropsType {
  product: ProductTypes;
}

const ProductSuggest = ({ product }: PropsType) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const myLoader = () => {
    return product.image;
  };
  return (
    <div className="wpb_column vc_column_container vc_col-sm-4">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="product_in_list">
            <Link href={`/product/${product.link}`}>
              <a>
                <Image
                  width={198}
                  height={198}
                  src="/images/loading.gif"
                  placeholder="blur"
                  blurDataURL="/images/loading.gif"
                  loader={myLoader}
                />
                <h5>{locale === 'vi' ? product.name : product.en_name}</h5>
                <div className="price_pro">
                  <span className="woocommerce-Price-amount amount">
                    <bdi>{formatToCurrency(convertCurrentCy(product.price, locale), locale)}</bdi>
                  </span>
                </div>
                <span className="button_product">{t('textMoreDetails')}</span>
              </a>
            </Link>
          </div>
          <div className="wpb_text_column wpb_content_element">
            <div className="wpb_wrapper" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSuggest;
