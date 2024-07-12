import { axiosInstance } from "./index";
import { useQuery, useMutation } from "@tanstack/react-query";

export const useFetchRoom = () => {
  return useQuery({
    queryKey: ["rooms"],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get("/rooms");

      return dataResponse.data;
    },
  });
};

export const useFetchRoomById = (id) => {
  return useQuery({
    queryKey: ["room", id],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(`/rooms/${id}`);
      console.log(dataResponse.data);
      return dataResponse.data;
    },
  });
};

export const useCreateRoom = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const dataResponse = await axiosInstance.post(`/rooms`, body);
      return dataResponse;
    },
    onSuccess,
  });
};

export const useDeleteRoom = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      const dataResponse = await axiosInstance.delete(`/rooms/${id}`);
      return dataResponse;
    },
    onSuccess,
  });
};

export const useEditRoom = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      const dataResponse = await axiosInstance.patch(`/posts/${id}`);
      return dataResponse;
    },
    onSuccess,
  });
};
