// Groups of related pages that share a sidebar. A page in a group gets the
// group's sidebar in place of the in-page "On this page" navigation. Pages may
// nest via `children`; a page's children show only while you're on that page
// or one of its descendants. The current page also lists its h2 headings.
module.exports = [
  {
    heading: 'In this toolkit',
    pages: [
      { url: '/data/minimization-toolkit/101/', label: 'Data minimization 101' },
      {
        url: '/data/minimization-toolkit/best-practices/',
        label: 'Best practices for data minimization',
      },
      {
        url: '/data/minimization-toolkit/conducting-risk-necessity-assessments/',
        label: 'Conducting risk and necessity assessments',
      },
      {
        url: '/data/minimization-toolkit/external-sharing/',
        label: 'External data sharing',
      },
      {
        url: '/data/minimization-toolkit/reviewing-vendor-contracts/',
        label: 'Reviewing vendor contracts',
      },
      {
        url: '/data/minimization-toolkit/best-practices-laws-regulations/',
        label: 'Best practices and relevant laws and regulations',
      },
    ],
  },
  {
    heading: 'Content design principles',
    pages: [
      {
        url: '/content-design/principles/focus-on-user-needs-services/',
        label: 'Focus on user needs and services',
      },
      {
        url: '/content-design/principles/meet-your-audience-where-they-are/',
        label: 'Meet your audience where they are',
      },
      {
        url: '/content-design/principles/build-accessibility-from-start/',
        label: 'Build in accessibility from the start',
      },
      { url: '/content-design/principles/be-concise/', label: 'Be concise' },
      {
        url: '/content-design/principles/write-in-plain-language/',
        label: 'Write in plain language',
      },
      {
        url: '/content-design/principles/write-with-conversational-official-voice/',
        label: 'Write with a conversational and official voice',
      },
      {
        url: '/content-design/principles/organize-content-strategically/',
        label: 'Organize content strategically',
      },
    ],
  },
  {
    heading: 'In this guidebook',
    pages: [
      {
        url: '/data/idea-guidebook/how-to-develop-manage-data-sharing-agreement/',
        label: 'How to develop and manage a data sharing agreement',
      },
      {
        url: '/data/idea-guidebook/dispute-resolution-process/',
        label: 'Dispute resolution process',
      },
      {
        url: '/data/idea-guidebook/resources-references/',
        label: 'Resources and references',
        children: [
          {
            url: '/data/idea-guidebook/resources-references/agreement/',
            label: 'IDEA agreement',
          },
          {
            url: '/data/idea-guidebook/resources-references/list-signatories/',
            label: 'List of signatories',
          },
          {
            url: '/data/idea-guidebook/resources-references/bucp-template/',
            label: 'BUCP templates',
          },
        ],
      },
      {
        url: '/data/idea-guidebook/resources-references/notice-email-disclosure-templates/',
        label: 'Notice, email, and disclosure templates',
      },
      { url: '/data/idea-guidebook/faq/', label: 'Frequently asked questions' },
    ],
  },
];
