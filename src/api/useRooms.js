import { axiosInstance } from "./index";
import { useQuery, useMutation } from "@tanstack/react-query";

const useFetchRoom = () => {
  return useQuery({
    queryFn: async () => {
      const dataResponse = await axiosInstance.get("/rooms");
      console.log(dataResponse);
      return dataResponse;
    },
  });
};

const useCreateRoom = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (body) => {
      const dataResponse = await axiosInstance.post(`/rooms`, body);
      return dataResponse;
    },
    onSuccess,
  });
};

const useDeleteRoom = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      const dataResponse = await axiosInstance.delete(`/rooms/${id}`);
      return dataResponse;
    },
    onSuccess,
  });
};

const useEditRoom = ({ onSuccess }) => {
  return useMutation({
    mutationFn: async (id) => {
      const dataResponse = await axiosInstance.patch(`/posts/${id}`);
      return dataResponse;
    },
    onSuccess,
  });
};

module.exports = { useFetchRoom, useCreateRoom, useDeleteRoom, useEditRoom };
