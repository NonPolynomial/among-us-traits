import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import i18n from 'i18next';
import { routes } from '@/routes';
import { initTranslations } from '@/translation/initTranslations';
import { LanguageContext } from '@/translation/languageContext';

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [translator, setTranslator] = useState(null);
  const router = useRouter();
  const currentRoute = routes.find(({ path }) => path === router.pathname);

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

  const t = i18n.getFixedT(lang);

  const pageTitle = currentRoute
    ? `${currentRoute.title} | ${t('meta.title')}`
    : t('meta.title');

  return (
    <LanguageContext.Provider value={lang}>
      <Head>
        <title key="title">{pageTitle}</title>
      </Head>
      <section className="hero is-dark">
        <div className="hero-head">
          <div className="navbar has-background-dark">
            <div className="navbar-brand">
              <div className="navbar-item has-text-light title is-4">
                Among Us - Traits
              </div>
            </div>
            <div className="navbar-menu">
              <div className="navbar-start">
                {routes.map(({ path, title }) => (
                  <Link href={path} key={path}>
                    <a
                      className={`navbar-item ${
                        router.pathname === path ? 'is-active' : ''
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="navbar-end">
                <a
                  className="navbar-item"
                  href="https://github.com/NonPolynomial/among-us-traits"
                  target="_new"
                >
                  <span className="icon">
                    <i className="fab fa-github" />
                  </span>
                </a>
                <a
                  className="navbar-item"
                  onClick={() => {
                    i18n.changeLanguage(i18n.language !== 'en' ? 'en' : 'de');
                  }}
                >
                  <span className="icon">
                    <i className="fas fa-language" />
                  </span>
                </a>
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
      </section>
      {children}
    </LanguageContext.Provider>
  );
};
