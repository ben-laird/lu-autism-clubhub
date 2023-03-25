import { Component, createSignal, For, splitProps } from "solid-js";
import { createStore } from "solid-js/store";
import { Show } from "solid-js/web";
import { z } from "zod";

const schema = z.object({
  username: z.string().email(),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "The password must have a minimum of 8 characters, including one letter, one number, and one special character"
    ),
});

type FormValues = z.infer<typeof schema>;

const RenderIssues: Component<{ issues: z.ZodIssue[] }> = ({ issues }) => {
  return (
    <div class="m-1 justify-center rounded-md border-2 border-red-500 p-1">
      <For each={issues}>
        {({ message, path }) => (
          <div class="mt-1 text-sm text-red-500">
            * {path.reduce((_, curr) => `> ${curr}`)}: {message}
          </div>
        )}
      </For>
    </div>
  );
};

export const Login: Component = () => {
  const [store, setStore] = createStore<FormValues>({
    username: "",
    password: "",
  });

  const [issues, setIssues] = createSignal<z.ZodIssue[]>();

  return (
    <div class="flex min-h-screen items-center justify-center bg-gray-100">
      <div class="w-full max-w-md py-8 px-4">
        <h2 class="mb-4 text-3xl font-extrabold text-gray-800">
          Log in to your account
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();

            const results = schema.safeParse(store);
            if (!results.success) setIssues(results.error.issues);
            else setIssues(undefined);
          }}
          class="space-y-6"
        >
          <div>
            <label for="username" class="mb-2 block font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={store.username}
              onInput={({ currentTarget: t }) => {
                setStore(["username"], t.value);
              }}
              class={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                issues() ? "border-green-500" : "border-red-500"
              }`}
              required
            />
          </div>

          <div>
            <label for="password" class="mb-2 block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={store.password}
              onInput={({ currentTarget: t }) => {
                setStore(["password"], t.value);
              }}
              class={`block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm ${
                issues() ? "border-green-500" : "border-red-500"
              }`}
              required
            />
          </div>

          <div>
            <Show when={issues()} keyed>
              {(issues) => <RenderIssues issues={issues} />}
            </Show>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
