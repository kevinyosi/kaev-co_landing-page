import { IMenuDT } from "@/types/menu-d-t";


const menu_data:IMenuDT[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
    has_dropdown: false,
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
    has_dropdown: false,
  },
  {
    id: 3,
    title: 'Service',
    link: '/service',
    has_dropdown: false,
  },
  {
    id: 4,
    title: 'Portfolio',
    link: '/portfolio',
    has_dropdown: false,
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
    has_dropdown: false,
  }
];

export default menu_data;

// mobile menus 
export const mobile_menu_data:{
  id: number;
  title: string;
  link: string;
  dropdown_menus?: {
      title: string;
      link: string;
  }[];
}[] = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'About',
    link: '/about',
  },
  {
    id: 3,
    title: 'Service',
    link: '/service',
  },
  {
    id: 4,
    title: 'Portfolio',
    link: '/portfolio',
  },
  {
    id: 5,
    title: 'Contact',
    link: '/contact',
  }
]