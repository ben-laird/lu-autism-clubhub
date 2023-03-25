import { defineCollection, z } from "astro:content";

const meetings = defineCollection({ schema: z.object({ date: z.date() }) });

export const collections = { meetings };
