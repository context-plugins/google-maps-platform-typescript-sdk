import type { UrlTemplate } from "./core/api-request.js";
import { SdkError } from "./core/errors.js";

export const ServerEnvironment = {
  Production: "production",
  Environment2: "environment2",
  Environment3: "environment3",
} as const;
export type ServerEnvironment = (typeof ServerEnvironment)[keyof typeof ServerEnvironment];

export type DefaultServerOptions = {
  production?: { baseUrl?: string };
  environment2?: { baseUrl?: string };
  environment3?: { baseUrl?: string };
};

export type ServerOptions = {
  default?: DefaultServerOptions;
};

export type Servers = {
  default: (subPath: string) => UrlTemplate;
};

export const DEFAULT_SERVER_OPTIONS = {
  default: {
    production: { baseUrl: "https://www.googleapis.com" },
    environment2: { baseUrl: "https://maps.googleapis.com" },
    environment3: { baseUrl: "https://roads.googleapis.com" },
  },
} as const satisfies ServerOptions;

export function buildServers(environment: ServerEnvironment, options: ServerOptions): Servers {
  return {
    default: (s) => defaultServer(environment, s, options.default),
  };
}

function defaultServer(
  environment: ServerEnvironment,
  subPath: string,
  options?: DefaultServerOptions,
): UrlTemplate {
  switch (environment) {
    case ServerEnvironment.Production: {
      const production = { ...DEFAULT_SERVER_OPTIONS.default.production, ...options?.production };
      return { baseUrl: production.baseUrl, subPath };
    }
    case ServerEnvironment.Environment2: {
      const environment2 = { ...DEFAULT_SERVER_OPTIONS.default.environment2, ...options?.environment2 };
      return { baseUrl: environment2.baseUrl, subPath };
    }
    case ServerEnvironment.Environment3: {
      const environment3 = { ...DEFAULT_SERVER_OPTIONS.default.environment3, ...options?.environment3 };
      return { baseUrl: environment3.baseUrl, subPath };
    }
    default:
      unknownEnvironment(environment);
  }
}

function unknownEnvironment(environment: never): never {
  throw new SdkError({ message: `Unknown server environment: ${String(environment)}` });
}
