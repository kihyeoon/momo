import axiosInstance from "@/api/axios";
import { CreatePostDto, Post, CreateVoteDto, VoteOption } from "@/types";

async function createPost(body: CreatePostDto) {
  const { data } = await axiosInstance.post("/posts", body);

  return data;
}

async function getPosts(page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts?page=${page}`);

  return data;
}

async function getMyPosts(page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts/my?page=${page}`);

  return data;
}

async function getUserPosts(id: number, page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/posts/user/${id}?page=${page}`);

  return data;
}

async function getLikedPosts(page = 1): Promise<Post[]> {
  const { data } = await axiosInstance.get(`/likes?page=${page}`);

  return data;
}

async function getSearchPosts(page = 1, query: string): Promise<Post[]> {
  const { data } = await axiosInstance.get(
    `/posts/search?query=${query}&page=${page}`
  );

  return data;
}

async function deletePost(id: number): Promise<number> {
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

async function createVote({
  postId,
  voteOptionId,
}: CreateVoteDto): Promise<{ postId: number; voteOption: VoteOption }> {
  const { data } = await axiosInstance.post(
    `/posts/${postId}/vote/${voteOptionId}`
  );

  return data;
}

async function likePost(id: number): Promise<number> {
  const { data } = await axiosInstance.post(`/likes/${id}`);

  return data;
}

export {
  createPost,
  getPosts,
  deletePost,
  getPost,
  updatePost,
  createVote,
  likePost,
  getMyPosts,
  getLikedPosts,
  getUserPosts,
  getSearchPosts,
};
