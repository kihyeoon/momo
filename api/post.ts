import axiosInstance from "@/api/axios";
import { CreatePostDto, Post } from "@/types";

async function createPost(body: CreatePostDto) {
  const { data } = await axiosInstance.post("/posts", body);

  return data;
}

async function getPosts(page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts?page=${page}`);

  return data;
}

async function deletePost(id: number): Promise<void> {
  const { data } = await axiosInstance.delete(`/posts/${id}`);

  return data;
}

async function getPost(id: number): Promise<Post> {
  const { data } = await axiosInstance.get(`/posts/${id}`);

  return data;
}

interface RequestUpdatePost {
  id: number;
  body: CreatePostDto;
}

async function updatePost({ id, body }: RequestUpdatePost): Promise<Number> {
  const { data } = await axiosInstance.patch(`/posts/${id}`, body);

  return data;
}

export { createPost, getPosts, deletePost, getPost, updatePost };
