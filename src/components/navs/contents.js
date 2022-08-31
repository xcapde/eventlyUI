export const contents = {
    mobile: {},
    desktop: {
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
                top: '0%',
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
        settings: {
            icon: <i className="fa-solid fa-gear"></i>,
            content: 'Settings',
            link: '/settings'
        }
    }
}