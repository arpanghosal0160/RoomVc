import { routeModule } from "next/dist/build/templates/app-page";

export const sidebarLinks = [
    {
        label: 'Home',
        route: '/',
        imgUrl: '/icons/house-fill.svg',     
    },
    {
        label: 'Upcoming',
        route: '/upcoming',
        imgUrl: '/icons/upcoming.svg',     
    },
    {
        label: 'Previous',
        route: '/previous',
        imgUrl: '/icons/previous.svg',     
    },
    {
        label: 'Recordings',
        route: '/recordings',
        imgUrl: '/icons/Video.svg',     
    },
    {
        label: 'Personal Room',
        route: '/personal-room',
        imgUrl: '/icons/add-personal.svg',     
    },
    {
        label: 'About',
        route: '/about',
        imgUrl: '/icons/info-circle-fill.svg',     
    },

]

export const avatarImages = [
    '/images/avatar-1.jpeg',
    '/images/avatar-2.jpeg',
    

]