import dynamic from "next/dynamic";
import { postMeta as k6LoadTestingMeta } from "../components/blogs/Gk.learn";
import { postMeta as restAssuredTestingMeta } from "../components/blogs/Ra.learn";

const K6LoadTestingPost = dynamic(() => import("../components/blogs/Gk.learn"));
const RestAssuredTestingPost = dynamic(() => import("../components/blogs/Ra.learn"));

const postsMap = {
  "k6-load-testing-guide": {
    meta: k6LoadTestingMeta,
    component: K6LoadTestingPost
  }
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