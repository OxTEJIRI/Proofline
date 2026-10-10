import { parseServerEnv } from "../lib/env/schema.ts";

parseServerEnv(process.env);
process.stdout.write("Environment configuration is valid.\n");
