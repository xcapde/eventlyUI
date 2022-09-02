export const contents = {
    mobile: {},
    desktop: {
        main: {
            home: {
                icon: <i className="fa-solid fa-house"></i>,
                content: 'Home',
                link: '/home',
            },
            events: {
                icon: <i className="fa-solid fa-calendar"></i>,
                content: 'Events',
                link: '/events',
                subcontent: {
                    myEvents: {
                        icon: <i className="fa-solid fa-calendar"></i>,
                        content: 'My Events',
                        link: '/user/id/events',
                    },
                    assitedEvents: {
                        icon: <i className="fa-solid fa-calendar"></i>,
                        content: 'Assited to',
                        link: '/events',
                    }
                }
            },
            upload: {
                icon: <i className="fa-solid fa-square-plus"></i>,
                content: 'Upload',
                link: '/upload'
            },
        },
        sec: {
            settings: {
                icon: <i className="fa-solid fa-gear"></i>,
                content: 'Settings',
                link: '/settings'
            },
            help: {
                icon: <i className="fa-solid fa-circle-info"></i>,
                content: 'Help',
                link: '/help'
            }
        }
    }
}