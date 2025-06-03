import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deletePost } from "@/api/post";
import { queryKeys } from "@/constants";

function useDeletePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [queryKeys.POST, queryKeys.GET_POSTS],
      });
    },
  });
}

export default useDeletePost;
