// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl:'https://construction-mart-json-server-1.onrender.com/users'}),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => {
        return {
            url: `/`,
            method: 'POST',
            body: user,
        }
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi