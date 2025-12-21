import Facebook from '../assets/svg/facebook.svg'
import Instagram from '../assets/svg/instagram.svg'
import WhatsApp from '../assets/svg/whatsApp.svg'
import Youtube from '../assets/svg/youtube.svg'

export enum SOCIAL_LINKS {
    YOUTUBE = 'https://github.com/Ashish8689',
    INSTAGRAM = 'https://www.instagram.com/ashishgupta9394/',
    WHATSAPP = 'https://wa.me/+918689868867',
    FACEBOOK = 'https://www.facebook.com/profile.php?id=100004838256907',
}

export const SOCIAL_LINK_OPTIONS = [
    {
        icon: Youtube,
        link: SOCIAL_LINKS.YOUTUBE,
    },
    {
        icon: Instagram,
        link: SOCIAL_LINKS.INSTAGRAM,
    },
    {
        icon: WhatsApp,
        link: SOCIAL_LINKS.WHATSAPP,
    },
    {
        icon: Facebook,
        link: SOCIAL_LINKS.FACEBOOK,
    },
]

export const REGEX_SCROLL = /.*\#/
