import { useMutation } from "@tanstack/react-query";
import { createPost } from "@/api/post";
import { router } from "expo-router";
import queryClient from "@/api/queryClient";
import { queryKeys } from "@/constants";

function useCreatePost() {
  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      router.replace("/");
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
    },
  });
}

export default useCreatePost;
