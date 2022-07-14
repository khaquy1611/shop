import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import validEmail from 'utils/validEmail';

const Account = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: ''
  });
  const { t } = useTranslation('common');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [message, setMessage] = useState<{ type: string; content: string }>();

  const handleChangeLoginInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value
    });
  };

  const handleSubmitSignUp = (e) => {
    e.preventDefault();
    if (!validEmail(signUpEmail)) {
      setMessage({
        type: 'error',
        content: t('textAccountNotifyEmailFail')
      });
      return;
    }
    setMessage({
      type: 'message',
      content: t('textAccountNotifyEmailSuccess')
    });
  };

  const handleSubmitLogIn = (e) => {
    e.preventDefault();
    if (loginInfo.username === '') {
      setMessage({
        type: 'error',
        content: t('textAccountNotifyAccountFail')
      });
      return;
    }
    if (loginInfo.password === '') {
      setMessage({
        type: 'error',
        content: t('textAccountNotifyPassWordFail')
      });
      return;
    }
    setMessage({
      type: 'error',
      content: t('textAccountNotifyPassWordAndAccoutLogin')
    });
  };

  return (
    <div className="main">
      <div className="top-first breadcrumb_header">
        <div className="row">
          <div className="col-lg-12">
            <div className="left-widget">
              <nav className="woocommerce-breadcrumb">
                <Link href="/">{t('textBreadCumHome')}</Link>
                <span className="sep">»</span>
                {t('textAccountBreadCumAccount')}
              </nav>
            </div>
          </div>
        </div>
      </div>
      {message && (
        <div className="woocommerce-notices-wrapper">
          <div className={`woocommerce-${message.type}`} role="alert">
            {message.type === 'error' && <strong>{t('textError')}:</strong>}&nbsp;{message.content}
          </div>
        </div>
      )}
      <div className="woocommerce">
        <div className="woocommerce-notices-wrapper" />{' '}
        <div className="myaccount-login-wrapper registration-allowed">
          <div className="u-columns col2-set" id="customer_login">
            <div className="u-column1 col-1">
              <h2>{t('textAccountLoginTitle')}</h2>
              <form
                onSubmit={(e) => handleSubmitLogIn(e)}
                className="woocommerce-form woocommerce-form-login login"
                method="post"
              >
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  {t('textAccountLoginLabel')} <span className="required">*</span>
                  <input
                    type="text"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    value={loginInfo.username}
                    onChange={(e) => handleChangeLoginInfo(e)}
                  />{' '}
                </p>
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  {t('textAccountLoginPassWordLabel')} <span className="required">*</span>
                  <span className="password-input">
                    <input
                      className="woocommerce-Input woocommerce-Input--text input-text"
                      type="password"
                      name="password"
                      id="password"
                      value={loginInfo.password}
                      onChange={(e) => handleChangeLoginInfo(e)}
                      autoComplete="current-password"
                    />
                    <span className="show-password-input" />
                  </span>
                </p>
                <p className="form-row">
                  <button
                    type="submit"
                    className="woocommerce-button button woocommerce-form-login__submit"
                    name="login"
                    value="Đăng nhập"
                  >
                    {t('textAccountBtnLogin')}
                  </button>
                </p>
              </form>
            </div>
            <div className="u-column2 col-2">
              <h2>{t('textAccountRegisterTitle')}</h2>
              <form
                onSubmit={(e) => handleSubmitSignUp(e)}
                method="post"
                className="woocommerce-form woocommerce-form-register register"
              >
                <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                  {t('textAccountRegisterLabel')} <span className="required">*</span>
                  <input
                    type="email"
                    className="woocommerce-Input woocommerce-Input--text input-text"
                    name="email"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    id="reg_email"
                    autoComplete="email"
                  />{' '}
                </p>
                <p>{t('textAccountRegisterNote')}</p>
                <p className="woocommerce-form-row form-row">
                  <input
                    type="hidden"
                    id="woocommerce-register-nonce"
                    name="woocommerce-register-nonce"
                  />
                  <input type="hidden" name="_wp_http_referer" defaultValue="/my-account/" />{' '}
                  <button
                    type="submit"
                    className="woocommerce-Button woocommerce-button button woocommerce-form-register__submit"
                    name="register"
                    value="Đăng ký"
                  >
                    {t('textAccountBtnRegister')}
                  </button>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
