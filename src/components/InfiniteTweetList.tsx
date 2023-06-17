import InfiniteScroll from "react-infinite-scroll-component";

type tweet = {
  id: string;
  content: string;
  createdAt: Date;
  likeCount: number;
  likedByMe: boolean;
  user: { id: string; image: string | null; name: string | null };
};

type InfiniteTweetListProps = {
  isError: boolean;
  isLoading: boolean;
  hasMore: boolean;
  fetchNewTweets: () => Promise<unknown>;
  tweets?: tweet[];
};

export function InfiniteTweetList({
  tweets,
  isError,
  hasMore,
  fetchNewTweets,
  isLoading,
}: InfiniteTweetListProps) {
  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Error</h1>;
  if (!tweets || tweets.length === 0) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  }

  return (
    <ul>
      <InfiniteScroll
        dataLength={tweets.length}
        next={fetchNewTweets}
        hasMore={hasMore}
        loader={"Loading"}
      >
        {tweets.map((tweet) => (
          <TweetCard {...tweet} key={tweet.id} />
        ))}
      </InfiniteScroll>
    </ul>
  );
}

function TweetCard({
  id,
  user,
  content,
  createdAt,
  likeCount,
  likedByMe,
}: tweet) {
  return <li className="flex gap-4 border-b p-4">
    
  </li>;
}
