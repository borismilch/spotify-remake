import { RiHome5Fill, BiLibrary, BsSearch } from '@/components/icons'
import { ISidebarLink } from '@/models/.'


export const sidebarItems: ISidebarLink[] = [
  {
    Icon: RiHome5Fill,
    text: 'Home',
    to: '/'
  },
  {
    Icon: BsSearch,
    text: 'Search',
    to: '/search'
  },
  {
    Icon: BiLibrary,
    text: 'Librar',
    to: '/library'
  },

]