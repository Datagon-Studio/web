import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../models/request/user";
import { AppUser } from "../models/response/app-user";

export const userService = createApi({
  reducerPath: "userService",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4300",
  }),
  tagTypes: ["Users"],
  endpoints: (build) => ({
    getUsers: build.query<AppUser[], void>({
      query: () => ({
        url: `/users`,
        method: "GET",
      }),
      providesTags: ["Users"],
    }),
    getUser: build.mutation<AppUser, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      invalidatesTags: ["Users"],
    }),
    createUser: build.mutation<AppUser, User>({
      query: (createUserRequest) => ({
        url: "/users",
        method: "POST",
        body: createUserRequest,
      }),
      invalidatesTags: ["Users"],
    }),
    updateUser: build.mutation<AppUser, User>({
      query: (updateUserRequest) => ({
        url: `/users/${updateUserRequest.id}`,
        method: "PUT",
        body: updateUserRequest,
      }),
      invalidatesTags: ["Users"],
    }),
    deleteUser: build.mutation<void, number>({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Users"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserMutation,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userService;
