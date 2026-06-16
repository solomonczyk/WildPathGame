import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'node:path'

const hasBase44AppId = (value) => {
  if (value === undefined || value === null) return false;
  const normalized = String(value).trim().toLowerCase();
  return !!normalized && !['null', 'undefined', 'false'].includes(normalized);
};

const base44Plugins = hasBase44AppId(process.env.VITE_BASE44_APP_ID)
  ? [
      base44({
        // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
        // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
        legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true',
        hmrNotifier: true,
        navigationNotifier: true,
        analyticsTracker: false,
        visualEditAgent: false
      })
    ]
  : [];

// https://vite.dev/config/
export default defineConfig({
  logLevel: 'error', // Suppress warnings, only show errors
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src')
    }
  },
  plugins: [
    ...base44Plugins,
    react(),
  ]
});
