import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProductTypes } from 'types';
import convertCurrentCy from 'utils/convertCurrency';
import formatToCurrency from 'utils/formatprice/formatPrice';

interface Props {
  product: ProductTypes;
}

const Item = ({ product }: Props) => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale } = router;
  const myLoader = () => {
    return product.image;
  };
  return (
    <li className="product type-product post-463 status-publish last instock product_cat-trang-diem product_tag-brow-pencil product_tag-chi-ke-chan-may product_tag-chi-ke-may product_tag-chi-ke-may-2-dau product_tag-ke-chan-may product_tag-ke-long-may product_tag-ke-may product_tag-ke-may-the-saem product_tag-the-saem has-post-thumbnail shipping-taxable purchasable product-type-variable mobile-cols-2">
      <div className="product-wrapper">
        <div className="product-images has-gallery preview-type-gallery">
          <Link href={`/${locale}/product/${product.link}`} className="featured-image">
            <a>
              <Image
                width={300}
                height={300}
                src="/images/loading.gif"
                placeholder="blur"
                blurDataURL="/images/loading.gif"
                loader={myLoader}
              />
            </a>
          </Link>
        </div>
        <div className="product-description">
          <Link
            href={`/product/${product.link}`}
            className="woocommerce-LoopProduct-link woocommerce-loop-product__link"
          >
            <a>
              <h2 className="woocommerce-loop-product__title">{locale === 'vi' ? product.name : product.en_name}</h2>
            </a>
          </Link>
          <div className="divider" />
          <span className="price">
            <span className="woocommerce-Price-amount amount">
              <bdi>{formatToCurrency(convertCurrentCy(product.price, locale), locale)}
              </bdi>
            </span>
          </span>
        </div>
        <Link href={`/product/${product.link}`}>
          <a className="button_product_2">{t('textShopBuy')}</a>
        </Link>
      </div>
    </li>
  );
};

export default Item;
