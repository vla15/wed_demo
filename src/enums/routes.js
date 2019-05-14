import Home from '../components/Home/home';
import Wedding from '../components/Wedding/wedding';
import Story from '../components/Story/story';
import GalleryPage from '../components/Gallery/gallery';
import Registry from '../components/Registry/registry';
import RSVPSearch from '../components/Rsvp/rsvp-search';
import FAQ from '../components/Faq/faq';

const Routes = [
  { path: '/home', title: 'Home', Component: Home },
  { path: '/wedding', title: 'Wedding Party', Component: Wedding },
  { path: '/schedule', title: 'Schedule', Component: Wedding },
  { path: '/story', title: 'Our Story', Component: Story },
  { path: '/rsvp', title: 'RSVP', Component: RSVPSearch },
  { path: '/registry', title: 'Registry', Component: Registry },
  { path: '/faq', title: 'FAQ', Component: FAQ },
  { path: '/gallery', title: 'Photos', Component: GalleryPage },
];

export { Routes };
