/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But we want to manually specify the sidebar for more control
  docs: [
    'intro',
    'getting-started',
    'usage-guide',
    {
      type: 'link',
      href: '/embeddings',
      label: '🧬 Embeddings',
      className: 'category-link',
    },
    'multi-modal',
    'api-reference',
    'troubleshooting',
    {
      type: 'link',
      href: '/integrations',
      label: '🔌 Integrations',
      className: 'category-link',
    },
    'deployment',
    'migration',
    'observability',
    'telemetry',
    'roadmap',
    'contributing',
    'about',
    {
      type: 'link',
      href: '/api',
      label: '🔧 API Docs',
      className: 'category-link',
    },
  ],
  integrations: [
    {
      type: 'link',
      label: '← Home',
      href: '/'
    },
    'integrations/index',
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      className: 'category-header',
      items: [
        'integrations/langchain',
        'integrations/llama-index',
        'integrations/braintrust',
        'integrations/openllmetry',
        'integrations/streamlit',
        'integrations/haystack',
      ],
    },
  ],
  embeddings: [
    {
      type: 'link',
      label: '← Home',
      href: '/'
    },
    'embeddings',
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      className: 'category-header',
      items: [
        'embeddings/openai',
        'embeddings/google-gemini',
        'embeddings/cohere',
        'embeddings/hugging-face',
        'embeddings/google-palm',
        'embeddings/hugging-face-embedding-server',
        'embeddings/instructor',
        'embeddings/roboflow-api'
        'embeddings/hugging-face-embedding-server',
        'embeddings/jinaai',
      ],
    },
  ],
  api: [
    {
      type: 'link',
      label: '← Home',
      href: '/'
    },
    'api/index',
    {
      type: 'category',
      label: 'Python Client',
      collapsed: false,
      className: 'category-header',
      items: [
        'reference/Client',
        'reference/Collection',
      ],
    },
    {
      type: 'category',
      label: 'JS/TS Client',
      collapsed: false,
      className: 'category-header',
      items: [
        'js_reference/Client',
        'js_reference/Collection',
      ],
    },
  ],
};

module.exports = sidebars;
