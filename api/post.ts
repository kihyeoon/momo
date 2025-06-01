import axiosInstance from "@/api/axios";
import { CreatePostDto } from "@/types";

export async function createPost(body: CreatePostDto) {
  const { data } = await axiosInstance.post("/posts", body);

  return data;
}
