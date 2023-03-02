import tour1 from '../assets/images/tour-1.jpeg'
import tour2 from '../assets/images/tour-2.jpeg'
import tour3 from '../assets/images/tour-3.jpeg'
import tour4 from '../assets/images/tour-4.jpeg'

export const pageLinks = [
 {id: 1, href: '#home', text: 'Home'},
 {id: 2, href: '#about', text: 'About'},
 {id: 3, href: '#services', text: 'Services'},
 {id: 4, href: '#tours', text: 'Tours'},
]

export const socialLinks = [
 {id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook'},
 {id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter'},
 {id: 3, href: 'https://www.squarespace.com', icon: 'fab fa-squarespace'},
]

export const services = [
 {id: 1, title: 'Saving Money', icon: 'fas fa-wallet fa-fw', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},

 {id: 2, title: 'Endless Hiking', icon: 'fas fa-tree fa-fw', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},

 {id: 3, title: 'Amazing Comfort', icon: 'fas fa-socks fa-fw', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.'},
]

export const tours = [
 {
  id: 1,
  date:  'August 26th, 2020',
  image: tour1,
  title: 'Tibet Adventure',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  destination: 'China',
  days: '6 days',
  cost: 'from $2100'
 },

 {
  id: 2,
  date:  'October 1st, 2020',
  image: tour2,
  title: 'Best of Java',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  destination: 'Indonesia',
  days:'11 days',
  cost: 'from $1400'
 },

 {
  id: 3,
  date:  'September 15th, 2020',
  image: tour3,
  title: 'Explore Hong Kong',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  destination: 'HongKong',
  days:'8 days',
  cost: 'from $5000'
 },

 {
  id: 3,
  date:  'December 5th, 2020',
  image: tour4,
  title: 'Kenya Highlights',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
  destination: 'Kenya',
  days:'20 days',
  cost: 'from $3300'
 },
]