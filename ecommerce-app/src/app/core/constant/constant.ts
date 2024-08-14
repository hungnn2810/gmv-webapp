import { Extension } from '../components/layouts/header/header.component';

export const LANGUAGES = [
  {
    code: 'en',
    name: 'English',
    flag: '../../../assets/images/header/flag-uk.svg',
  },
  {
    code: 'span',
    name: 'Spanish',
    flag: '../../../assets/images/header/flag-spanish.svg',
  },
  {
    code: 'portuga',
    name: 'Portuguese',
    flag: '../../../assets/images/header/flag-portugal.svg',
  },
  {
    code: 'fr',
    name: 'Frenche',
    flag: '../../../assets/images/header/flag-france.svg',
  },
];

export const EXTENSIONS: Array<Extension> = [
  {
    name: 'Clip-In Hair Extensions',
    type: 'default',
    subMenu: [
      {
        name: 'Clip-In Hair Extensions',
        route: '/clip-in-hair-extensions',
        items: [],
      },
      {
        name: 'Ponytail Hair Extensions',
        route: '/ponytail-hair-extensions',
        items: [
          {
            name: 'Wrap Ponytail',
            route: '/wrap-ponytail',
          },
          {
            name: 'Drawstring Ponytail',
            route: '/drawstring-ponytail',
          },
        ],
      },
    ],
  },
  {
    name: 'Tape-In Hair Extensions',
    type: 'default',
    subMenu: [
      {
        name: 'Tape-In Hair Extensions',
        route: '/tape-in-hair-extensions',
        items: [
          {
            name: 'Normal Ponytail',
            route: '/normal-ponytail',
          },
          {
            name: 'Invisible Ponytail',
            route: '/invisible-ponytail',
          },
          {
            name: 'Long Ponytail',
            route: '/long-ponytail',
          },
          {
            name: 'Mini Ponytail',
            route: '/mini-ponytail',
          },
          {
            name: 'Tape 1cm',
            route: '/tape-1cm',
          },
          {
            name: 'Tape 8cm',
            route: '/tape-8cm',
          },
        ],
      },
    ],
  },

  // ACCESSORIES
  // {
  //   name: 'Accessories',
  //   type: 'accessory',
  //   subMenu: [
  //     {
  //       name: 'Accessories',
  //       route: '/',
  //       items: [
  //         {
  //           name: 'Custom tags (Contact us)',
  //           route: '/normal-ponytail',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Keratin',
  //           route: '/invisible-ponytail',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Remover',
  //           route: '/long-ponytail',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Beads',
  //           route: '/mini-ponytail',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Clips',
  //           route: '/tape-1cm',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Cap Wigs',
  //           route: '/tape-8cm',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Texture Ring',
  //           route: '/tape-8cm',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Tape Roll',
  //           route: '/tape-8cm',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //         {
  //           name: 'Color Ring',
  //           route: '/tape-8cm',
  //           src: '../../../assets/images/header/free-shipping.svg',
  //         },
  //       ],
  //     },
  //   ],
  // },
];
