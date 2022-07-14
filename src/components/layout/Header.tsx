import React, { useState, useEffect } from 'react';
import setLanguage from 'next-translate/setLanguage';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CategoryTypes, ProductCartTypes } from 'types';
import { getCategory } from 'utils';

const MainNav = () => {
  const [total, setTotal] = useState<number>(0);
  const [show, setShow] = useState<boolean>(false);
  const listCategory = getCategory() as CategoryTypes[];
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { t } = useTranslation('common');
  const router = useRouter();

  const changeLanguage = async (lang: string) => {
    await setLanguage(lang);
    window.location.reload();
  };
  const { locale } = router;

  useEffect(() => {
    setShow(false);
  }, [router]);

  useEffect(() => {
    const cart = localStorage.getItem('cart');
    if (cart) {
      const cartData = JSON.parse(cart) as ProductCartTypes[];
      setTotal(cartData.reduce((sum, item) => sum + item.quantity, 0));
    }
  }, []);

  useEffect(() => {
    const originalSetItem = localStorage.setItem;

    localStorage.setItem = function setItem(key, value) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const event = new Event('itemInserted') as any;

      event.value = value;
      event.key = key;

      document.dispatchEvent(event);

      // eslint-disable-next-line prefer-rest-params
      originalSetItem.apply(this, arguments);
    };

    const localStorageSetHandler = (e) => {
      const cart = JSON.parse(e.value);
      const totals = cart.reduce((sum: number, item: ProductCartTypes) => sum + item.quantity, 0);
      setTotal(totals);
    };
    document.addEventListener('itemInserted', localStorageSetHandler, false);
  }, []);

  return (
    <div className="top-menu main-menu-top">
      <div className="banner_top_menu">
        <div className="wrapper_banner">
          <div className="language">
            <Image
              onClick={() => changeLanguage('vi')}
              src="/images/vietnam.png"
              width={32}
              height={32}
            />{' '}
            <Image
              onClick={() => changeLanguage('en')}
              src="/images/english.png"
              width={32}
              height={32}
            />
          </div>
          <span className="header-banner-text">{t('textHeaderFreeship')}</span>
          <span className="header-banner-text-deal">UPTO -70%</span>
          <div className="search_top_menu">
            <form className="search-form" encType="application/x-www-form-urlencoded">
              <div className="search-input-env">
                <input type="text" className="search-input" name="s" placeholder={t('textHeaderSearch')} />
                <button className="btn_search_top" type="button">
                  <span className="glyphicon glyphicon-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="row">
          <div className="col-sm-12">
            <div className="tl-header with-cart-ribbon">
              <div className="logo">
                <div className="logo-entry">
                  <Link href="/">
                    <span className="brand-logo">
                      <span
                        className="logo-element general"
                        style={{ width: '500px', maxWidth: '500px' }}
                      >
                        <span style={{ paddingBottom: '18%' }}>
                          <Link href="/">
                            <a>
                              <img src="/images/s2p-color.png" width={300} height={100} alt="" />
                            </a>
                          </Link>
                        </span>
                      </span>
                      <span
                        className="logo-element mobile"
                        style={{ width: '500px', maxWidth: '500px' }}
                      >
                        <span style={{ paddingBottom: '26%' }}>
                          <Link href="/">
                            <a>
                              <img src="/images/s2p-color.png" width={300} height={100} alt="" />
                            </a>
                          </Link>
                        </span>
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="mobile-menu-link">
                  <a href="#" onClick={() => setShow(!show)}>
                    <i className="glyphicon glyphicon-align-justify" />
                  </a>
                </div>
              </div>
              <div
                className={
                  show
                    ? 'mobile-menu visible-xs visible'
                    : 'mobile-menu visible-xs hidden-menu-mobile'
                }
              >
                <ul id="menu-main-menu-1" className="nav">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                    <Link href="/story" locale="en">
                      {t('textHeaderBrandStory')}
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26">
                    <Link href="/shop">{t('textHeaderProduct')}</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 dropdown-btn">
                    <a href="#" onClick={() => setShowMenu(!showMenu)}>
                      {t('textHeaderCatePro')}
                    </a>
                    <div>
                      {showMenu &&
                        listCategory.map((item) => (
                          <div className="sub-nav-item" key={item.id}>
                            <Link href={`/shop/category/${item.type}`}>{locale === 'vi' ? item.name : item.en_name}</Link>
                          </div>
                        ))}
                    </div>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
                    <Link href="/my-account">{t('textHeaderLogin')}</Link>
                  </li>
                </ul>
                <Link href="/cart">
                  <a className="cart-items">
                    <span>{total}</span>
                    {t('textCart')}
                  </a>
                </Link>
              </div>
              <div className="sec-nav">
                <nav className="main-menu-env">
                  <ul id="menu-main-menu" className="nav">
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-25">
                      <Link href="/story">{t('textHeaderBrandStory')}</Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26">
                      <Link href="/shop">{t('textHeaderProduct')}</Link>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-26 dropdown-btn">
                      <a>{t('textHeaderCatePro')}</a>
                      <div className="dropdown-menu-desktop">
                        {listCategory.map((item) => (
                          <div className="sub-nav-item" key={item.id}>
                            <Link href={`/shop/category/${item.type}`}>{locale === 'vi' ? item.name : item.en_name}</Link>
                          </div>
                        ))}
                      </div>
                    </li>
                    <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-23">
                      <Link href="/my-account">{t('textHeaderLogin')}</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="cart-ribbon">
                <Link href="/cart">
                  <a>
                    <span className="cart_content">
                      <span
                        className="bucket"
                        style={{
                          backgroundImage: 'url(/images/bucket_small.png)'
                        }}
                      />
                      <span className="number">{total}</span>
                    </span>
                    <span className="bucket-bottom" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
