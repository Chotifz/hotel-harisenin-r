import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from ".";

export const useFetchRoomDetailById = (id) => {
  return useQuery({
    queryKey: ["room-details", id],
    queryFn: async () => {
      const dataResponse = await axiosInstance.get(`/room-details/${id}`);

      return dataResponse.data;
    },
  });
};
