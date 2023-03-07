import { Component, For } from "solid-js";

export const Sidebar: Component<{ links: { name: string; href: string }[] }> = (
  props
) => {
  return (
    <div class="inset-y-0 left-0 m-2 mx-auto flex w-full flex-col justify-center rounded-lg border-4">
      <For each={props.links}>
        {({ name, href }) => {
          return (
            <a
              href={href}
              class="bg-au-blue m-2 rounded-lg p-3 text-center text-white"
            >
              {name}
            </a>
          );
        }}
      </For>
    </div>
  );
};
