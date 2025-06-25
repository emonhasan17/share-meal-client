import axios from "axios";
import React, {  useEffect } from "react";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: 'https://food-sharing-server-kappa.vercel.app',
});

const useAxiosSecure = () => {
  const { user, signOutUser, loading } = useAuth();
  // console.log(user.accessToken)

  useEffect(() => {
    if (!loading && user?.accessToken) {
      // Add request interceptor
      const requestInterceptor = axiosInstance.interceptors.request.use(
        (config) => {
            config.headers.authorization = `Bearer ${user.accessToken}`;
          return config;
        }
      );

      // Add response interceptor
      const responseInterceptor = axiosInstance.interceptors.response.use(
        (res) => res,
        (err) => {
          if (err?.response?.status === 401 || err?.response?.status === 403) {
            signOutUser()
              .then(() => {
                console.log("Logged out due to token issue.");
              })
              .catch(console.error);
          }
          return Promise.reject(err);
        }
      );

      // Cleanup to prevent multiple interceptors on re-renders
      return () => {
        axiosInstance.interceptors.request.eject(requestInterceptor);
        axiosInstance.interceptors.response.eject(responseInterceptor);
      };
    }
  }, [user, loading, signOutUser]);

  return axiosInstance;
};

export default useAxiosSecure;