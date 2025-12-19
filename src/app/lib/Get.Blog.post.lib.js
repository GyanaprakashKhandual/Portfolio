
import dynamic from 'next/dynamic';

// Dynamically import posts
const FirstPost = dynamic(() => import('../components/blogs/first-port').then(mod => mod.default));
const SecondPost = dynamic(() => import('../components/blogs/second-post').then(mod => mod.default));
const ThirdPost = dynamic(() => import('../components/blogs/third-post').then(mod => mod.default));

// Import metadata separately
let firstMeta, secondMeta, thirdMeta;

try {
    const firstPostModule = require('../components/blogs/first-port');
    firstMeta = firstPostModule.postMeta;
} catch (e) {
    firstMeta = { slug: 'first-post', title: 'First Post', excerpt: '', date: '', author: '' };
}

try {
    const secondPostModule = require('../components/blogs/second-post');
    secondMeta = secondPostModule.postMeta;
} catch (e) {
    secondMeta = { slug: 'second-post', title: 'Second Post', excerpt: '', date: '', author: '' };
}

try {
    const thirdPostModule = require('../components/blogs/third-post');
    thirdMeta = thirdPostModule.postMeta;
} catch (e) {
    thirdMeta = { slug: 'third-post', title: 'Third Post', excerpt: '', date: '', author: '' };
}

// Map of all posts
const postsMap = {
    'first-post': { meta: firstMeta, component: FirstPost },
    'second-post': { meta: secondMeta, component: SecondPost },
    'third-post': { meta: thirdMeta, component: ThirdPost },
};

export function getBlogPosts() {
    return Object.values(postsMap).map(({ meta }) => meta);
}

export function getPostBySlug(slug) {
    const post = postsMap[slug];
    return post || null;
}

export function getAllPostSlugs() {
    return Object.keys(postsMap);
}

