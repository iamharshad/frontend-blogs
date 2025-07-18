import rss from '@astrojs/rss';

export const GET = () => {
  const posts = [
    {
      title: 'SSR vs SSG and the Rise of Disappearing Frameworks in 2025',
      description:
        'Astro, Qwik, and the new wave of frontend frameworks are changing how we think about rendering. Here\'s what modern developers need to know.',
      pubDate: new Date('2025-07-07'),
      slug: 'ssr-ssg-disappearing-frameworks',
    },
    {
      title: 'Salary Trends for Senior Software Engineers in Karnataka: What to Expect in 2025',
      description:
      'Explore the latest salary trends, insights, and what Senior Software Engineers can expect in Karnataka\'s booming tech market in 2025.',
      pubDate: new Date('2025-07-07'),
      slug: 'karnataka-senior-software-engineer-salary-guide',
    },
    {
      title: 'What MS Dhoni Can Teach Us About Clean UI Design',
      description:
        'MS Dhoni\'s calm and minimalistic approach on the cricket field offers surprisingly good lessons for frontend developers aiming to build clean and effective UI.',
      pubDate: new Date('2025-07-07'),
      slug: 'ms-dhoni-clean-ui-lessons',
    },
    {
      title: 'WebAssembly in the Front-End: A JavaScript Alternative?',
      description:
        'What is WebAssembly and how does it compare to JavaScript? Explore the benefits, limitations, and use cases of WebAssembly in modern front-end development.',
      pubDate: new Date('2025-07-07'),
      slug: 'webassembly-in-the-front-end',
    },
  ];

  return rss({
    title: 'Frontend Blogs by Harshad',
    description: 'Stay updated on modern frontend frameworks and tools.',
    site: 'https://iamharshad.github.io/fontend-blogs',
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: post.pubDate,
      link: `/fontend-blogs/blog/${post.slug}`,
    })),
  });
};
