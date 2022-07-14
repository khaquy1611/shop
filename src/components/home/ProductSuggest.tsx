import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import SuggestItem from 'components/product/SuggestItem';
import { ProductTypes } from 'types';

interface PropsType {
  suggested: ProductTypes[];
}

const ProductSuggest = ({ suggested }: PropsType) => {
  const { t } = useTranslation('common');
  const renderSuggestItem = () => {
    return suggested.map((item) => <SuggestItem product={item} key={item.id} />);
  };

  return (
    <>
      <div className="vc_row row">
        <div className="wpb_column vc_column_container vc_col-sm-12">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_text_column wpb_content_element h3_title_home">
                <div className="wpb_wrapper">
                  <h3 style={{ textAlign: 'center' }}>{t('textJustForYou')}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vc_row row">
        <div className="wpb_column vc_column_container vc_col-sm-5">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="wpb_single_image wpb_content_element vc_align_left">
                <figure className="wpb_wrapper vc_figure">
                  <div className="vc_single_image-wrapper vc_box_border_grey">
                    <Image
                      width={444}
                      height={372}
                      src="/images/banner.jpeg"
                      className="vc_single_image-img attachment-full"
                      alt=""
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
        <div className="wpb_column vc_column_container vc_col-sm-7">
          <div className="vc_column-inner">
            <div className="wpb_wrapper">
              <div className="vc_row wpb_row vc_inner vc_row-fluid">{renderSuggestItem()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductSuggest;
