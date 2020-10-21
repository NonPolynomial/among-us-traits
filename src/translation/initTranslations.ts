import i18n from 'i18next';
import { traits } from '@/traits';

let init: ReturnType<typeof i18n.init> = null;

export const initTranslations = (lang: string) => {
  if (!init)
    init = i18n.init({
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
    });

  return init;
};
