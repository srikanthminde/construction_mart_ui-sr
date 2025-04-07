// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import PlaceOrder from '../features/common/PlaceOrder'

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://construction-mart-json-server.onrender.com/orders' }),
  endpoints: (builder) => ({
    PlaceOrder: builder.mutation({
      query: (order) => {
        return {
            url: `/`,
            method: 'POST',
            body: order,
            headers:{
                token:window.localStorage.getItem("token")
            },
        }
      }
    }),
    acceptOrder: builder.mutation({
      query: (order) => {
        return {
            url: `/${order.id}`,
            method: 'PATCH',
            body: {status:order.status},
            headers:{
                token:window.localStorage.getItem("token")
            },
        }
      }
    }),
    dispatchOrder: builder.mutation({
      query: (order) => {
        return {
            url: `/${order.id}`,
            method: 'PATCH',
            body: {status:order.status},
            headers:{
                token:window.localStorage.getItem("token")
            },
        }
      }
    }),
    setOrderDelivered: builder.mutation({
      query: (order) => {
        return {
            url: `/${order.id}`,
            method: 'PATCH',
            body: {status:order.status},
            headers:{
                token:window.localStorage.getItem("token")
            },
        }
      }
    }),
    deleteOrder: builder.mutation({
      query: (order) => {
        return {
            url: `/${order.id}`,
            method: 'DELETE',
            headers:{
                token:window.localStorage.getItem("token")
            },
        }
      }
    }),
 
    getAllOrder:builder.query({
        query:()=>{
            return {
                url:`/`,
                method:'GET',
                headers:{
                    token:window.localStorage.getItem("token")
                }
            }
        }
    }),
    
    
    getOrderByUserName:builder.query({
      query:(username)=>{
          return {
              url:`?username=${username}`,
              method:'GET',
              headers:{
                  token:window.localStorage.getItem("token")
              }
          }
      }
  }),
  
    
    
  }),
})
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  usePlaceOrderMutation,
  useGetAllOrderQuery,
  useLazyGetAllOrderQuery,
  useDeleteOrderMutation,
  useAcceptOrderMutation,
  useDispatchOrderMutation,
  useSetOrderDeliveredMutation,
  useGetOrderByUserNameQuery,
  useLazyGetOrderByUserNameQuery,
  // useGetOrderByUserNameQuery
} = orderApi