import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 've17vww7',
    dataset: 'dataset'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  }
})
