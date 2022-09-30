import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './footer.css?inline';

export default component$(() => {
  useStyles$(styles);

  return (
    <footer>
      <ul>
        <li>
          <a href="/about-me/">About Me</a>
        </li>
        <li>
          <a href="/projects/">Projects</a>
        </li>
      </ul>
    </footer>
  );
});
