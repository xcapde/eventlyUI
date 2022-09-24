import { AuthService } from "../../services/AuthService";

export const contents = {
    main: {
        home: {
            icon: <i className="fa-solid fa-house"></i>,
            content: 'Home',
            link: '/home',
        },
        events: {
            icon: <i className="fa-solid fa-calendar"></i>,
            content: 'Events',
            subcontent: {
                myEvents: {
                    icon: <i className="fa-solid fa-calendar"></i>,
                    content: 'Published events',
                    link: '/events/published',
                },
                assitedEvents: {
                    icon: <i className="fa-solid fa-calendar"></i>,
                    content: 'Joined events',
                    link: '/events/joined',
                }
            }
        },
        upload: {
            icon: <i className="fa-solid fa-square-plus"></i>,
            content: 'Upload',
            link: '/upload'
        },
        search: {
            icon: <i className="fa-solid fa-magnifying-glass"></i>,
            content: 'Search',
            link: '/search'
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
    },
    profile: {
        profile: {
            content: 'Profile',
            subcontent: {
                prof: {
                    icon: <i className="fa-solid fa-frog"></i>,
                    content: 'Profile',
                    link: '/profile'
                },
                logout: {
                    icon: <i className="fa-solid fa-right-from-bracket"></i>,
                    content: 'Log out',
                    callback: ()=>AuthService.logOut(true)
                }
            }
        }
    }
}