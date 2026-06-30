import { aiIotContent } from './blogs/aiIotBlog';
import { customSoftwareContent } from './blogs/customSoftwareBlog';
import { cloudMigrationContent } from './blogs/cloudMigrationBlog';
import { seoContent } from './blogs/seoBlog';
import { uiUxContent } from './blogs/uiUxBlog';
import { erpContent } from './blogs/erpBlog';

export const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI and IoT Integration in Enterprise Digital Transformation',
    excerpt: 'Discover how the convergence of Artificial Intelligence and the Internet of Things is reshaping enterprise operations in 2026 and beyond.',
    category: 'Artificial Intelligence',
    author: 'Viyan Technologies',
    date: 'Jun 28, 2026',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800&h=500',
    slug: '/blog/ai-iot-enterprise-transformation',
    content: aiIotContent
  },
  {
    id: 2,
    title: 'Why Custom Software Is the Key to Scaling Your Startup Faster',
    excerpt: 'Discover how custom software helps startups scale efficiently, reduce costs, improve productivity, and gain a competitive advantage with tailored technology solutions.',
    category: 'Software Development',
    author: 'Viyan Technologies',
    date: 'Jun 15, 2026',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800&h=500',
    slug: '/blog/why-custom-software-is-the-key-to-scaling-your-startup-faster',
    content: customSoftwareContent
  },
  {
    id: 3,
    title: 'Mastering Cloud Migration: A Step-by-Step Guide for SMBs',
    excerpt: 'Learn how small and medium-sized businesses can plan, execute, and optimize a successful cloud migration with this practical step-by-step guide.',
    category: 'Cloud Solutions',
    author: 'Viyan Technologies',
    date: 'May 30, 2026',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=500',
    slug: '/blog/mastering-cloud-migration-step-by-step-guide-for-smbs',
    content: cloudMigrationContent
  },
  {
    id: 4,
    title: 'Demystifying SEO: How to Rank #1 on Google in 2026',
    excerpt: 'Learn the latest SEO strategies for 2026, including AI search optimization, content quality, technical SEO, user experience, and authority-building techniques.',
    category: 'SEO Services',
    author: 'Viyan Technologies',
    date: 'May 12, 2026',
    image: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=800&h=500',
    slug: '/blog/how-to-rank-number-1-on-google-in-2026',
    content: seoContent
  },
  {
    id: 5,
    title: 'The Importance of UI/UX in Boosting E\u2011Commerce Conversions',
    excerpt: 'Discover how strategic UI/UX design improves customer experience, increases conversion rates, reduces cart abandonment, and drives long-term e-commerce growth.',
    category: 'UI/UX Design',
    author: 'Viyan Technologies',
    date: 'Apr 24, 2026',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800&h=500',
    slug: '/blog/importance-of-ui-ux-in-boosting-ecommerce-conversions',
    content: uiUxContent
  },
  {
    id: 6,
    title: 'How Custom ERP Systems Streamline Operations for Modern Enterprises',
    excerpt: 'Learn how custom ERP systems improve operational efficiency, automate business processes, integrate departments, and support enterprise growth with scalable solutions.',
    category: 'ERP Systems',
    author: 'Viyan Technologies',
    date: 'Apr 05, 2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=500',
    slug: '/blog/how-custom-erp-systems-streamline-operations-for-modern-enterprises',
    content: erpContent
  }
];
