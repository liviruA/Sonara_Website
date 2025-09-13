import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined

let client: SupabaseClient | null = null

if (supabaseUrl && supabaseAnonKey) {
  try {
    client = createClient(supabaseUrl, supabaseAnonKey)
  } catch (e) {
    console.error('Failed to initialize Supabase client:', e)
  }
} else {
  console.warn('Supabase URL or Anon Key not configured. Skipping Supabase client initialization.')
}

export const supabase = {
  functions: {
    invoke: async (
      name: string,
      options?: Parameters<SupabaseClient['functions']['invoke']>[1]
    ) => {
      if (!client) {
        throw new Error('Supabase client not configured')
      }
      return client.functions.invoke(name, options)
    },
  },
} as Pick<SupabaseClient, 'functions'>