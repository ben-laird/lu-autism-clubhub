import { children, Component, JSX } from "solid-js";

export const Top: Component<{
  children: JSX.Element;
  title: string;
  subtitle: string;
}> = (props) => {
  const child = children(() => props.children);
  return (
    <div>
      <h1
        class="prose m-4 rounded-3xl border-4 border-au-brown-200 bg-au-blue-400 p-4 text-center text-5xl text-gray-100
      dark:border-au-brown-300 dark:bg-au-blue-300 dark:text-gray-200"
      >
        {props.title}
      </h1>
      <h2
        class="prose m-1 mx-auto w-1/2 rounded-xl bg-au-brown-200 p-1 text-center text-3xl text-gray-100
      dark:bg-au-brown-300 dark:text-gray-200"
      >
        {props.subtitle}
      </h2>
      {child()}
    </div>
  );
};
