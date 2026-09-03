import type { ClientOptions } from "./client-options.js";
import type { AuthScheme } from "./core/api-request.js";
import { apiKeyQueryAuth } from "./core/auth/schemes.js";

export type AuthSchemes = {
  readonly apiKeyAuth: AuthScheme;
};

export function buildAuthSchemes(options: ClientOptions): AuthSchemes {
  return {
    apiKeyAuth: apiKeyQueryAuth({ name: "key", token: options.apiKeyAuth }),
  };
}
