export default {
    title: "BIGTRONICA",
    description: "Pagina Oficial BigBot",
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
                    { text: "Bigbot Magic", link: "/magic/index.md" },
                    { text: "Bigbot 4WD", link: "/magic-4WD/index.md" },
                    { text: "Bigbot Soccer", link: "/soccer/index.md" },
                ],
            },
        ],
        //Search
        search: {
            provider: 'local'
        },
        // Social Icons
        socialLinks: [
            { icon: "github", link: "https://github.com/BigtronicaSAS/BigBot" },
        ],
        // Sidebar
        sidebar: {
    
            '/': [
                {
                    text: "Primeros Pasos",
                    collapsible: true,
                    items: [
                        { text: "Instalar Arduino", link: "/instalacion-arduino.md" },
                        { text: "Instalar Libreria", link: "/instalar-bigbot.md" }
                    ],
                },
                {
                    text: "Documentacion Oficial",
                    collapsible: true,
                    items: [
                        { text: "Bigbot Magic", link: "/magic/index.md" },
                        { text: "Bigbot 4WD", link: "/magic-4WD/index.md" },
                        { text: "Bigbot Soccer", link: "/soccer/index.md" },
                    ],
                },
                {
                      text: "Avanzado",
                      collapsible: true,
                      items: [
                        { text: "@Bot Métodos", link: "/metodos-bot.md" },
                      ],
                    },

            ],

            // SideBar product Magic 2WD
            '/magic/': [
                {
                    text: "Guia de Ensamble",
                    items: [
                        { text: "Ensamble", link: "/magic/ensamble.md" },
                    ]
                },

                {
                    text: "Como Programar",
                    collapsible: true,
                    items: [
                        { text: "Crear Bot", link: "/magic/bot.md" },
                        { text: "Seguidor de Linea", link: "/magic/seguidor.md" },
                        { text: "Evasor de Obstaculos", link: "/magic/evasor.md" },
                        { text: "Rutina Magic", link: "/magic/rutina.md" },
                        { text: "Control PS2", link: "/magic/PS2.md" },
                    ],
                },
                {
                    text: "Avanzado",
                    items: [
                        { text: "Dirección Incorrecta", link: "/magic/config.md" }  ],
                }

            ],

            // Sidebar Product Magic 4WD
            '/magic-4WD/': [
                {
                    text: "Guia de Ensamble",
                    items: [
                        { text: "Ensamble", link: "/magic-4WD/ensamble.md" },
                    ]
                },

                {
                    text: "Como Programar",
                    collapsible: true,
                    items: [
                        { text: "Crear Bot", link: "/magic-4WD/bot.md" },
                        { text: "Seguidor de Linea", link: "/magic-4WD/seguidor.md" },
                        { text: "Evasor de Obstaculos", link: "/magic-4WD/evasor.md" },
                        { text: "Rutina Magic", link: "/magic-4WD/rutina.md" },
                        { text: "Control PS2", link: "/magic-4WD/PS2.md" },

                    ],
                },
                {
                    text: "Avanzado",
                    items: [
                        { text: "Dirección Incorrecta", link: "/magic-4WD/config.md" }  ],
                }

            ],

            //Sidebar Product Soccer
            '/soccer/': [
                {
                    text: "Guia de Ensamble",
                    items: [
                        { text: "Ensamble", link: "/soccer/ensamble.md" },
                    ]
                },

                {
                    text: "Como Programar",
                    collapsible: true,
                    items: [
                        { text: "Crear Bot", link: "/soccer/bot.md" },
                        { text: "Control PS2", link: "/soccer/PS2.md" },
                    ],
                },
               {
                    text: "Avanzado",
                    items: [
                        { text: "Dirección Incorrecta", link: "/soccer/config.md" }  ],
                }
            ],

        },
        outline: {
            label: 'Contenido', // Cambia este texto según tus preferencias
        },
        footer: {
            message: "🤖🎮 Diseñado con amor por Bigtronica❤",
            copyright: "Bigtronica Since 2015",
        },
        markdown: {
            theme: "material-palenight",
            lineNumbers: true,
        },
    },
};


