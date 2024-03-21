export default {
  title: "BIGTRONICA",
  description: "An awesome docs template built by me",
  themeConfig: {
    logo: "/Logo.svg",
    siteTitle: "BigDocs",
    // Navbar Link
    nav: [
      { text: "Documentación", link: "/guide" },
      { text: "Tienda Online", link: "https://www.bigtronica.com/" },
      {
        // Dropdown Menu
        text: "Familia BigBot",
        items: [
          { text: "Bigbot Magic", link: "/guide" },
          { text: "Bigbot Oruga", link: "/about" },
          { text: "Bigbot 4WD", link: "/about" },
        ],
      },
    ],
    //Search
    search: {
      provider: 'local'
    },
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/BigtronicaSAS/Curiosity" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Primeros Pasos",
        collapsible: true,
        items: [
          { text: "Instalar Arduino", link: "/instalacion-arduino" },
          { text: "Instalar Libreria", link: "/instalar-bigbot" },
        ],
      },
      {
        text: "Como Programar",
        collapsible: false,
        items: [
          { text: "Crear Bot", link: "/crear-bot.md" },
          
        ],
      },
      {
        text: "Avanzado",
        collapsible: true,
        items: [
          { text: "@Bot Métodos", link: "/metodos-bot.md" },
          { text: "@Bot Métodos", link: "/metodos-bot.md" },
        ],
      },
    ],
    
    outline: {
      label: 'Contenido', // Cambia este texto según tus preferencias
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Adocs",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
