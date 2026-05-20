export const site = {
  name: "The Applied Report Company",
  shortName: "Applied Reports",
  url: "https://appliedreports.com",
  location: "Toronto",
  year: 2026,
  contactEmail: "hello@appliedreports.com",
  heroKicker: "AI for Building Engineers",
  heroHeadline: ["Transform raw data into", "complete reports"] as const,
  heroSubcopy:
    "Write building engineering reports more efficiently directly in Microsoft Word with Otto.",
  ottoFeatureIntro: {
    heading:
      "Otto helps engineers write reports faster without compromising accuracy or firm style.",
    bodyBefore:
      "Otto is an agent used by engineers to write reports more efficiently. Otto processes site data, builds report sections in the firm template, and surfaces accurate photos, notes, documents, and writing suggestions to the engineer ",
    bodyBold: "directly in Microsoft Word.",
  },
  reportTypesSection: {
    heading: "Write any report type.",
    body: "Otto works with a growing list of report types, and can adapt to produce any report the firm authors. Applied Reports works directly with firm engineers to adapt custom or novel templates and report types.",
    items: [
      {
        label: "Property Condition Assessments",
        icon: "/images/assets/icon-pca.png",
      },
      {
        label: "Roofing Condition Assessments",
        icon: "/images/assets/icon-rca.png",
      },
      {
        label: "Reserve Fund Studies",
        icon: "/images/assets/icon-rfs.png",
      },
      {
        label: "Site Observation Reports",
        icon: "/images/assets/icon-sor.png",
      },
      {
        label: "Environmental Site Assessments",
        icon: "/images/assets/icon-esa.png",
      },
      {
        label: "Additional Types",
        icon: "/images/assets/icon-more.png",
      },
    ],
  },
  ottoIntro: {
    heading: "A better way to write AEC reports.",
    body: "Otto is an agent used by engineers to write reports more efficiently. Otto processes site data, builds report sections in the firm template, and surfaces accurate photos, notes, documents, and writing suggestions to the engineer directly in Microsoft Word.",
  },
  productSteps: [
    {
      id: "01",
      title: "Process site visit data",
      summary: "Otto processes and analyzes site data.",
      body: "Otto accepts photographs, handwritten notes, drawings, documents, past reports, anything. Title, summary, components, date, key facts, system codes, and embedding are written as metadata. EXIF GPS and capture time is extracted from every photograph.",
      icon: "/images/assets/icon-inputs.png",
      iconPosition: "left" as const,
    },
    {
      id: "02",
      title: "Collate and create report",
      summary: "Otto builds report sections from firm templates.",
      body: "Site data inputs are mapped to each section through hybrid search. Photographs are clustered by capture time, system code, embedding, and GPS, then pinned to the matching roof area. Notes are transcribed and component descriptions parsed into the proper sections.",
      icon: "/images/assets/icon-creation.png",
      iconPosition: "right" as const,
    },
    {
      id: "03",
      title: "Write and review",
      summary: "Otto works directly in MS Word to write and review with the engineer.",
      body: "The add-in opens in the .docx report and provides accurate, relevant information from the site visit. Otto instantly formats and inserts photos. Otto gives report-ready writing suggestions in the firm's style and tone. The engineer writes and reviews all final copy. Otto handles everything else.",
      icon: "/images/assets/icon-writing.png",
      iconPosition: "left" as const,
    },
  ],
  builtFor: {
    heading: "Built for the built world.",
    items: [
      {
        title: "Tuned for building engineering",
        body: "Built on exclusive building, component, and systems classification datasets",
        icon: "/images/assets/icon-engineering.png",
      },
      {
        title: "Works off industry standards",
        body: "Otto understands ASTM standards, Uniformat, deficiencies, + more\nOtto also adopts firm standards",
        icon: "/images/assets/icon-standards.png",
      },
      {
        title: "Works in MS Word",
        body: "Otto runs directly in Word\nFind, check, and write faster without switching tabs",
        icon: "/images/assets/icon-integration.png",
      },
    ],
  },
  demoBanner: {
    heading: "Otto gives every engineer a managing partner to write with.",
    image: "/images/assets/demo-banner.jpg",
  },
  logos: {
    company: "/images/applied-reports-company-logo.svg",
    wordmark: "/images/applied-reports-logo.svg",
    arc: "/images/assets/arc-logo.png",
    heroHeightPx: 100,
  },
  images: {
    heroOverlay: "/images/assets/hero-overlay.png",
    footer: "/images/assets/footer-labs.jpg",
  },
  footer: {
    siteLabel: "appliedreports.com",
    emailLabel: "hello@appliedreports.com",
    copyrightName: "The Applied Reports Company",
  },
  ctaButton: {
    heightPx: 39,
    minWidthPx: 156,
    fontSizePx: 16,
    navHeightPx: 48,
    navPaddingX: 28,
    navFontSizePx: 18,
  },
  cta: {
    primary: {
      label: "Book a Demo",
      href: "https://cal.com/team/applied-reports/discovery-call",
      newTab: true,
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
