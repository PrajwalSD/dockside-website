/**
 * Build-time Reddit API fetch for r/macapps.
 * Reddit requires a descriptive User-Agent. Use at build time only.
 */

const USER_AGENT = 'DocksideWebsite:1.0 (by /u/hachipoo)';

export interface RedditPost {
  id: string;
  title: string;
  selftext: string;
  author: string;
  subreddit: string;
  score: number;
  num_comments: number;
  permalink: string;
  url: string;
  created_utc: number;
}

export interface RedditComment {
  id: string;
  body: string;
  author: string;
  subreddit: string;
  score: number;
  permalink: string;
  link_title: string;
}

export interface RedditSearchResult {
  posts: RedditPost[];
  error?: string;
}

export interface RedditCommentsResult {
  comments: RedditComment[];
  error?: string;
}

async function redditFetch(url: string): Promise<Response> {
  return fetch(url, { headers: { 'User-Agent': USER_AGENT } });
}

/**
 * Search r/macapps for posts matching a query.
 */
export async function fetchRedditSearch(
  subreddit: string,
  query: string,
  limit = 25
): Promise<RedditSearchResult> {
  try {
    const url = `https://www.reddit.com/r/${subreddit}/search.json?q=${encodeURIComponent(query)}&restrict_sr=on&limit=${limit}&sort=top`;
    const res = await redditFetch(url);
    if (!res.ok) return { posts: [], error: `HTTP ${res.status}` };
    const json = await res.json();
    const posts: RedditPost[] = (json?.data?.children ?? [])
      .filter((c: { kind: string }) => c.kind === 't3')
      .map((c: { data: Record<string, unknown> }) => {
        const d = c.data;
        return {
          id: String(d?.id ?? ''),
          title: String(d?.title ?? ''),
          selftext: String(d?.selftext ?? ''),
          author: String(d?.author ?? '[deleted]'),
          subreddit: String(d?.subreddit ?? subreddit),
          score: Number(d?.score ?? 0),
          num_comments: Number(d?.num_comments ?? 0),
          permalink: `https://reddit.com${String(d?.permalink ?? '')}`,
          url: String(d?.url ?? ''),
          created_utc: Number(d?.created_utc ?? 0),
        };
      });
    return { posts };
  } catch (e) {
    return { posts: [], error: e instanceof Error ? e.message : 'Unknown error' };
  }
}

/**
 * Search r/macapps for comments matching a query (top comments).
 */
export async function fetchRedditComments(
  subreddit: string,
  query: string,
  limit = 50
): Promise<RedditCommentsResult> {
  try {
    const url = `https://www.reddit.com/r/${subreddit}/search.json?q=${encodeURIComponent(query)}&restrict_sr=on&type=comment&limit=${limit}&sort=top`;
    const res = await redditFetch(url);
    if (!res.ok) return { comments: [], error: `HTTP ${res.status}` };
    const json = await res.json();
    const comments: RedditComment[] = (json?.data?.children ?? [])
      .filter((c: { kind: string }) => c.kind === 't1')
      .map((c: { data: Record<string, unknown> }) => {
        const d = c.data;
        return {
          id: String(d?.id ?? ''),
          body: String(d?.body ?? ''),
          author: String(d?.author ?? '[deleted]'),
          subreddit: String(d?.subreddit ?? subreddit),
          score: Number(d?.score ?? 0),
          permalink: `https://reddit.com${String(d?.permalink ?? '')}`,
          link_title: String(d?.link_title ?? ''),
        };
      });
    return { comments };
  } catch (e) {
    return { comments: [], error: e instanceof Error ? e.message : 'Unknown error' };
  }
}
