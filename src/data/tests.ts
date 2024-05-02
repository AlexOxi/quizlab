import { Test } from './data-layer';

export const tests: Test[] = [
  {
    id: '1',
    label: 'Geografia',
    questions: [
      {
        id: '1',
        label: 'Ktorá krajina má najviac obyvateľov na svete?',
        answered: false,
        choices: [
          {
            id: '1001',
            label: 'Čína',
            correct: true,
          },
          {
            id: '1002',
            label: 'India',
            correct: false,
          },
          {
            id: '1003',
            label: 'Spojené štáty americké',
            correct: false,
          },
        ],
      },
      {
        id: '2',
        label: 'Ktorá z týchto krajín má najväčšiu rozlohu?',
        answered: false,
        choices: [
          {
            id: '2001',
            label: 'Nemecko',
            correct: false,
          },
          {
            id: '2002',
            label: 'Kanada',
            correct: true,
          },
          {
            id: '2003',
            label: 'Japonsko',
            correct: false,
          },
        ],
      },
      {
        id: '3',
        label: 'Ktorý oceán je najväčší na svete?',
        answered: false,
        choices: [
          {
            id: '3001',
            label: 'Atlantický oceán',
            correct: false,
          },
          {
            id: '3002',
            label: 'Tichý oceán',
            correct: true,
          },
          {
            id: '3003',
            label: 'Indický oceán',
            correct: false,
          },
        ],
      },
      {
        id: '4',
        label: 'Ktorý kontinent je najväčší?',
        answered: false,
        choices: [
          {
            id: '4001',
            label: 'Európa',
            correct: false,
          },
          {
            id: '4002',
            label: 'Africký',
            correct: true,
          },
          {
            id: '4003',
            label: 'Severnoamerický',
            correct: false,
          },
        ],
      },
      {
        id: '5',
        label: 'Ktorá rieka tečie cez Brazíliu?',
        answered: false,
        choices: [
          {
            id: '5001',
            label: 'Níl',
            correct: false,
          },
          {
            id: '5002',
            label: 'Amazonka',
            correct: true,
          },
          {
            id: '5003',
            label: 'Mississippi',
            correct: false,
          },
        ],
      },
      {
        id: '6',
        label: 'Ktorá z týchto krajín leží na severe Južnej Ameriky?',
        answered: false,
        choices: [
          {
            id: '6001',
            label: 'Argentina',
            correct: false,
          },
          {
            id: '6002',
            label: 'Bolívia',
            correct: false,
          },
          {
            id: '6003',
            label: 'Kolumbia',
            correct: true,
          },
        ],
      },
      {
        id: '7',
        label: 'Ktoré z týchto miest je hlavným mestom Austrálie?',
        answered: false,
        choices: [
          {
            id: '7001',
            label: 'Melbourne',
            correct: false,
          },
          {
            id: '7002',
            label: 'Sydney',
            correct: false,
          },
          {
            id: '7003',
            label: 'Canberra',
            correct: true,
          },
        ],
      },
      {
        id: '8',
        label:
          'Ktoré z týchto miest je hlavným mestom Spojených štátov amerických?',
        answered: false,
        choices: [
          {
            id: '8001',
            label: 'Washington, D.C.',
            correct: true,
          },
          {
            id: '8002',
            label: 'New York City',
            correct: false,
          },
          {
            id: '8003',
            label: 'Los Angeles',
            correct: false,
          },
        ],
      },
      {
        id: '9',
        label: 'Ktoré z týchto miest je hlavným mestom Kanady?',
        answered: false,
        choices: [
          {
            id: '9001',
            label: 'Ottawa',
            correct: true,
          },
          {
            id: '9002',
            label: 'Montreal',
            correct: false,
          },
          {
            id: '9003',
            label: 'Toronto',
            correct: false,
          },
        ],
      },
      {
        id: '10',
        label: 'Ktorá z týchto krajín sa nachádza v Európe?',
        answered: false,
        choices: [
          {
            id: '10001',
            label: 'Nigéria',
            correct: false,
          },
          {
            id: '10002',
            label: 'Rusko',
            correct: true,
          },
          {
            id: '10003',
            label: 'Bangladéš',
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: '2',
    label: 'Dejepis',
    questions: [
      {
        id: '1',
        label:
          'Kedy bola podpísaná Deklarácia nezávislosti Spojených štátov amerických?',
        answered: false,
        choices: [
          {
            id: '1001',
            label: '1776',
            correct: true,
          },
          {
            id: '1002',
            label: '1789',
            correct: false,
          },
          {
            id: '1003',
            label: '1803',
            correct: false,
          },
        ],
      },
      {
        id: '2',
        label: 'Kto bol prvý prezident Spojených štátov amerických?',
        answered: false,
        choices: [
          {
            id: '2001',
            label: 'George Washington',
            correct: true,
          },
          {
            id: '2002',
            label: 'Thomas Jefferson',
            correct: false,
          },
          {
            id: '2003',
            label: 'Abraham Lincoln',
            correct: false,
          },
        ],
      },
      {
        id: '3',
        label: 'V ktorom roku sa konala Francúzska revolúcia?',
        answered: false,
        choices: [
          {
            id: '3001',
            label: '1789',
            correct: true,
          },
          {
            id: '3002',
            label: '1804',
            correct: false,
          },
          {
            id: '3003',
            label: '1830',
            correct: false,
          },
        ],
      },
      {
        id: '4',
        label: 'Ktorý významný objavitel objavil Ameriku v roku 1492?',
        answered: false,
        choices: [
          {
            id: '4001',
            label: 'Vasco da Gama',
            correct: false,
          },
          {
            id: '4002',
            label: 'Amerigo Vespucci',
            correct: true,
          },
          {
            id: '4003',
            label: 'Christopher Columbus',
            correct: false,
          },
        ],
      },
      {
        id: '5',
        label: 'Ktorý rok začala prvá svetová vojna?',
        answered: false,
        choices: [
          {
            id: '5001',
            label: '1914',
            correct: true,
          },
          {
            id: '5002',
            label: '1918',
            correct: false,
          },
          {
            id: '5003',
            label: '1921',
            correct: false,
          },
        ],
      },
      {
        id: '6',
        label:
          'Ktorá z týchto krajín bola kolóniou Veľkej Británie pred jej nezávislosťou?',
        answered: false,
        choices: [
          {
            id: '6001',
            label: 'India',
            correct: true,
          },
          {
            id: '6002',
            label: 'Čína',
            correct: false,
          },
          {
            id: '6003',
            label: 'Brazília',
            correct: false,
          },
        ],
      },
      {
        id: '7',
        label: 'Ktorá udalosť spôsobila pád Berlínskeho múru v roku 1989?',
        answered: false,
        choices: [
          {
            id: '7001',
            label: 'Prvý krok človeka na Mesiace',
            correct: false,
          },
          {
            id: '7002',
            label: 'Koniec Studenej vojny',
            correct: true,
          },
          {
            id: '7003',
            label: 'Začiatok Vietnamskej vojny',
            correct: false,
          },
        ],
      },
      {
        id: '8',
        label: 'Ktorý vynálezca je považovaný za otca modernej elektrifikácie?',
        answered: false,
        choices: [
          {
            id: '8001',
            label: 'Thomas Edison',
            correct: true,
          },
          {
            id: '8002',
            label: 'Alexander Graham Bell',
            correct: false,
          },
          {
            id: '8003',
            label: 'Nikola Tesla',
            correct: false,
          },
        ],
      },
      {
        id: '9',
        label: 'V ktorom roku bola podpísaná Magna Charta?',
        answered: false,
        choices: [
          {
            id: '9001',
            label: '1215',
            correct: true,
          },
          {
            id: '9002',
            label: '1297',
            correct: false,
          },
          {
            id: '9003',
            label: '1348',
            correct: false,
          },
        ],
      },
      {
        id: '10',
        label:
          'Ktorý slávny objaviteľ objavil moreplavbu do Indie v 15. storočí?',
        answered: false,
        choices: [
          {
            id: '10001',
            label: 'Christopher Columbus',
            correct: false,
          },
          {
            id: '10002',
            label: 'Ferdinand Magellan',
            correct: true,
          },
          {
            id: '10003',
            label: 'Vasco da Gama',
            correct: false,
          },
        ],
      },
    ],
  },
  {
    id: '3',
    label: 'Matematika',
    questions: [
      {
        id: '1',
        label: 'Aký je výsledok sčítania 25 a 13?',
        answered: false,
        choices: [
          {
            id: '1001',
            label: '38',
            correct: true,
          },
          {
            id: '1002',
            label: '37',
            correct: false,
          },
          {
            id: '1003',
            label: '39',
            correct: false,
          },
        ],
      },
      {
        id: '2',
        label: 'Aký je výsledok násobenia 8 a 7?',
        answered: false,
        choices: [
          {
            id: '2001',
            label: '56',
            correct: true,
          },
          {
            id: '2002',
            label: '48',
            correct: false,
          },
          {
            id: '2003',
            label: '64',
            correct: false,
          },
        ],
      },
      {
        id: '3',
        label: 'Koľko je 64 delené 8?',
        answered: false,
        choices: [
          {
            id: '3001',
            label: '8',
            correct: true,
          },
          {
            id: '3002',
            label: '6',
            correct: false,
          },
          {
            id: '3003',
            label: '7',
            correct: false,
          },
        ],
      },
      {
        id: '4',
        label: 'Aký je výsledok odpočítania 49 od 73?',
        answered: false,
        choices: [
          {
            id: '4001',
            label: '24',
            correct: true,
          },
          {
            id: '4002',
            label: '25',
            correct: false,
          },
          {
            id: '4003',
            label: '23',
            correct: false,
          },
        ],
      },
      {
        id: '5',
        label: 'Aký je dvojnásobok 9?',
        answered: false,
        choices: [
          {
            id: '5001',
            label: '18',
            correct: true,
          },
          {
            id: '5002',
            label: '16',
            correct: false,
          },
          {
            id: '5003',
            label: '20',
            correct: false,
          },
        ],
      },
      {
        id: '6',
        label: 'Koľko je 7 krát menšie ako 49?',
        answered: false,
        choices: [
          {
            id: '6001',
            label: '7',
            correct: true,
          },
          {
            id: '6002',
            label: '6',
            correct: false,
          },
          {
            id: '6003',
            label: '8',
            correct: false,
          },
        ],
      },
      {
        id: '7',
        label: 'Aký je výsledok sčítania 36, 27 a 15?',
        answered: false,
        choices: [
          {
            id: '7001',
            label: '78',
            correct: false,
          },
          {
            id: '7002',
            label: '78',
            correct: false,
          },
          {
            id: '7003',
            label: '78',
            correct: true,
          },
        ],
      },
      {
        id: '8',
        label: 'Koľko centimetrov tvorí meter?',
        answered: false,
        choices: [
          {
            id: '8001',
            label: '100',
            correct: true,
          },
          {
            id: '8002',
            label: '1000',
            correct: false,
          },
          {
            id: '8003',
            label: '10',
            correct: false,
          },
        ],
      },
      {
        id: '9',
        label: 'Koľko stoviek je v čísle 500?',
        answered: false,
        choices: [
          {
            id: '9001',
            label: '5',
            correct: true,
          },
          {
            id: '9002',
            label: '50',
            correct: false,
          },
          {
            id: '9003',
            label: '500',
            correct: false,
          },
        ],
      },
      {
        id: '10',
        label: 'Aký je výsledok násobenia 6 a 9?',
        answered: false,
        choices: [
          {
            id: '10001',
            label: '54',
            correct: true,
          },
          {
            id: '10002',
            label: '56',
            correct: false,
          },
          {
            id: '10003',
            label: '60',
            correct: false,
          },
        ],
      },
    ],
  },
];
