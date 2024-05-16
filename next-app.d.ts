export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_METADATABASE_URL: string;
    }
  }
}
