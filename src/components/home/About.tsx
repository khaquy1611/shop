import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const About = () => {
  const { t } = useTranslation('common');
  return (
    <div className="vc_row row">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="wpb_text_column wpb_content_element h3_title_home">
              <div className="wpb_wrapper">
                <h3 style={{ textAlign: 'center' }}>{t('textWhychooseUs')}</h3>
              </div>
            </div>
            <div className="vc_row wpb_row vc_inner vc_row-fluid">
              <div className="wpb_column vc_column_container vc_col-sm-4">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <Image
                            width={72}
                            height={75}
                            src="/images/like.png"
                            className="vc_single_image-img attachment-full"
                          />
                        </div>
                      </figure>
                    </div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'center' }}>
                          <strong>{t('textAuthenticProducts')}</strong>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                          {t('textCommit')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-4">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <Image
                            width={102}
                            height={82}
                            src="/images/delivery.png"
                            className="vc_single_image-img attachment-full"
                          />
                        </div>
                      </figure>
                    </div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'center' }}>
                          <strong>{t('textFreeShipping')}</strong>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                          {t('textCommit')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wpb_column vc_column_container vc_col-sm-4">
                <div className="vc_column-inner">
                  <div className="wpb_wrapper">
                    <div className="wpb_single_image wpb_content_element vc_align_center">
                      <figure className="wpb_wrapper vc_figure">
                        <div className="vc_single_image-wrapper vc_box_border_grey">
                          <Image
                            width={112}
                            height={82}
                            src="/images/tag.png"
                            className="vc_single_image-img attachment-full"
                          />
                        </div>
                      </figure>
                    </div>
                    <div className="wpb_text_column wpb_content_element">
                      <div className="wpb_wrapper">
                        <p style={{ textAlign: 'center' }}>
                          <strong>{t('textAlotOfPromotion')}</strong>
                        </p>
                        <p style={{ textAlign: 'center' }}>
                          {t('textCommit')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
