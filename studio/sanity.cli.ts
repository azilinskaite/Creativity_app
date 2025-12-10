import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'exhjl35f',
    dataset: 'production'
  },
  deployment: {
    autoUpdates: true,
  },
  typegen: {
    path: "../frontend/src/**/*.{ts,tsx,js,jsx}",
    schema: "schema.json",
    generates: "../frontend/sanity.types.ts",
    overloadClientMethods: true,
  },
});
