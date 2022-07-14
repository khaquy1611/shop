import React from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';

const Story = () => {
  const { t } = useTranslation('common');
  return (
    <div className="page-template-default page page-id-15 theme-oxygen woocommerce-js woo-variation-swatches wvs-theme-oxygen wvs-theme-child-oxygen wvs-style-squared wvs-attr-behavior-blur wvs-tooltip wvs-css wpb-js-composer js-comp-ver-6.7.0 vc_responsive oxygen-top-menu top-header-flat ht-3">
      <div className="top-first breadcrumb_header">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-widget">
              <nav className="woocommerce-breadcrumb">
                <Link href="/">{t('textBreadCumHome')}</Link>
                <span className="sep">»</span>
                {t('textHeaderBrandStory')}
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="page-container">
        <div className="vc_row row vc_custom_1638350675417">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h1 style={{ textAlign: 'center' }}>{t('textStoryAboutUs')}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_left">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                      <Image
                        width={649}
                        height={454}
                        src="/images/about-1.jpeg"
                        className="vc_single_image-img attachment-full"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h3>
                      {t('textStoryLittleStory')}
                    </h3>
                    <p>
                      {t('textStoryLittleStoryDes1')}
                    </p>
                    <p>
                      {t('textStoryLittleStoryDes2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                      <Image
                        width={55}
                        height={54}
                        src="/images/icon-brands.png"
                        className="vc_single_image-img attachment-full"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h3>
                      {t('textStoryHowto')}
                    </h3>
                    <p>
                      {t('textStoryHowtoDes1')}
                    </p>
                    <p>
                      {t('textStoryHowtoDes2')}
                    </p>
                    <p>
                      {t('textStoryHowtoDes3')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_left">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                      <Image
                        width={649}
                        height={454}
                        src="/images/about-2.jpeg"
                        className="vc_single_image-img attachment-full"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                      <Image
                        width={55}
                        height={54}
                        src="/images/icon-brands.png"
                        className="vc_single_image-img attachment-full"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_left">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                      <Image
                        width={649}
                        height={454}
                        src="/images/about-3.png"
                        className="vc_single_image-img attachment-full"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h3>{t('textStoryFind')}</h3>
                    <p>
                      {t('textStoryFindDes1')}
                    </p>
                    <p>
                      {t('textStoryFindDes2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row row">
          <div className="wpb_column vc_column_container vc_col-sm-12">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_center">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                      <Image
                        width={55}
                        height={54}
                        src="/images/icon-brands.png"
                        className="vc_single_image-img attachment-full"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="vc_row row">
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h3>{t('textStoryCare')}</h3>
                    <p>
                      {t('textStoryCareDes1')}
                    </p>
                    <p>
                      {t('textStoryCareDes2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner">
              <div className="wpb_wrapper">
                <div className="wpb_single_image wpb_content_element vc_align_left">
                  <figure className="wpb_wrapper vc_figure">
                    <div className="vc_single_image-wrapper   vc_box_border_grey">
                      <Image
                        width={649}
                        height={454}
                        src="/images/about-4.jpeg"
                        className="vc_single_image-img attachment-full"
                      />
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
