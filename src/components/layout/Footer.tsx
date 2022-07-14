import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import validEmail from 'utils/validEmail';

const MainFooter = () => {
  const [email, setEmail] = useState<string>('');
  const [notify, setNotify] = useState<string>('');
  const [valid, setValid] = useState<boolean>(false);
  const { t } = useTranslation('common');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valid && email !== '') {
      setNotify('');
      setTimeout(() => {
        setNotify(t('textFooterMessageSucces'));
      }, 3000);
      setTimeout(() => {
        setEmail('');
      }, 2000);
    } else {
      setNotify('');
      setTimeout(() => {
        setNotify(t('textFooterMessageError'));
      }, 2000);
    }
  };

  const handleChangeValue = (e) => {
    const { value, type } = e.target;
    setEmail(value);
    if (type === 'email') {
      if (value.trim() === '') {
        setValid(false);
      }
      if (validEmail(value)) {
        setValid(true);
      } else {
        setValid(false);
      }
    }
  };

  return (
    <div className="footer-env">
      <div className="footer_subscribe">
        <div className="width_1200">
          <div className="banner_footer_subscribe">
            <Image src="/images/banner_footer_subscribe.png" width={63} height={80} />
            <span className="footer-banner-text">{t('textFooterInfo')}</span>
          </div>
          <div className="form_footer_subscribe">
            <div role="form" className="wpcf7" id="wpcf7-f622-o1" lang="vi" dir="ltr">
              <div className="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true" /> <ul />
              </div>
              <form
                onSubmit={handleSubmit}
                action="/"
                method="post"
                className="wpcf7-form init"
                data-status="init"
              >
                <p>
                  <span className="wpcf7-form-control-wrap your-email">
                    <input
                      type="email"
                      name="your-email"
                      size={40}
                      className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email"
                      aria-required="true"
                      aria-invalid="false"
                      onChange={(e) => handleChangeValue(e)}
                      value={email}
                      placeholder={t('textFooterInput')}
                    />
                  </span>
                  <input
                    type="submit"
                    defaultValue="Submit"
                    className="wpcf7-form-control has-spinner wpcf7-submit"
                  />
                  <span className="wpcf7-spinner" />
                </p>
                <div className="wpcf7-response-output" aria-hidden="true">
                  {notify}
                </div>
              </form>
            </div>{' '}
          </div>
        </div>
      </div>
      <div className="footer-env-container">
        <footer className="footer_widgets">
          <div className="vc_row wpb_row vc_inner vc_row-fluid 3_col_footer">
            <div className="wpb_column vc_column_container vc_col-12 vc_col-sm-3">
              <div className="vc_column-inner">
                <div className="wpb_wrapper" style={{ padding: '20px 20px 20px 0', borderRight: '1px solid #7C7D7E', marginTop: '30px' }}>
                  <Link href="/">
                    <img src="/images/s2p-color.png" width={300} height={100} alt="" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-6">
              <div className="vc_column-inner">
                <div className="wpb_wrapper wrapper_3_footer">
                  <p>
                    <strong>{t('textFooterContactAddress')}: </strong>
                    {t('textFooterContactAddressContent')}
                  </p>
                  <p>
                    <strong>Email:</strong> support@shop2pay.store{' '}
                    <strong>Website:</strong>{' '}
                    shop2pay.store
                  </p>
                </div>
              </div>
            </div>
            <div className="wpb_column vc_column_container vc_col-sm-3">
              <div className="vc_column-inner">
                <div className="wpb_wrapper">
                  <h3>{t('textFooterContactConnect')}</h3>
                  <ul className="list_social_footer">
                    <li><Link href="#"><Image src="/images/facebook.png" width={50} height={50} alt="icon-social" /></Link></li>
                    <li><Link href="#"><Image src="/images/instagram.png" width={50} height={50} alt="icon-social" /></Link></li>
                    <li><Link href="#"><Image src="/images/tiktok.png" width={50} height={50} alt="icon-social" /></Link></li>
                    <li><Link href="#"><Image src="/images/youtube.png" width={50} height={50} alt="icon-social" /></Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div className="footer_of_footer">
        <span>@2022 - {t('textFooterCopyRight')}</span>
      </div>
    </div>
  );
};

export default MainFooter;
