import Home from '../components/Home/home';
import Wedding from '../components/Wedding/wedding';
import Story from '../components/Story/story';
import GalleryPage from '../components/Gallery/gallery';
import Registry from '../components/Registry/registry';
import RSVPSearch from '../components/Rsvp/rsvp-search';
import FAQ from '../components/Faq/faq';
import Travel from '../components/Travel/travel';
import Schedule from '../components/Schedule/schedule';

const Routes = [
  { path: '/', title: 'Home', Component: Home },
  { path: '/schedule', title: 'Schedule', Component: Schedule },
  { path: '/travel', title: 'Travel', Component: Travel },
  { path: '/story', title: 'Our Story', Component: Story },
  { path: '/wedding', title: 'Wedding Party', Component: Wedding },
  { path: '/gallery', title: 'Moments', Component: GalleryPage },
  { path: '/registry', title: 'Registry', Component: Registry },
  { path: '/qa', title: 'Q&A', Component: FAQ },
  { path: '/rsvp', title: 'RSVP', Component: RSVPSearch },
];

export default Routes;
