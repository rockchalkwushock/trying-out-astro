import { defineConfig } from 'astro/config'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeToc from 'rehype-toc'
import rehypeSlug from 'rehype-slug'
import remarkExternalLinks from 'remark-external-links'
import { remarkReadingTime } from './remark-reading-time'

// https://astro.build/config
export default defineConfig({
  markdown: {
    extendDefaultPlugins: true,
    rehypePlugins: [
      rehypeSlug,
      rehypeToc,
      rehypeAutoLinkHeadings,
      // FIXME: Not working need to investigate why?
      // Seems like the plugin would need to look for `pre.astro-code`
      rehypeCodeTitles,
    ],
    // remarkRehype: [],
    remarkPlugins: [remarkExternalLinks, remarkReadingTime],
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
    syntaxHighlight: 'shiki',
  },
})
