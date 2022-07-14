import React from 'react';
import Image from 'next/image';
import { ProductTypes } from 'types';

interface Props {
  details: ProductTypes;
}

const ProductDetailsImage = ({ details }: Props) => {
  const myLoader = () => {
    return details.image;
  };
  return (
    <div className="woocommerce-product-gallery__image slick-slide slick-current slick-active">
      <Image
        width={600}
        height={600}
        className="wp-post-image lazyloaded"
        src="/images/loading.gif"
        placeholder="blur"
        blurDataURL="/images/loading.gif"
        loader={myLoader}
      />
    </div>
  );
};

export default ProductDetailsImage;
