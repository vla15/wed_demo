import Home from '../components/Home/home.jsx';
import Wedding from '../components/Wedding/wedding';
import Story from '../components/Story/story';
import Gallery from '../components/Gallery/gallery';

const routes = [
  { path: "/home", title: 'Home', Component: Home },
  { path: "/story", title: 'Our Story', Component: Story },
  { path: "/gallery", title: 'Gallery', Component: Gallery },
  { path: "/wedding", title: 'The Wedding', Component: Wedding }
]

export { routes };