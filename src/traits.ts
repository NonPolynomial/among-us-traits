type Trait = {
  id: string;
  deprecated?: boolean;
  translations: {
    [key: string]: {
      title: string;
      description: string;
    };
  };
};

export const traits: Trait[] = [
  {
    id: 'amnesia',
    translations: {
      en: {
        title: 'Amnesia',
        description: `<p>
          You don't know anything about what you have done.
          <br />
          You forget what happened in previous meetings and what someone said.
        </p>`,
      },
      de: {
        title: 'Amnesie',
        description: `<p>
          Du weißt nicht was du gemacht hast.
          <br />
          Du vergisst was in den letzten Meetings passiert ist oder gesagt wurde.
        </p>`,
      },
    },
  },
  {
    id: 'blur',
    translations: {
      en: {
        title: 'Blurred',
        description: `<p>
          You can't see shit!
          <br />
          You can't see dead bodies, crewmates or venting impostors.
          <br />
          You just do your tasks - well, you try.
        </p>`,
      },
      de: {
        title: 'Blurred',
        description: `<p>
          Du kannst nichts sehen!
          <br />
          Du kannst keine Leichen, Crewmates oder venting Impostors.
          <br />
          Du machst nur deine Aufgaben - naja, du versuchst es zumindest.
        </p>`,
      },
    },
  },
  {
    id: 'detective',
    translations: {
      en: {
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
      de: {
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
    },
  },
  {
    id: 'dystychiphobia',
    translations: {
      en: {
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
      de: {
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
    },
  },
  {
    id: 'liar',
    translations: {
      en: {
        title: 'Liar',
        description: `<p>
          You simply lie about anything.
          <br />
          If you get asked about your locations, tasks or other crewmates - you lie.
          <br />
          If you could vouch for someone, you simply don't.
        </p>`,
      },
      de: {
        title: 'Lügner',
        description: `<p>
          Du lügst einfach über alles.
          <br />
          Wenn du nach deinen Standorten, Aufgaben oder anderen Crewmates gefragt wirst - du lügst.
          <br />
          Wenn du für jemanden bürgen könntest, tust du es einfach nicht.
        </p>`,
      },
    },
  },
  {
    id: 'mute',
    deprecated: true,
    translations: {
      en: {
        title: 'Mute',
        description: `<p>
          You can't speak in emergency meetings or when a dead body was reported.
          <br />
          You can use the ingame chat though.
        </p>`,
      },
      de: {
        title: 'Mute',
        description: `<p>
          Du kannst nicht sprechen und den Sprachchat nicht nutzen.
          <br />
          Du kannst aber den Ingame-Chat nutzen.
        </p>`,
      },
    },
  },
  {
    id: 'nocolors',
    deprecated: true,
    translations: {
      en: {
        title: 'No Colors',
        description: `<p>You are colorblind and can't pass any information about colors to other crewmates.</p>`,
      },
      de: {
        title: 'No Colors',
        description: `<p>Du kannst keine Farben erkennen oder Informationen, die Farben betreffen weitergeben.</p>`,
      },
    },
  },
  {
    id: 'notrait',
    translations: {
      en: {
        title: 'No trait',
        description: '<p>There is no trait here!</p>',
      },
      de: {
        title: 'Kein Trait',
        description: '<p>Hier ist kein Trait!</p>',
      },
    },
  },
  {
    id: 'paranoia',
    translations: {
      en: {
        title: 'Paranoia',
        description: `<p>
          You trust nobody!
          <br />
          You cannot finish tasks while others are with you and try to go alone.
          <br />
          You must not vouch for other crew mates.
        </p>`,
      },
      de: {
        title: 'Paranoia',
        description: `<p>
          Du traust niemandem!
          <br />
          Du kannst keine Tasks erledigen, während andere in deiner Nähe sind, und du versucht immer alleine zu sein.
          <br />
          Du darst für niemanden vouchen.
        </p>`,
      },
    },
  },
  {
    id: 'prosopagnosia',
    deprecated: true,
    translations: {
      en: {
        title: 'Prosopagnosia',
        description: `<p>You are face blind and can't pass any information about names to other crewmates.</p>`,
      },
      de: {
        title: 'Prosopagnosia',
        description: `<p>Du bist gesichtsblind und kannst keine Informationen über Namen an andere Besatzungsmitglieder weitergeben.</p>`,
      },
    },
  },
  {
    id: 'sadist',
    translations: {
      en: {
        title: 'Sadist',
        description: `<p>
          You love see people suffer - even your crew mates.
          <br />
          You must not report dead bodies.
        </p>`,
      },
      de: {
        title: 'Sadist',
        description: `<p>
          Du liebst es Leute leiden zu sehen - auch deine Crewmates.
          <br />
          Du darfst keine Leichen melden.
        </p>`,
      },
    },
  },
  {
    id: 'security',
    translations: {
      en: {
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
      de: {
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
    },
  },
  {
    id: 'workaholic',
    translations: {
      en: {
        title: 'Workaholic',
        description: `<p>
          Your single goal are your tasks.
          <br />
          You ignore dead bodies, other players or crisis,
          except it interrupts you while doing your tasks, e.g. disabled communications.
        </p>`,
      },
      de: {
        title: 'Workaholic',
        description: `<p>
          Dein einziges Ziel sind deine Tasks.
          <br />
          Du ignorierst Leichen, andere Mitspieler und Sabotagen,
          außer es stört dich beim Erledigen deiner Tasks, z.B. disabled communications.
        </p>`,
      },
    },
  },
];
