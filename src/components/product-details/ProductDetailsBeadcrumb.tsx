import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ProductTypes, CategoryTypes } from 'types';

interface breadcrumbType {
  categoryType?: CategoryTypes;
  productData?: ProductTypes;
  page: string;
}

const ProductDetailsBeadcrumb = ({ productData, categoryType, page }: breadcrumbType) => {
  const router = useRouter();
  const { locale } = router;
  const { t } = useTranslation('common');
  return (
    <div className="top-first breadcrumb_header">
      <div className="row">
        <div className="col-lg-12">
          <div className="left-widget">
            <nav className="woocommerce-breadcrumb">
              <Link href="/">{t('textBreadCumHome')}</Link>
              <span className="sep">»</span>
              <Link href="/shop">{t('textHeaderProduct')}</Link>
              <span className="sep">»</span>
              {page === 'product' && (
                <>
                  <Link href={`/shop/category/${productData.type}`}>{locale === 'vi' ? productData.typeName : productData.en_typeName}</Link>
                  <span className="sep">»</span>
                  {locale === 'vi' ? productData.name : productData.en_name}
                </>
              )}
              {page === 'category' && (locale === 'vi' ? categoryType.name : categoryType.en_name)}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetailsBeadcrumb;
