import { Accessor, createEffect, on } from "solid-js";
import { persistentAtom } from "@nanostores/persistent";
import { useStore } from "@nanostores/solid";
import type { WritableAtom } from "nanostores";

const themeAtom = persistentAtom<"dark" | "light">("theme", "light");

function setTheme(theme: Accessor<"dark" | "light">) {
  if (theme() === "light") themeAtom.set("dark");
  else themeAtom.set("light");
}

export const ThemeToggle = () => {
  const theme = useStore<WritableAtom<"dark" | "light">, "dark" | "light">(
    themeAtom
  );

  createEffect(
    on(
      theme,
      () => {
        const rootClasses = document.documentElement.classList;

        if (theme() === "light") rootClasses.remove("dark");
        else rootClasses.add("dark");
      },
      { defer: true }
    )
  );
  return (
    <button
      type="button"
      class="flex items-center rounded-md p-1"
      onClick={() => {
        setTheme(theme);
      }}
    >
      Toggle Theme
    </button>
  );
};
