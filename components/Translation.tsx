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
            roles: {
              detective: {
                title: 'Detective',
                description: `<p>
                  You have to follow the first crewmate you see at the start of the game or after a meeting.
                  <br />
                  You only can finish your task while investigating the person you follow.
                </p>
                <p>
                  If you have lost the person you are investigating, you have to finish your tasks normally until you meet a crewmate again.
                  <br />
                  Then you have to follow and investigate this person instead.
                </p>`,
              },
              dystychiphobia: {
                title: 'Dystychiphobia',
                description: `<p>
                  If you see a dead body, you become panic and phobic.
                  <br />
                  You must not report dead bodies.
                  <br />
                  You just run through the floors until you meet a group of at least 2 crewmates.
                  <br />
                  As you are panic, you run away from crewmates that are alone - it could be the killer!
                </p>
                <p>
                  The only thing, that can calm you down is a meeting - no matter if its a emergency meeting or someone reported a body.
                </p>`,
              },
              liar: {
                title: 'Liar',
                description: `<p>
                  You simply lie about anything.
                  <br />
                  If you get asked about your locations, tasks or other crewmates - you lie.
                  <br />
                  If you could vouch for someone, you simply don't.
                </p>`,
              },
              mute: {
                title: 'Mute',
                description: `<p>
                  You can't speak in emergency meetings or when a dead body was reported.
                  <br />
                  You can use the ingame chat though.
                </p>`,
              },
              nocolors: {
                title: 'No Colors',
                description: `<p>You are colorblind and can't pass any information about colors to other crewmates.</p>`,
              },
              paranoia: {
                title: 'Paranoia',
                description: `<p>
                  You trust nobody!
                  <br />
                  You cannot finish tasks while others are with you and try to go alone.
                  <br />
                  You must not vouch for other crew mates.
                </p>`,
              },
              prosopagnosia: {
                title: 'Prosopagnosia',
                description: `<p>You are face blind and can't pass any information about names to other crewmates.</p>`,
              },
              sadist: {
                title: 'Sadist',
                description: `<p>
                  You love see people suffer - even your crew mates.
                  <br />
                  You must not report dead bodies.
                </p>`,
              },
              security: {
                title: 'Security Guard',
                description: `<p>
                  As security guard you have to make yourself an overview over the map and the other crewmates.
                  <br />
                  You have to walk from one security station to another (e.g. security, admin).
                </p>
                <p>
                  You are allowed to finish tasks only on the way.
                  <br />
                  Tasks which can't finished on the way, can be finished while walking on quick patrols.
                </p>`,
              },
              workaholic: {
                title: 'Workaholic',
                description: `<p>
                  Your single goal are your tasks.
                  <br />
                  You ignore dead bodies, other players or crisis,
                  except it interrupts you while doing your tasks, e.g. disabled communications.
                </p>`,
              },
            },
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
            roles: {
              detective: {
                title: 'Detektiv',
                description: `<p>
                  Du musst dem ersten Crewmate folgen, den du bei Spielbeginn oder nach einem Meeting siehst.
                  <br />
                  Du kannst deine Aufgabe nur beenden, während du die Person untersuchst, der du folgst.
                </p>
                <p>
                  Wenn du die Person, gegen die du ermittelst, verloren hast, musst du deine Aufgaben normal erledigen, bis du wieder auf einen Besatzungsmitglied triffst.
                  <br />
                  Dann musst du stattdessen dieser Person folgen und gegen sie ermitteln.
                </p>`,
              },
              dystychiphobia: {
                title: 'Dystychiphobia',
                description: `<p>
                  Wenn du eine Leiche siehst, wirst du panisch und phobisch.
                  <br />
                  Du darfst keine Leichen melden.
                  <br />
                  Du rennst solange durch die Flure, bis du auf eine Gruppe von mindestens 2 Crewmates triffst.
                  <br />
                  Da du in Panik bist, läufst du vor den Crewmates weg, die allein sind - es könnte der Mörder sein!
                </p>
                <p>
                  Das Einzige, was dich beruhigen kann, ist ein Meeting - egal, ob es sich um eine Emergency Meeting handelt oder ob jemand eine Leiche gemeldet hat.
                </p>`,
              },
              liar: {
                title: 'Lügner',
                description: `<p>
                  Du lügst einfach über alles.
                  <br />
                  Wenn du nach deinen Standorten, Aufgaben oder anderen Crewmates gefragt wirst - du lügst.
                  <br />
                  Wenn du für jemanden bürgen könntest, tust du es einfach nicht.
                </p>`,
              },
              mute: {
                title: 'Mute',
                description: `Du kannst nicht sprechen und den Sprachchat nicht nutzen.
                <br />
                Du kannst aber den Ingame-Chat nutzen.`,
              },
              nocolors: {
                title: 'No Colors',
                description: `Du kannst keine Farben erkennen oder Informationen, die Farben betreffen weitergeben.`,
              },
              paranoia: {
                title: 'Paranoia',
                description: `Du traust niemandem!
                <br />
                Du kannst keine Tasks erledigen, während andere in deiner Nähe sind, und du versucht immer alleine zu sein.
                <br />
                Du darst für niemanden vouchen.`,
              },
              prosopagnosia: {
                title: 'Prosopagnosia',
                description: `<p>Du bist gesichtsblind und kannst keine Informationen über Namen an andere Besatzungsmitglieder weitergeben.</p>`,
              },
              sadist: {
                title: 'Sadist',
                description: `Du liebst es Leute leiden zu sehen - auch deine Crewmates.
                <br />
                Du darfst keine Leichen melden.`,
              },
              security: {
                title: 'Sicherheitsbeamter',
                description: `<p>
                  Als Sicherheitsbeamter muss man sich einen Überblick über die Karte und die anderen Crewmates verschaffen.
                  <br />
                  Du musst von einer Sicherheitsstation zur anderen laufen (z.B. Sicherheit, Admin).
                </p>
                <p>
                  Sie dürfen Aufgaben nur auf dem Weg erledigen.
                  <br />
                  Aufgaben, die unterwegs nicht erledigt werden können, können auf schnellen Patrouillen unterwegs erledigt werden.
                </p>`,
              },
              workaholic: {
                title: 'Workaholic',
                description: `Dein einziges Ziel sind deine Tasks.
                <br />
                Du ignorierst Leichen, andere Mitspieler und Sabotagen,
                außer es stört dich beim Erledigen deiner Tasks, z.B. disabled communications.`,
              },
            },
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
                  <Link href={href}>
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
