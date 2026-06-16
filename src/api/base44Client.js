import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

const createLocalClient = () => ({
  auth: {
    me: async () => null,
    logout: () => {},
    redirectToLogin: () => {},
    loginViaEmailPassword: async () => null,
    loginWithProvider: () => {},
    register: async () => null,
    verifyOtp: async () => null,
    setToken: () => {},
    resendOtp: async () => null,
    resetPasswordRequest: async () => null,
    resetPassword: async () => null
  }
});

// In local development this project can run without a Base44 app id.
// Avoid creating the SDK client with a missing id because it sends requests to /api/apps/null.
export const base44 = appId
  ? createClient({
      appId,
      token,
      functionsVersion,
      serverUrl: '',
      requiresAuth: false,
      appBaseUrl
    })
  : createLocalClient();
