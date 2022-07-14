import React from 'react';
import useTranslation from 'next-translate/useTranslation';

interface Pages {
  onGetPage: (number: number) => void;
  pageNumber: number;
  onNextPage: (pageNumber: number) => void;
  totalPages: number;
}

const Paginate = ({ onGetPage, pageNumber, onNextPage, totalPages }: Pages) => {
  const { t } = useTranslation('common');
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i += 1) {
    if (i <= 3 || i > totalPages - 2 || (i >= pageNumber - 2 && i <= pageNumber + 1)) {
      pageNumbers.push(i);
    } else {
      pageNumbers.push(<div>...</div>);
      i = i < pageNumber ? pageNumber - 1 : totalPages - 2;
    }
  }

  const handleSelectPage = (number) => {
    if (!isNaN(number)) {
      onGetPage(number);
    }
  };
  return (
    <nav className="woocommerce-pagination">
      <ul className="page-numbers">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              onClick={() => handleSelectPage(number)}
              className={number === pageNumber ? 'current' : null}
              onKeyDown={() => handleSelectPage(number)}
              role="link"
              tabIndex={0}
            >
              {number}
            </a>
          </li>
        ))}
        <li>
          <a
            onClick={() => onNextPage(pageNumber)}
            className={pageNumber === totalPages ? 'noDisplay' : 'next page-numbers'}
            onKeyDown={() => onGetPage(pageNumber)}
            role="link"
            tabIndex={0}
          >
            {t('textShopPagiNext')}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
