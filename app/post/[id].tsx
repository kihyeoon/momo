import React, { Fragment, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Pressable,
  TextInput,
  Keyboard,
} from "react-native";
import useGetPost from "@/hooks/queries/useGetPost";
import AuthRoute from "@/components/AuthRoute";
import FeedItem from "@/components/FeedItem";
import { colors } from "@/constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import InputField from "@/components/InputField";
import useCreateComment from "@/hooks/queries/useCreateComment";
import CommentItem from "@/components/CommentItem";

function PostDetailScreen() {
  const { id } = useLocalSearchParams();
  const { data: post, isPending, isError } = useGetPost(Number(id));
  const { mutate: createComment } = useCreateComment();
  const [content, setContent] = useState("");
  const [parentCommentId, setParentCommentId] = useState<number | null>(null);
  const scrollRef = useRef<ScrollView | null>(null);
  const inputRef = useRef<TextInput | null>(null);

  if (isPending || isError) {
    return <></>;
  }

  const handleReply = (commentId: number) => {
    setParentCommentId(commentId);
    inputRef.current?.focus();
  };

  const handleCancelReply = () => {
    setParentCommentId(null);
    Keyboard.dismiss();
  };

  const handleCreateComment = () => {
    const commentData = {
      postId: post.id,
      content,
    };

    if (parentCommentId) {
      createComment({
        ...commentData,
        parentCommentId,
      });
      setContent("");
      handleCancelReply();
      return;
    }

    createComment(commentData);
    setContent("");
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 500);
  };

  return (
    <AuthRoute>
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView
          contentContainerStyle={styles.awareScrollViewContainer}
        >
          <ScrollView
            ref={scrollRef}
            style={{ marginBottom: 75 }}
            contentContainerStyle={styles.scrollViewContainer}
          >
            <View style={styles.postContainer}>
              <FeedItem post={post} isDetail />
              <Text style={styles.commentCount}>
                댓글 {post.commentCount}개
              </Text>
            </View>
            {post.comments?.map((comment) => (
              <Fragment key={comment.id}>
                <CommentItem
                  key={comment.id}
                  comment={comment}
                  onReply={() => handleReply(comment.id)}
                  onCancelReply={handleCancelReply}
                  parentCommentId={parentCommentId}
                />
                {comment.replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} isReply />
                ))}
              </Fragment>
            ))}
          </ScrollView>
          <View style={styles.commentInputContainer}>
            <InputField
              ref={inputRef}
              value={content}
              onChangeText={setContent}
              onSubmitEditing={handleCreateComment}
              returnKeyType="send"
              placeholder={
                parentCommentId ? "답글 남기는 중..." : "댓글을 남겨보세요."
              }
              rightChild={
                <Pressable
                  disabled={!content}
                  style={styles.inputButtonContainer}
                  onPress={handleCreateComment}
                >
                  <Text style={styles.inputButtonText}>등록</Text>
                </Pressable>
              }
            />
          </View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    </AuthRoute>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  awareScrollViewContainer: {
    flex: 1,
    backgroundColor: colors.GRAY_200,
  },
  scrollViewContainer: {
    backgroundColor: colors.GRAY_200,
  },
  postContainer: {
    marginTop: 12,
  },
  commentCount: {
    marginTop: 16,
    backgroundColor: colors.WHITE,
    paddingVertical: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  commentInputContainer: {
    width: "100%",
    borderTopColor: colors.GRAY_200,
    borderTopWidth: StyleSheet.hairlineWidth,
    backgroundColor: colors.WHITE,
    padding: 16,
    bottom: 0,
    position: "absolute",
  },
  inputButtonContainer: {
    backgroundColor: colors.ORANGE_600,
    padding: 8,
    borderRadius: 5,
  },
  inputButtonText: {
    color: colors.WHITE,
    fontWeight: "bold",
  },
});

export default PostDetailScreen;
