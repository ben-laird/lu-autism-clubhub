import { Component, createResource } from "solid-js";
import { trpcClientSide } from "~/trpc/client";

const getTrpcData = async (name: string) =>
  await trpcClientSide.greet.query(name);

const TestTrpc: Component<{ name: string }> = ({ name }) => {
  const [greeting] = createResource(name, getTrpcData);

  return <p>{greeting}</p>;
};

export default TestTrpc;
