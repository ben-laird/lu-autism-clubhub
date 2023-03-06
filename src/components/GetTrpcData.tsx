import { Component, createResource, createSignal, Show } from "solid-js";
import { trpcClientSide as trpc } from "~/trpc/client";

const GetTrpcData: Component = () => {
  const [inputName, setInputName] = createSignal("");

  const [name, setName] = createSignal<string>();
  const [greeting] = createResource(name, async (name) => {
    return trpc.greet.query(name);
  });

  const handleCall = () => {
    setName(inputName());
  };

  return (
    <div>
      <form
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
        <button onClick={handleCall}>Greet</button>
      </form>

      <Show
        when={greeting()}
        fallback={<p>Submit the form to be greeted!</p>}
        keyed
      >
        {(g) => <p>{g}</p>}
      </Show>
    </div>
  );
};

export default GetTrpcData;
