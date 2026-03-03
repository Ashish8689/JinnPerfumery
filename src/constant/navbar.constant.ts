export interface MenuItem {
    label: string
    href?: string
    submenu?: MenuItem[]
}

export const NAVBAR_MENU_ITEMS: MenuItem[] = [
    { label: 'Male', href: '/male' },
    { label: 'Female', href: '/female' },
    { label: 'Unisex', href: '/unisex' },
    { label: 'Combos', href: '/combos' },
    // { label: 'Our Story', href: '/our-story' },
    { label: 'Contact Us', href: '/contact' },
]
