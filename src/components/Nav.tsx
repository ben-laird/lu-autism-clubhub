import { Component, For } from "solid-js";

export const Nav: Component<{ links: { name: string; href: string }[] }> = (
  props
) => {
  return (
    <div class="m-2 mx-auto flex h-fit w-2/3 flex-row">
      <For each={props.links}>
        {({ name, href }) => {
          return (
            <a
              href={href}
              class="bg-au-blue m-2 w-full rounded-lg bg-au-blue-300 p-3 text-center text-gray-100"
            >
              {name}
            </a>
          );
        }}
      </For>
    </div>
  );
};
