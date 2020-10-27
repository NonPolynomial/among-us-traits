import { useState, useEffect, ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import i18n from 'i18next';
import { routes } from '@/routes';
import { initTranslations } from '@/translation/initTranslations';
import { LanguageContext } from '@/translation/languageContext';
import { version } from '../../package.json';

type Props = {
  children: ReactNode,
};

export const AppProvider = ({ children }: Props) => {
  const [lang, setLang] = useState('en');
  const [translator, setTranslator] = useState(null);
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lng = localStorage.getItem('language');
      if (lng && lang !== lng) {
        setLang(lng);
        i18n.changeLanguage(lng);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  }, [lang]);

  useEffect(() => {
    const closeMobileMenu = () => {
      toggleMobileMenu(false);
    };

    if (isMobileMenuOpen) {
      window.addEventListener('click', closeMobileMenu);
      window.addEventListener('resize', closeMobileMenu);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('click', closeMobileMenu);
        window.removeEventListener('resize', closeMobileMenu);
      }
    };
  }, [isMobileMenuOpen]);

  if (!translator) {
    initTranslations(lang)
      .then(() => {
        setTranslator(i18n);
        i18n.on('languageChanged', lng => {
          setLang(lng);
        });
      })
      .catch(e => {
        console.error(e);
      });

    return <></>;
  }

  const currentRoute = routes.find(({ path }) => path === router.pathname);
  const t = i18n.getFixedT(lang);
  const pageTitle = currentRoute
    ? `${t(`page.title.${currentRoute.id}`)} | ${t('meta.title')}`
    : t('meta.title');

  return (
    <LanguageContext.Provider value={lang}>
      <Head>
        <title key="title">{pageTitle}</title>
      </Head>
      <div className="app">
        <header className="hero is-dark">
          <div className="hero-head">
            <div className="navbar">
              <div className="container">
                <div className="navbar-brand">
                  <div className="navbar-item has-text-weight-bold">
                    Among Us - Traits
                  </div>
                  <a
                    className={[
                      'navbar-burger',
                      isMobileMenuOpen ? 'is-active' : '',
                    ].join(' ')}
                    onClick={() => {
                      toggleMobileMenu(!isMobileMenuOpen);
                    }}
                  >
                    <span />
                    <span />
                    <span />
                  </a>
                </div>
                <div
                  className={[
                    'navbar-menu',
                    isMobileMenuOpen ? 'is-active' : '',
                  ].join(' ')}
                >
                  <div className="navbar-start">
                    {routes
                      .filter(({ hidden }) => !hidden)
                      .map(({ id, path, children: childRoutes }) =>
                        !childRoutes || childRoutes.length === 0 ? (
                          <Link key={id} href={path}>
                            <a
                              className={[
                                'navbar-item',
                                router.pathname === path ? 'is-active' : '',
                              ].join(' ')}
                            >
                              {t(`page.title.${id}`)}
                            </a>
                          </Link>
                        ) : (
                          <div className="navbar-item has-dropdown is-hoverable">
                            <div
                              className={[
                                'navbar-link',
                                [
                                  path,
                                  ...childRoutes
                                    .map(child =>
                                      routes.find(
                                        ({ id: rId }) => rId === child,
                                      ),
                                    )
                                    .map(({ path: p }) => p),
                                ].some(p => router.pathname === p)
                                  ? 'is-active'
                                  : '',
                              ].join(' ')}
                            >
                              {t(`page.title.${id}`)}
                            </div>
                            <div className="navbar-dropdown is-boxed">
                              <Link key={id} href={path}>
                                <a
                                  className={[
                                    'navbar-item',
                                    router.pathname === path ? 'is-active' : '',
                                  ].join(' ')}
                                >
                                  {t(`page.title.${id}`)}
                                </a>
                              </Link>
                              {childRoutes
                                .map(child =>
                                  routes.find(({ id: rId }) => rId === child),
                                )
                                .map(({ id: cId, path: cPath }) => (
                                  <Link key={cId} href={cPath}>
                                    <a
                                      className={[
                                        'navbar-item',
                                        router.pathname === cPath
                                          ? 'is-active'
                                          : '',
                                      ].join(' ')}
                                    >
                                      {t(`page.title.${cId}`)}
                                    </a>
                                  </Link>
                                ))}
                            </div>
                          </div>
                        ),
                      )}
                    <div className="navbar-item has-dropdown is-hoverable">
                      <div className="navbar-link">About</div>
                      <div className="navbar-dropdown is-boxed">
                        <Link href="https://github.com/NonPolynomial/among-us-traits">
                          <a className="navbar-item">Github</a>
                        </Link>
                        <Link href="/changelog">
                          <a className="navbar-item">Changelog</a>
                        </Link>
                        <hr className="navbar-divider" />
                        <div className="navbar-item">
                          Version:&nbsp;
                          {version}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="navbar-end">
                    <Link href="https://github.com/NonPolynomial/among-us-traits">
                      <a className="navbar-item" target="_new">
                        <span className="icon">
                          <i className="fab fa-github" />
                        </span>
                      </a>
                    </Link>
                    <a
                      className="navbar-item"
                      role="button"
                      onClick={() => {
                        i18n.changeLanguage(
                          i18n.language !== 'en' ? 'en' : 'de',
                        );
                      }}
                      onKeyUp={e => {
                        if (e.key === 'l') {
                          i18n.changeLanguage(
                            i18n.language !== 'en' ? 'en' : 'de',
                          );
                        }
                      }}
                    >
                      <span className="icon">
                        <i className="fas fa-language" />
                      </span>
                      <span className="px-1 pb-1">{t('changeLanguage')}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">{t('meta.title')}</h1>
              <h2 className="subtitle">{t('meta.subtitle')}</h2>
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <div className="level">
            <div className="level-left" />
            <div className="level-right">
              <div className="level-item">
                <div className="tags has-addons">
                  <span className="tag is-dark">Version</span>
                  <span className="tag">{version}</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LanguageContext.Provider>
  );
};
