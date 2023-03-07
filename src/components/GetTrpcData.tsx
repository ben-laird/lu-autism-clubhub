import { Component, createResource, createSignal, Show } from "solid-js";
import { trpcClientSide as trpc } from "~/trpc/client";

export const GetTrpcData: Component = () => {
  const [inputName, setInputName] = createSignal("");

  const [name, setName] = createSignal<string>();
  const [greeting] = createResource(name, async (name) => {
    return trpc.greet.query(name);
  });

  const handleCall = () => {
    setName(inputName());
  };

  return (
    <div class="prose prose-pink border-4 bg-slate-500">
      <form
        class="bg-slate-500"
        onsubmit={(e) => {
          e.preventDefault();
          handleCall();
        }}
      >
        <input
          type="text"
          onChange={({ currentTarget: target }) => {
            setInputName(target.value);
          }}
        />
        <button class="m-2 rounded-md bg-slate-600 p-1" onClick={handleCall}>
          Greet
        </button>
      </form>

      <Show
        when={greeting()}
        fallback={<p class="prose">Submit the form to be greeted!</p>}
        keyed
      >
        {(g) => <p class="prose">{g}</p>}
      </Show>
    </div>
  );
};
