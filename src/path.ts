// Path Helpers
// insted of using `/${topicSlug}/posts/new` every time
// now we can just use path.postCreate(topicSlug)

const paths = {
  home: () => "/",
  topicShow: (topicSlug: string) => `/${topicSlug}`,
  postCreate: (topicSlug: string) => `/${topicSlug}/posts/new`,
  postShow: (topicSlug: string, postId: string) =>
    `/${topicSlug}/posts/${postId}`,
};
export default paths;
