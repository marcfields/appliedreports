export const site = {
  name: "The Applied Report Company",
  shortName: "Applied Reports",
  url: "https://appliedreports.com",
  location: "Toronto",
  year: 2026,
  contactEmail: "hello@appliedreports.com",
  heroKicker: "AI for Building Engineers",
  heroLine: "Transform raw data into complete reports",
  heroSubcopy:
    "Write building engineering reports more efficiently directly in Microsoft Word with Otto.",
  reportTypesSection: {
    heading: "Write any report type.",
    body: "Otto works with a growing list of report types, and can adapt to produce any report the firm authors. Applied Reports works directly with firm engineers to adapt custom or novel templates and report types.",
    items: [
      {
        label: "Property Condition Assessments",
        icon: "/images/figma/icon-pca.png",
      },
      {
        label: "Roofing Condition Assessments",
        icon: "/images/figma/icon-rca.png",
      },
      {
        label: "Reserve Fund Studies",
        icon: "/images/figma/icon-rfs.png",
      },
      {
        label: "Site Observation Reports",
        icon: "/images/figma/icon-sor.png",
      },
      {
        label: "Environmental Site Assessments",
        icon: "/images/figma/icon-esa.png",
      },
      {
        label: "Additional Types",
        icon: "/images/figma/icon-more.png",
      },
    ],
  },
  ottoIntro: {
    heading: "Your business is reports.\nWhy are they so hard to get done?",
    body: "Otto is an agent used by engineers to write reports more efficiently. Otto processes site data, builds report sections in the firm template, and surfaces accurate photos, notes, documents, and writing suggestions to the engineer directly in Microsoft Word.",
  },
  productSteps: [
    {
      id: "01",
      title: "Process site visit data",
      summary: "Otto processes and analyzes site data.",
      body: "Otto accepts photographs, handwritten notes, drawings, documents, past reports, anything. Title, summary, components, date, key facts, system codes, and embedding are written as metadata. EXIF GPS and capture time is extracted from every photograph.",
      icon: "/images/figma/icon-inputs.png",
      iconPosition: "left" as const,
    },
    {
      id: "02",
      title: "Collate and create report",
      summary: "Otto builds report sections from firm templates",
      body: "Site data inputs are mapped to each section through hybrid search. Photographs are clustered by capture time, system code, embedding, and GPS, then pinned to the matching roof area. Notes are transcribed and component descriptions parsed into the proper sections.",
      icon: "/images/figma/icon-creation.png",
      iconPosition: "right" as const,
    },
    {
      id: "03",
      title: "Write and review",
      summary: "Otto works directly in MS Word to write and review with the engineer.",
      body: "The add-in opens in the .docx report and provides accurate, relevant information from the site visit. Otto instantly formats and inserts photos. Otto gives report-ready writing suggestions in the firm's style and tone. The engineer writes and reviews all final copy. Otto handles everything else.",
      icon: "/images/figma/icon-writing.png",
      iconPosition: "left" as const,
    },
  ],
  builtFor: {
    heading: "Built for the built world.",
    items: [
      {
        title: "Tuned for building engineering",
        body: "Built on exclusive building, component, and systems classification datasets",
        icon: "/images/figma/icon-engineering.png",
      },
      {
        title: "Works off industry standards",
        body: "Otto understands ASTM standards, Uniformat, deficiencies, + more\nOtto also adopts firm standards",
        icon: "/images/figma/icon-standards.png",
      },
      {
        title: "Works in MS Word",
        body: "Otto runs directly in Word\nFind, check, and write faster without switching tabs",
        icon: "/images/figma/icon-integration.png",
      },
    ],
  },
  demoBanner: {
    heading: "Otto gives every engineer a managing partner to write with.",
    image: "/images/figma/demo-banner.jpg",
  },
  demoForm: {
    heading: "Otto gives everyone on your team a managing partner to write with",
    submitLabel: "Book a Demo",
  },
  logos: {
    company: "/images/applied-reports-company-logo.svg",
    wordmark: "/images/applied-reports-logo.svg",
    arc: "/images/figma/arc-logo.png",
    heroHeightPx: 100,
  },
  images: {
    heroOverlay: "/images/figma/hero-overlay.jpg",
    footer: "/images/figma/footer-labs.jpg",
  },
  ctaButton: {
    heightPx: 48,
    minWidthPx: 165,
    fontSizePx: 20,
  },
  cta: {
    primary: {
      label: "Book a Demo",
      href: "#book-demo",
    },
    login: {
      label: "Login",
      href: "https://reportbolt.halp.co/",
    },
    secondary: {
      label: "Meet Otto",
      href: "#otto",
    },
  },
} as const;
