import { axiosInstance } from "./";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useFetchBooking = () => {
  return useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get("/bookings");
      console.log(dataResponse.data);
      return dataResponse.data;
    },
  });
};

export const useFetchBookingById = (id) => {
  return useQuery({
    queryKey: [],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(`/bookings/${id}`);
      console.log(dataResponse.data);
      return dataResponse.data;
    },
  });
};

export const useCreateBooking = (onSuccess) => {
  return useMutation({
    mutationFn: async (body) => {
      const dataResponse = await axiosInstance.post("/bookings", body);
      console.log(dataResponse);
      return dataResponse;
    },
    onSuccess,
  });
};
