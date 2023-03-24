import { Component, For } from "solid-js";

export const Nav: Component<{ links: { name: string; href: string }[] }> = (
  props
) => (
  <nav class="bg-white px-4 py-2 shadow-sm">
    <div class="mx-auto flex max-w-screen-xl items-center justify-between">
      <a href="/" class="text-lg font-semibold text-gray-700">
        Club Name
      </a>
      <ul class="flex space-x-4">
        <For each={props.links}>
          {({ href, name }) => (
            <li>
              <a href={href} class="text-gray-700 hover:text-gray-800">
                {name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </div>
  </nav>
);
