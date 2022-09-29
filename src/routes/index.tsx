import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <h1>Welcome to my home page</h1>

      <ul>
        <li>This page is currently under construction 🚧.</li>
        <li>
          <span>It is being built using </span>
          <a href="https://qwik.builder.io/qwikcity/overview/" target={"_blank"}>Qwik City</a>
          <span> the meta-framework for Qwik</span>
        </li>
      </ul>
    </>
  );
});

export const head: DocumentHead = {
  title: 'My Server',
};
