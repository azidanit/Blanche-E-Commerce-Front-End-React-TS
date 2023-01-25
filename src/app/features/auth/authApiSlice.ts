import {
  ICheckEmailResponse,
  ICheckUsernameResponse,
  ICheckUsernameRequest,
  ILoginRequest,
  ILoginResponse,
  RegisterFirstStepProps,
  IRegisterResponse,
  IRegisterRequest,
} from '../../../helpers/types';
import { apiSlice } from '../../api/apiSlice';

const authApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<ILoginResponse, ILoginRequest>({
      query: (body) => ({ url: '/login', method: 'POST', body }),
      transformResponse: (response: { data: ILoginResponse }) => response.data,
      transformErrorResponse: (response) => response.data,
    }),
    checkEmail: build.mutation<ICheckEmailResponse, RegisterFirstStepProps>({
      query: (body) => ({ url: '/register/check-email', method: 'POST', body }),
      transformResponse: (response: { data: ICheckEmailResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    checkUsername: build.mutation<
      ICheckUsernameResponse,
      ICheckUsernameRequest
    >({
      query: (body) => ({
        url: '/register/check-username',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: ICheckUsernameResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
    register: build.mutation<IRegisterResponse, IRegisterRequest>({
      query: (body) => ({
        url: '/register',
        method: 'POST',
        body,
      }),
      transformResponse: (response: { data: IRegisterResponse }) =>
        response.data,
      transformErrorResponse: (response) => response.data,
    }),
  }),
});

export const {
  useLoginMutation,
  useCheckEmailMutation,
  useCheckUsernameMutation,
  useRegisterMutation,
} = authApi;
