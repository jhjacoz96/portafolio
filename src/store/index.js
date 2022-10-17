import Vuex from 'vuex'

export default new Vuex.Store({
    state: {
        proyects:[
            {id: 2, img: ['https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750007/Portafolio/sigo-8_bddanv.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749781/Portafolio/sigo-1_idxxqd.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749780/Portafolio/sigo-2_nowa0e.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749781/Portafolio/sigo-3_eiawtx.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749778/Portafolio/sigo-4_mk0zh3.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654749780/Portafolio/sigo-5_p7p1xi.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750004/Portafolio/sigo-6_ngev34.png'], title: 'SIGO', type: 'Aplicación web', process: '', url: '', description: 'Sigo es una aplicación web encargada gestionar pedidos, compras, seguimiento de ventas y control de inventario, además de esto, permite administrar usuarios, roles, productos y categorías. Los clientes pueden ingresar y ver el catálago disponible y realizar pedidos mediante un carrito de compra.', skill: ['Vuejs', 'Vuetify', 'Nodejs', 'Express', 'Mysql'], contributions: ''},
            {id: 1, img: ['https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747426/Portafolio/khatani-1_jngaxp.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747424/Portafolio/ka-thani-4_emufx8.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747423/Portafolio/ka-thani-2_qjwsnh.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747423/Portafolio/ka-thani-3_tig2hu.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747419/Portafolio/ka-thani-7_xodueq.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747422/Portafolio/ka-thani-6_fdnnda.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654747419/Portafolio/ka-thani-9_b8ed0a.png'], title: 'KA-THANI', type: 'Aplicación web', process: '', url: '', description: 'Kathani es una aplicación web dirigida al sector salud del Ecuador. Esta solución informatica permite getionar las fichas familiares, obstetrias y neonatologías de los pacientes afiliados a un centro de salud, donde los trabajadores de salud podrán realizar un control y seguimiento de los pacientes mediantes las fichas registradas. Además de esto,posee un módulo de datos basicos donde se podrás administrar estos. Posee modulos de reportes estadisticos y estructurdos en formatos pdf.', skill: ['Angular', 'Rxjs', 'Material Design', 'Laravel', 'Mysql'], contributions: ''},
            {id: 3, img: ['https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750017/Portafolio/hca-1_dmecsh.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654750011/Portafolio/hca-2_fc4suj.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654873347/Portafolio/hca-3_nw6bks.png', 'https://res.cloudinary.com/ddxgl2pr9/image/upload/v1654873348/Portafolio/hca-4_a9dpud.png'], title: 'PANEL HCA', type: 'Aplicación web', process: '', url: 'https://app.hcaguanare.net', description: 'Esta aplicación web permite al taller automotriz HCA la posibilidad de gestionar las ordenes de servicios, tener un control de estas y darle seguimiento. Además de esto, permite gestionar el inventario,  ventas de productos y nominas de los empleados. Ofrece un resumén estadístico de los distintos módulos que conforman la aplicación', skill: ['Quasar', 'Vuejs', 'Laravel', 'Mysql'], contributions: ''},
        ],
    },
    getters: {
        filterProyect: (state) => (id) => {
            const proyect = state.proyects.find(item => item.id == id)
            return proyect
        },
    },
})