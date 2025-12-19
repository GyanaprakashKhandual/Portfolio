import dynamic from "next/dynamic";

const FirstPost = dynamic(() =>
  import("../components/blogs/first-port").then((mod) => mod.default)
);
const SecondPost = dynamic(() =>
  import("../components/blogs/second-post").then((mod) => mod.default)
);
const ThirdPost = dynamic(() =>
  import("../components/blogs/third-post").then((mod) => mod.default)
);

import { postMeta as firstMeta } from "../components/blogs/first-port";
import { postMeta as secondMeta } from "../components/blogs/second-post";
import { postMeta as thirdMeta } from "../components/blogs/third-post";

const postsMap = {
  "first-post": { meta: firstMeta, component: FirstPost },
  "second-post": { meta: secondMeta, component: SecondPost },
  "third-post": { meta: thirdMeta, component: ThirdPost },
};

export function getBlogPosts() {
  return Object.values(postsMap).map(({ meta }) => meta);
}

export function getPostBySlug(slug) {
  return postsMap[slug] || null;
}

export function getAllPostSlugs() {
  return Object.keys(postsMap);
}
