import { component$, useStyles$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
// import { QwikLogo } from '../icons/qwik';
import styles from './header.css?inline';

export default component$(() => {
  useStyles$(styles);

  const { pathname } = useLocation();

  return (
    <header>
      <a class="logo" href="/">
        {/* <QwikLogo /> */}
        Home
      </a>
      <nav>
        <a href="/about-me/" class={{ active: pathname.startsWith('/about-me/') }}>
          About Me
        </a>
        <a href="/projects/" class={{ active: pathname.startsWith('/projects/') }}>
          Projects
        </a>
      </nav>
    </header>
  );
});
