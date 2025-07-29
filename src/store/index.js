import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        proyects:[
            {
                id: 'thehoster-backoffice',
                colorCore: '#0f172a',
                // colorCore: '#34A98F',
                img: [
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865548/Portafolio/TheHoster_02_oowbzj.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865548/Portafolio/TheHoster_0_lkd4m0.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865548/Portafolio/TheHoster_03_rzckm0.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865548/Portafolio/TheHoster_04_w9rjiy.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865548/Portafolio/TheHoster_05_zc58dt.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865548/Portafolio/TheHoster_06_atkudh.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865549/Portafolio/TheHoster_08_omqrjg.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865548/Portafolio/TheHoster_09_a4xqc9.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865549/Portafolio/TheHoster_10_ftlwfy.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752865549/Portafolio/TheHoster_11_sd1vrx.png'
                ],
                title: 'TheHoster Backoffice',
                type: 'Aplicación web',
                process: '',
                url: 'https://thehoster.io', description: 'Es una plataforma SaaS B2B dirigida a hoteles en España. Su objetivo es ofrecer una solución integral para que los hoteles partners puedan administrar su reputación online en OTAs (como Booking, Google, Expedia, Tripadvisor), gestionar servicios internos, personalizar su propia WebApp y mejorar la experiencia del huésped. Una solución digital todo-en-uno, lista para usar y enfocada en optimizar la operación hotelera desde una sola plataforma.',
                skill: ['Vue.js', 'Tailwind', 'Laravel', 'Mysql', 'Node.js', 'Express.js', 'MongoDB'],
                contributionsDescription: 'Como Full-Stack Developer líder, participé en la arquitectura base del sistema y desarrollé más del 40 % del producto.',
                // contributionsList: ['Construcción de +8 módulos clave (reviews, experiencias, lugares, configuración web, entre otros).', 'Desarrollo y documentación de APIs REST para la gestión de reviews multicanal, integrando scrapers mediante Apify.', 'Implementación de funcionalidades con IA generativa para automatizar procesos en distintos módulos.', 'Definición de estándares técnicos y patrones de desarrollo para asegurar escalabilidad.', 'Integración de la APIs externas para sincronización.'],
                contributionsList: [
                    '🔌 Desarrollo completo de las APIs Services y Reviews, incluyendo integración de scrapers y sincronización con OTAs',
                    '🧩 Diseño e implementación de más de 8 módulos internos (reviews, experiencias, configuración de WebApp, places, servicios del hotel, entre otros.)',
                    '♻️ Creación de componentes reutilizables y escalables para múltiples hoteles',
                    '🤖 Implementación de automatizaciones con IA generativa mediante prompts en diferentes áreas del sistema',
                    '🌐 Integración de APIs externas (Viator, Apify) con lógica de actualización automática',
                    '🧭 Definición de estándares y patrones técnicos para todo el frontend del sistema'
                ]
            },
            {
                id: 'thehoster-webapp',
                colorCore: '#0f172a',
                // colorCore: '#FFD453',
                img: [
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1753295003/Portafolio/Webapp_07.png_v7anbm.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752868444/Portafolio/Webapp_01_pbleo6.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752868444/Portafolio/Webapp_02_ua9hmj.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752868446/Portafolio/Webapp_03_q63036.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752868447/Portafolio/Webapp_04_xh9lo3.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752868448/Portafolio/Webapp_05_c5hi1p.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1752868449/Portafolio/Webapp_06_gcdgpz.png'

                ],
                title: 'TheHoster Weabapp',
                type: 'Aplicación web (PWA)',
                process: '',
                url: 'https://thehoster.io', description: 'La WebApp de TheHoster es una aplicación web white-label diseñada para que cada hotel pueda ofrecer a sus huéspedes una experiencia digital personalizada desde cualquier dispositivo. La WebApp permite visualizar servicios, experiencias turísticas, productos, promociones y facilita la interacción con el hotel durante la estancia. Todo esto se adapta a la identidad visual del hotel y se gestiona fácilmente desde el backoffice.',
                skill: ['Vue.js', 'Tailwind', 'Laravel', 'Mysql', 'Node.js', 'Express.js', 'MongoDB'],
                contributions: '',
                contributionsList: [
                    '🔧 Desarrollo completo de las APIs Services y Reviews, incluyendo endpoints, documentación y conexión con scrapers (Apify) y APIs externas (Viator)',
                    '🔗 Integración de las 3 APIs en la WebApp, unificando datos en tiempo real',
                    '🖼️ Implementación de vistas dinámicas para experiencias, servicios, lugares y promociones',
                    '🎨 Creación de un sistema de personalización (estilos, colores, branding) configurable desde el Backoffice',
                    '🚀 Optimización de rendimiento para dispositivos móviles con lazy loading y precarga inteligente',
                    '🌍 Configuración multilenguaje dinámico en función de la preferencia del huésped o idioma del navegador'
                ]
            },
            {
                id: 'hicitty',
                colorCore: '#0f172a',
                // colorCore: '#34A98F',
                img: [
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1671293888/Portafolio/hicitty_2_udyctq.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1671296002/Portafolio/hicitty_3_ll4ici.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1671296001/Portafolio/hicitty_4_tqptyh.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1671296265/Portafolio/hicitty_5_uiwijq.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1671296407/Portafolio/hicitty_6_xt9b0k.png'
                ],
                title: 'HiCitty',
                type: 'Aplicación web',
                process: '',
                url: 'https://hicitty.com',
                description: 'Esta plataforma va dirigida al sector turistico en España, donde se le ofrece a los turistas la posibilidad planificar las mejores experiencias mediante la reserva de actividades y servicios más demandados que ofrecen los distintos proveedores afiliados. Posee un panel administrativo (Personalizado para cada rol) que permite getinar toda plataforma.',
                skill: ['Vue.js', 'Tailwind', 'Laravel', 'Mysql'],
                contributions: '',
                contributionsList: [
                    '🧩 Participé en la construcción del 50 % de la plataforma, incluyendo frontend y backend', 
                    '💻 Desarrollé más de 5 módulos clave (reservas, catálogo de experiencias, proveedores, integración con motores externos)',
                    '🔌 Integré APIs de terceros como Turitop, Viator y Córdoba Embrujada, adaptando la lógica a sus requerimientos técnicos y flujos',
                    '🎯 Implementé interfaces modernas y responsivas basadas en diseños de Figma',
                    '⚙️ Mejoré en un 30 % el rendimiento de varios servicios críticos mediante refactorización y optimización de consultas.',
                    '🔐 Colaboré en el sistema de roles y permisos, adaptando la experiencia del panel según el tipo de usuario'
                ]
            },
            {
                id: 'hca',
                colorCore: '#0f172a',
                // colorCore: '#BF3434',
                img: [
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750017/Portafolio/hca-1_dmecsh.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750011/Portafolio/hca-2_fc4suj.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654873347/Portafolio/hca-3_nw6bks.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654873348/Portafolio/hca-4_a9dpud.png'
                ],
                title: 'Panel HCA',
                type: 'Aplicación web',
                process: '',
                url: 'https://app.hcaguanare.net',
                description: 'HCA es una aplicación web desarrollada para optimizar la gestión operativa de un taller automotriz. Permite administrar órdenes de servicio, llevar control de inventario, ventas, nómina del personal, y visualizar resúmenes estadísticos por módulo. El sistema está diseñado para digitalizar procesos clave del taller, mejorar el seguimiento de servicios y facilitar la toma de decisiones con base en datos.',
                skill: ['Quasar', 'Vuejs', 'Laravel', 'Mysql'],
                contributions: '',
                contributionsList: [
                    '🧩 Desarrollé la aplicación completa desde cero, cubriendo tanto el backend como el frontend',
                    '⚙️ Implementé la gestión de órdenes de servicio con seguimiento por estado y detalle de operaciones',
                    '🛒 Construí el módulo de ventas e inventario, con alertas de stock, categorías y control de movimientos',
                    '👥 Desarrollé el módulo de nómina y control de empleados con lógica personalizada según condiciones laborales',
                    '📊 Añadí reportes y dashboards con métricas clave por módulo (servicios, ventas, personal, etc.)',
                    '🔐 Diseñé el sistema de roles y permisos para usuarios internos del taller'
                ],
            },
            {
                id: 'kathani',
                colorCore: '#0f172a',
                // colorCore: '#77B9F2',
                img: [
                'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747426/Portafolio/khatani-1_jngaxp.png',
                'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747424/Portafolio/ka-thani-4_emufx8.png',
                'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747423/Portafolio/ka-thani-2_qjwsnh.png',
                'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747423/Portafolio/ka-thani-3_tig2hu.png',
                'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747419/Portafolio/ka-thani-7_xodueq.png',
                'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747422/Portafolio/ka-thani-6_fdnnda.png',
                'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747419/Portafolio/ka-thani-9_b8ed0a.png'
                ],
                title: 'KA-THANI',
                type: 'Aplicación web',
                process: '',
                url: '',
                description: 'KA-THANI es una aplicación web desarrollada para centros de salud en Ecuador. Su propósito es facilitar la gestión de fichas familiares, obstétricas y neonatales de pacientes afiliados, permitiendo al personal médico realizar seguimiento y control clínico de manera estructurada. Además, cuenta con un módulo para administración de datos básicos del centro y generación de reportes estadísticos exportables en PDF.',
                skill: ['Vue.js', 'Vuetify', 'Laravel', 'Mysql'],
                contributions: '',
                contributionsList: [
                    '🧩 Diseñé y desarrollé la aplicación completa, incluyendo modelado de datos, backend y frontend',
                    '👨‍👩‍👧‍👦 Implementé la gestión de fichas familiares, con estructura por paciente y seguimiento cronológico',
                    '🤰 Desarrollé los módulos de obstetricia y neonatología con formularios clínicos personalizados',
                    '🗂️ Construí el módulo de datos básicos para la administración de áreas, personal, categorías y configuraciones',
                    '📊 Implementé reportes estadísticos y estructurados exportables en PDF para facilitar auditorías y planificación',
                    '🔐 Apliqué un sistema de autenticación y permisos para garantizar privacidad y trazabilidad de los datos clínicos'
                ],
            },
            {
                id: 'sigo',
                colorCore: '#0f172a',
                img: [
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750007/Portafolio/sigo-8_bddanv.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749781/Portafolio/sigo-1_idxxqd.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749780/Portafolio/sigo-2_nowa0e.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749781/Portafolio/sigo-3_eiawtx.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749778/Portafolio/sigo-4_mk0zh3.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749780/Portafolio/sigo-5_p7p1xi.png',
                    'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750004/Portafolio/sigo-6_ngev34.png'
                ],
                title: 'SIGO',
                type: 'Aplicación web',
                process: '',
                url: '',
                description: 'Sigo es una aplicación web encargada gestionar pedidos, compras, seguimiento de ventas y control de inventario, además de esto, permite administrar usuarios, roles, productos y categorías. Los clientes pueden ingresar y ver el catálago disponible y realizar pedidos mediante un carrito de compra.',
                skill: ['Vue.js', 'Vuetify', 'Node.js', 'Express.js', 'Mysql'],
                contributions: ''
            },
        ],
    },
    getters: {
        filterProyect: (state) => (id) => {
            const proyect = state.proyects.find(item => item.id == id)
            return proyect
        },
    },
})