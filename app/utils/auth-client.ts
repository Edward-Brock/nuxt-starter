import { inferAdditionalFields } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/vue'

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
})

export type Session = typeof authClient.$Infer.Session

export const { signIn, signUp, useSession } = createAuthClient()
