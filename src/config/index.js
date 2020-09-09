module.exports = {
  siteTitle: 'Luis Villalobos | Desarrollador de software',
  siteDescription:
    'Luis Villalobos is a software engineer based in Tuxtla Gutiérrez, Chiapas specializing in building android apps and rarely websites.',
  siteKeywords:
    'Luis Enrique, Luis Villalobos, luisenricke, software engineer, android engineer, android developer, android, java, kotlin',
  siteUrl: 'http://localhost:8000/',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: '',
  name: 'Luis Villalobos',
  location: 'Oaxaca de Juárez, Oaxaca',
  email: 'luisvillalobosmelendez@outlook.com',
  github: 'https://github.com/luisenricke',
  twitterHandle: '@LuisEnricKe',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/luisenricke',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/luisvillalobosmelendez/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/luisenricke/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/LuisEnricKe',
    },
  ],

  navLinks: [
    {
      name: 'Acerca de',
      url: '/#about',
    },
    {
      name: 'Experiencia',
      url: '/#jobs',
    },
    {
      name: 'Proyectos',
      url: '/#projects',
    },
    {
      name: 'Contacto',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
