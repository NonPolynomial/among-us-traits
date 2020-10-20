import {
  PropsWithChildren,
  useState,
  createContext,
  useContext,
  useEffect,
} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import i18n from 'i18next';
import { routes } from '@/routes';
import { traits } from '@/traits';

export const LanguageContext = createContext('en');

export const useTranslation = () => {
  const lang = useContext(LanguageContext);

  return i18n.getFixedT(lang);
};

export const TranslationProvider = ({ children }: PropsWithChildren<{}>) => {
  const [lang, setLang] = useState('en');
  const [translator, setTranslator] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== null) {
      const lng = localStorage.getItem('language');
      if (lng && lang !== lng) {
        setLang(lng);
        i18n.changeLanguage(lng);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== null) {
      localStorage.setItem('language', lang);
    }
  }, [lang]);

  if (!translator) {
    i18n
      .init({
        lng: lang,
        debug: process.env.NODE_ENV === 'development',
        preload: ['en', 'de'],
        ns: ['common', 'roles'],
        defaultNS: 'common',
        resources: {
          en: {
            common: {
              getTrait: 'Get started!',
              newTrait: 'New trait',
              back: 'Back',
              changeLanguage: 'en ↔ de',
              content: {
                why: `<h2>Why?</h2>
                      <p>
                        "Among Us" is a fantastic game.
                        <br />
                        We wanted to give the game an additional twist.
                        <br />
                        So we thought, how about giving each player a special trait that influences the course of the game.
                      </p>`,
                how: `<h2>How does it work?</h2>
                      <p>
                        Each player gets a random trait before start of the game.
                        <br />
                        This trait influences the behavior of the player.
                      </p>`,
              },
              meta: {
                title: 'Among Us - Traits',
                subtitle: 'for more fun',
              },
            },
            traits: traits.reduce(
              (acc, { id, translations: { en: translation } }) => {
                return {
                  ...acc,
                  [id]: translation,
                };
              },
              {},
            ),
          },
          de: {
            common: {
              getTrait: 'Leg los!',
              newTrait: 'Neuer Trait',
              back: 'Zurück',
              changeLanguage: 'de ↔ en',
              content: {
                why: `<h2>Warum?</h2>
                <p>
                  "Among Us" ist ein fantastisches Spiel.
                  <br />
                  Wir wollten dem Spiel eine gewisse Würze geben.
                  <br />
                  Also dachten wir uns, wie wäre es, wenn jeder Spiele einen bestimmten Trait bekommen würde, der den Spielverlauf beeinflusst.
                </p>`,
                how: `<h2>Wie funktioniert's?</h2>
                <p>
                  Jeder Spieler bekommt einen zufälligen Trait.
                  <br />
                  Dieser Trait beeinflusst wie sich der Spieler verhält.
                </p>`,
              },
              meta: {
                title: 'Among Us - Traits',
                subtitle: 'für mehr Spaß',
              },
            },
            traits: traits.reduce(
              (acc, { id, translations: { de: translation } }) => {
                return {
                  ...acc,
                  [id]: translation,
                };
              },
              {},
            ),
          },
        },
      })
      .then((t) => {
        setTranslator(i18n);
        i18n.on('languageChanged', (lng) => {
          setLang(lng);
        });
      })
      .catch((e) => {
        console.error(e);
      });

    return <></>;
  }

  const t = i18n.getFixedT(lang);

  return (
    <LanguageContext.Provider value={lang}>
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
                {routes.map(({ href, title }) => (
                  <Link href={href} key={href}>
                    <a
                      className={`navbar-item ${
                        router.pathname === href ? 'is-active' : ''
                      }`}
                    >
                      {title}
                    </a>
                  </Link>
                ))}
              </div>
              <div className="navbar-end">
                {/* <div className="navbar-item"> */}
                <a
                  className="navbar-item"
                  onClick={() => {
                    i18n.changeLanguage(i18n.language !== 'en' ? 'en' : 'de');
                  }}
                >
                  {t('changeLanguage')}
                </a>
                {/* </div> */}
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
