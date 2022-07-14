/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  showSelect: boolean;
  setShowSelect: () => void;
  sort: string;
  setSort: (sort: string) => void;
  totalPosts: number;
  firstProduct: number;
  lastProduct: number;
}

const FilterProduct = ({
  showSelect,
  setShowSelect,
  sort,
  setSort,
  totalPosts,
  firstProduct,
  lastProduct
}: Props) => {
  const { t } = useTranslation('common');
  const selectSortText = () => {
    switch (sort) {
    case 'default':
      return t('textShopSortByDefault');
    case 'asc':
      return t('textShopSortByPiceASC');
    case 'desc':
      return t('textShopSortByPiceDESC');
    default:
      return t('textShopSortByDefault');
    }
  };

  return (
    <>
      <div className="woocommerce-ordering">
        <div
          className="woocommerce-ordering--dropdown form-group sort"
          onClick={setShowSelect}
          role="button"
        >
          <div className={showSelect ? 'dropdown open' : 'dropdown'}>
            <button className="dropdown-toggle" type="button" data-toggle="dropdown">
              <span>{selectSortText()}</span>
              <i className="caret" />
            </button>
            <ul id="menu" className="dropdown-menu fade" role="menu">
              <li
                role="presentation"
                className="active"
                onClick={() => setSort('default')}
              >
                <a>{t('textShopSortByDefault')}</a>
              </li>
              <li
                role="presentation"
                onClick={() => setSort('asc')}
              >
                <a>{t('textShopSortByPiceASC')}</a>
              </li>
              <li
                role="presentation"
                onClick={() => setSort('desc')}
              >
                <a>{t('textShopSortByPiceDESC')}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="woocommerce-result-count">
        {t('textShopShow')} {firstProduct} – {lastProduct} {t('textShopOf')} {totalPosts} {t('textShopResult')}
      </p>
      <div className="clear" />
    </>
  );
};

export default FilterProduct;
