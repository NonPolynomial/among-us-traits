import { Trait } from "./types";

export const traits: Trait<'weighted' | 'deprecated'>[] = [
  // ! Please add traits in alphabetical order !
  {
    id: 'amnesia',
    weight: 40,
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
    id: 'blindbat',
    weight: 80,
    translations: {
      en: {
        title: 'Blind like a Bat',
        description: `<p>
          You're blind. You have a good sense of hearing, so you know where others are, but you can only identify others by touching them with your character-sprite.
        </p>`,
      },
      de: {
        title: 'Blind wie eine Fledermaus',
        description: `<p>
          Du bist blind. Du hast gutes Gehör, weißt also wo sich andere in deiner Nähe befinden, aber kannst sie nur identifizeren, wenn du sie mit deinem Charakter-Sprite berührst.
        </p>`,
      },
    },
  },
  {
    id: 'blur',
    weight: 60,
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
    id: 'buzzer',
    weight: 80,
    translations: {
      en: {
        title: 'Buzzer Lover',
        description: `<p>
          While you have your emergency meeting ready, you can only report a corpse by using the emergency meeting.
        </p>`,
      },
      de: {
        title: 'Buzzer Liebhaber',
        description: `<p>
          Solange dein Emergency Meeting noch unverbraucht ist, kannst du leichen nur damit melden.
        </p>`,
      },
    },
  },
  {
    id: 'cleaning-staff',
    weight: 130,
    translations: {
      en: {
        title: 'Cleaning Staff',
        description: `<p>
          You have to clean the bloody mess someone else (or you) created...
          <br />
          If you find a corpse or the meeting reveals the position of one, head there right away and clean that mess.
          <br />
          Stand next to the body (or area) for around 10 seconds, then either report it or run away, your choice.
        </p>`,
      },
      de: {
        title: 'Putzbeauftragter',
        description: `<p>
          Du musst die blutige Sauerrei die einer (oder du) verrichtet hat aufräumen...
          <br />
          Wenn du eine Leiche findest oder die Lage von einer herausfindest, geh dort direkt hin und putze den Mist auf.
          <br />
          Stehe neben dem Körper für ca. 10 Sek., dann entweder Reporte sie oder renne weg, deine Entscheidung.
        </p>`,
      },
    },
  },
  {
    id: 'conspiracy',
    weight: 150,
    translations: {
      en: {
        title: 'Conspiracy Theorist',
        description: `<p>
          You don't believe in Vents.
          <br />
          The existence of vents is an idea that the government planted in our brains to control us.
        </p>
        <p>
          Arguments involving them can only convince you with difficulty.
          <br />
          If you see someone vent, you'll rationalize it as them having been there the whole time.
          <br />
          Every death is somehow connected in a bigger scheme, which you'll let others know when the game is over.
        </p>`,
      },
      de: {
        title: 'Verschörungs-Theoretiker',
        description: `<p>
          Du glaubst nicht an Lüftungsschächte.
          <br />
          Die Existenz von Lüftungsschächten ist eine Idee, die die Regierung in unseren Gehirnen gepflanzt hat um uns zu kontrollieren.
        </p>
        <p>
          Argumente die sie beinhalten können dich nur schwer überzeugen.
          <br />
          Wenn du jemand im Lüftungtsschacht siehst, denkst du, dass er schon die ganze Zeit im raum war.
          <br />
          Jeder Tod ist Teil eines größeren Schemas, welches du den anderen nach dem Match erklärst.
        </p>`,
      },
    },
  },
  {
    id: 'curious',
    weight: 140,
    translations: {
      en: {
        title: 'Curious',
        description: `<p>
          You are fascinated by vents.
          <br/>
          Whenever one comes into your vision radius, you need to check it out by standing on top of it shortly before moving on.
        </p>`,
      },
      de: {
        title: 'Neugierig',
        description: `<p>
          Lüftungsschächte faszinieren dich.
          <br />
          Immer wenn du einen im Sichtradius hast, musst du ihn genauer untersuchen, indem du dich kurz drauf stells bevor du weitermachst.
        </p>`,
      },
    },
  },
  {
    id: 'detective',
    weight: 90,
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
    id: 'diplomacy',
    weight: 120,
    translations: {
      en: {
        title: 'Diplomacy',
        description: `<p>
          If multiple people blame each other, you try to solve the conflict with
          diplomacy instead of voting them both out.
        </p>`,
      },
      de: {
        title: 'Diplomatie',
        description: `<p>
          Wenn sich mehrere Personen gegenseit anschuldigen, versuchst du ihren streit
          diplomatisch zu lösen anstatt beide rauszuvoten.
        </p>`,
      },
    },
  },
  {
    id: 'dystychiphobia',
    weight: 90,
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
    id: 'envy',
    weight: 140,
    translations: {
      en: {
        title: 'Envy',
        description: `<p>
          If a body is reported, you really dislike the one who reported it (unless it
          was you).
        </p>
        <p>He is very suspicious to you in this meeting.</p>`,
      },
      de: {
        title: 'Eifersucht',
        description: `<p>
          Wenn eine Leiche (von jemand anderem als dir) gemeldet wird, bist du neidisch
          auf ihn, denn du hättest ihn gerne selbst gemeldet.
        </p>
        <p>Er ist dir sehr verdächtig in diesem Meeting.</p>`,
      },
    },
  },
  {
    id: 'easily shocked',
    weight: 120,
    translations: {
      en: {
        title: 'Easily Shocked',
        description: `<p>
          If you see a corpse or when the lights go out,
          <br />
          you need to wait ca. 10 seconds to gather your bravery
          <br />
          before you can continue to move or report the body.
        </p>
        <p>
          As Impostor, you don't fear the dark.
        </p>`,
      },
      de: {
        title: 'Leicht zu schocken',
        description: `<p>
          Wenn du eine Leiche siehst oder das Licht ausgeht,
          <br />
          musst du ca. 10 sekunden deinen Mut zusammennehmen,
          <br />
          bevor du weitermachen oder die Leiche melden kannst.
        </p>
        <p>
          Imposter haben keine Angst im Dunkeln!
        </p>`,
      },
    },
  },
  {
    id: 'gluttony',
    weight: 140,
    translations: {
      en: {
        title: 'Gluttony',
        description: `<p>
          After you finish all the tasks or kill a crewmate in one room, you are going to the meeting room to pick up a snack.
          <br />
          Don't do any tasks on the way to the cafeteria - because... you know... you need that snack!
        </p>`,
      },
      de: {
        title: 'Völlerei',
        description: `<p>
          Nachdem du alle Aufgaben in einem Raum oder einen Crewmate erledigt hast, musst du in den Meeting-Raum gehen und dir einen Snack holen.
          <br />
          Auf dem Weg zur Cafeteria darfst du keinen Task erledigen - weil... naja... du brauchst diesen Snack!
        </p>`,
      },
    },
  },
  {
    id: 'janitor',
    weight: 130,
    translations: {
      en: {
        title: 'Janitor',
        description: `<p>
          You keep the operation in order. You check Electrical, Oxygen and Cafeteria often, there might be a fuse lose or something else wrong.
          <br />
          If something is wrong with those, you fix them, IMMEDIATELY (even if it disrupts your current task!
        </p>`,
      },
      de: {
        title: 'Hausmeister',
        description: `<p>
          Du schaust das alles läuft. Du kontrollierst Electrical, Oxygen und Cafeteria öfters mal, es könnte eine Sicherung lose sein oder etwas anders!
          <br />
          Wenn etwas mit diesen Dingen falsch läuft, du reparierst diese, SOFORT (auch wenn es deinen aktuellen Task unterbricht)!
        </p>`,
      },
    },
  },
  {
    id: 'liar',
    weight: 110,
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
    id: 'lust',
    weight: 120,
    translations: {
      en: {
        title: 'Lust',
        description: `<p>
          Look for a partner in the beginning, this is your lover,
          <br />
          you follow him/her FOREVER and EVERYWHERE.
        </p>
        <p>If your lover dies you seek a new one.</p>`,
      },
      de: {
        title: 'Lust',
        description: `<p>
          Schaue nach einem Partner am Anfang, das ist dein Geliebter,
          <br />
          du folgst ihm/ihr für IMMER und ÜBERALL hin.
        </p>
        <p>Wenn dein Geliebter stirbt, suchst du einen neuen.</p>`,
      },
    },
  },
  {
    id: 'maintenance',
    weight: 130,
    translations: {
      en: {
        title: 'Maintenance Team',
        description: `<p>
          "Change the lightbulb", "The Wifi is down, fix it", "Oh no the reactor is
          melting!" and "Help me I am suffocating!" - is most of what you hear all
          day...
          <br />
          You have to walk between Electrical, Comms, Reactor and Oxygen, so nobody
          complains that often.
        </p>
        <p>
          You are allowed to finish tasks only on the way.
          <br />
          Tasks which can't finished on the way, can be finished while walking on quick
          patrols.
        </p>`,
      },
      de: {
        title: 'Wartungsteam',
        description: `<p>
          "Tausch die Glühbirne aus", "Eh, das Wlan spackt wieder", "Oh nein der Reaktor
          schmilzt" und "Hilfe ich ersticke!" - ist das was du den ganzen Tag zu hören
          bekommst...
          <br />
          Du musst zwischen Electrical, Comms, Reactor und Oxygen hin und her laufen,
          damit nicht alle rumnörgeln.
        </p>
        <p>
          Du darfst Aufgaben nur auf dem Weg erledigen.
          <br />
          Aufgaben, die unterwegs nicht erledigt werden können, können auf schnellen
          Patrouillen unterwegs erledigt werden.
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
    id: 'nope',
    weight: 80,
    translations: {
      en: {
        title: 'Nope!',
        description: `<p>
          You disagree with everything said, no matter what.
          <br />
          However, the other crewmates can convince you otherwise with sound logic.
        </p>`,
      },
      de: {
        title: 'Nope!',
        description: `<p>
          Du lehnst alles zunächst ab, egal was es ist.
          <br />
          Allerdings kannst du von den anderen Crewmates überzeugt werden, wenn sie
          Logik anwenden.
        </p>`,
      },
    },
  },
  {
    id: 'notrait',
    weight: 30,
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
    id: 'nurse',
    weight: 130,
    translations: {
      en: {
        title: 'Nurse',
        description: `<p>
          It is your sworn duty to check up on medbay, there might be a patient.
          Go to medbay regularly to check up on things.
        </p>`,
      },
      de: {
        title: 'Krankenschwester',
        description: `<p>
          Es ist deine geschworene Aufgabe Medbay zu checken, es könnte einen Patienten geben. Gehe öfter mal zu Medbay um die Dinge abzuchecken.
        </p>`,
      },
    },
  },
  {
    id: 'oldschool',
    weight: 120,
    translations: {
      en: {
        title: 'Oldschool',
        description: `<p>
          Back in your day, you had no fancy map device.
          <br />
          No need to use it now.
        </p>
        <p>
          You cannot open your Task-Map (sabotage is fine).
        </p>`,
      },
      de: {
        title: 'Von der alten Schule',
        description: `<p>
          Zu deiner Zeit gab es noch keine digitale Schiffskarte.
          <br />
          Du brauchst sie jetzt auch nicht.
        </p>
        <p>
          Du kannst deine Task-Map nicht öffnen (Sabotage ist ok).
        </p>`,
      },
    },
  },
  {
    id: 'paranoia',
    weight: 80,
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
    id: 'poltergeist',
    weight: 140,
    translations: {
      en: {
        title: 'Poltergeist',
        description: `<p>
          If you die, you sometimes disrupt the emergency meeting with sarcastic comments and mockery - don't overdo it!
        </p>`,
      },
      de: {
        title: 'Poltergeist',
        description: `<p>
          Wenn du stirbst, unterbrichst du hin und wieder das Meeting mit sarkastischen Kommentaren und Spott - nicht übertreiben!
        </p>`,
      },
    },
  },
  {
    id: 'pride',
    weight: 110,
    translations: {
      en: {
        title: 'Pride',
        description: `<p>
          You're proud of your work!
          <br />
          In a meeting, you always feel the need to share what tasks you did this round,
          <br />
          no matter if asked or not.
        </p>
        <p>
          As Impostor you have to fake, that you have finished tasks.
        </p>`,
      },
      de: {
        title: 'Stolz',
        description: `<p>
          Du bist stolz auf deine Arbeit!
          <br />
          Während einem Meeting willst du immer den anderen mitteilen, was für Tasks du diese Runde gemacht hast,
          <br />
          egal ob gefragt oder nicht.
        </p>
        <p>
          Als Impostor musst du natürlich vortäuschen, du hättest Tasks erledigt.
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
    id: 'reflection',
    weight: 90,
    translations: {
      en: {
        title: 'Reflection',
        description: `<p>
          Split the map vertically in its center and pick the first crewmate you see at the start of the game or after a meeting.
          <br />
          This crewmate is your "reflection".
        </p>
        <p>
          Whenever you see your Reflection on your part of the map,
          <br />
          you need to go to the other side.
        </p>`,
      },
      de: {
        title: 'Reflektion',
        description: `<p>
          Teile die Map vertikal in der mitte und wähle den Crewmate, den du bei Spielbeginn oder nach einem Meeting siehst.
          <br />
          Dieser Crewmate ist deine "Reflektion".
        </p>
        <p>
          Wann immer du deine Reflektion auf deiner Seite der Map triffst,
          <br />
          musst du die Seite wechseln.
        </p>`,
      },
    },
  },
  {
    id: 'sadist',
    weight: 90,
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
    weight: 130,
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
          Du darfst Aufgaben nur auf dem Weg erledigen.
          <br />
          Aufgaben, die unterwegs nicht erledigt werden können, können auf schnellen Patrouillen unterwegs erledigt werden.
        </p>`,
      },
    },
  },
  {
    id: 'sherlock',
    weight: 150,
    translations: {
      en: {
        title: 'Sherlock',
        description: `<p>
          Always remember the last person you saw.
          <br />
          Ask them where they were when the body was found (even if they were right next to you and you don't ask dead people).
        </p>
        <p>
          Additionally, you have to talk with an imaginary Watson.
        </p>`,
      },
      de: {
        title: 'Sherlock',
        description: `<p>
          Merke dir immer die letzte Person die du getroffen hast.
          <br />
          Frag sie, wo sie waren als die Leiche gefunden wurde (auch wenn sie direkt neben dir standen und du fragst keine Toten).
        </p>
        <p>
          Zusätzlich musst du mit einem imaginären Watson sprechen.
        </p>`,
      },
    },
  },
  {
    id: 'true-poet',
    weight: 120,
    translations: {
      en: {
        title: 'True Poet',
        description: `<p>If possible, your sentences should rhyme.</p>`,
      },
      de: {
        title: 'Wahrer Dichter',
        description: `<p>Reime deine Sätze wenn möglich.</p>`,
      },
    },
  },
  {
    id: 'walky-talky',
    weight: 150,
    translations: {
      en: {
        title: 'Walky-talky',
        description: `<p>End every sentence with "over".</p>`,
      },
      de: {
        title: 'Walky-Talky',
        description: `<p>Beende jeden Satz mit "over".</p>`,
      },
    },
  },
  {
    id: 'workaholic',
    weight: 90,
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
  {
    id: 'yes',
    weight: 80,
    translations: {
      en: {
        title: 'YAS!',
        description: `<p>
          You agree with everything said, no matter what.
          <br />
          However, the other crewmates can convince you otherwise with sound logic.
        </p>`,
      },
      de: {
        title: 'YAS!',
        description: `<p>
          Du stimmst allem zu, egal was es ist.
          <br />
          Allerdings kannst du von anderen Crewmates überzeugt werden, wenn sie Logik
          anwenden.
        </p>`,
      },
    },
  },
];
