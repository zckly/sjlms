// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Initialize the application
  initApp();
});

// Topics data structure
const topicsData = {
  computerUse: {
    id: "computer-use",
    title: "Computer Use",
    description:
      "Learn how to use Claude models to interact with a computer desktop environment",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/computer-use.svg",
    sections: [
      {
        label: "Resources",
        links: [
          {
            text: "Get started with our Computer Use quickstart",
            url: "https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo",
          },
          {
            text: "Implement Computer Use in your API",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/computer-use",
          },
          {
            text: "Learn about how Computer Use handles your data",
            url: "https://privacy.anthropic.com/en/articles/10030352-what-personal-data-will-be-processed-by-computer-use-beta",
          },
        ],
      },
      {
        label: "Insights",
        links: [
          {
            text: "Learn about how Computer Use was developed",
            url: "https://www.anthropic.com/news/developing-computer-use",
          },
          {
            text: "Read about the Computer Use launch",
            url: "https://www.anthropic.com/news/3-5-models-and-computer-use",
          },
        ],
      },
    ],
  },
  modelContextProtocol: {
    id: "model-context-protocol",
    title: "Model Context Protocol",
    description: "Build advanced applications with the Model Context Protocol",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/model-context-protocol.svg",
    sections: [
      {
        label: "Resources",
        links: [
          {
            text: "Read the MCP documentation",
            url: "https://modelcontextprotocol.io/",
          },
          {
            text: "Get started with MCP in Claude Desktop",
            url: "https://modelcontextprotocol.io/quickstart/user",
          },
          {
            text: "Use our ready-made MCP servers",
            url: "https://github.com/modelcontextprotocol/servers",
          },
        ],
      },
      {
        label: "Development",
        links: [
          {
            text: "Learn about upcoming MCP features",
            url: "https://modelcontextprotocol.io/development/roadmap",
          },
          {
            text: "Read about how MCP secures data access",
            url: "https://www.anthropic.com/news/model-context-protocol",
          },
          {
            text: "Contribute to MCP on GitHub",
            url: "https://github.com/modelcontextprotocol",
          },
        ],
      },
    ],
  },
  rag: {
    id: "rag",
    title: "Retrieval Augmented Generation (RAG)",
    description:
      "Build effective RAG systems to enhance AI responses with external data",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/retrieval-augmented-generation.svg",
    sections: [
      {
        label: "Resources",
        links: [
          {
            text: "Learn about how contextual retrieval works",
            url: "https://www.anthropic.com/news/contextual-retrieval",
          },
          {
            text: "Build a customer support agent with RAG",
            url: "https://github.com/anthropics/anthropic-quickstarts/tree/main/customer-support-agent",
          },
          {
            text: "Learn how to use embeddings with Claude",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/embeddings",
          },
        ],
      },
      {
        label: "Implementations",
        links: [
          {
            text: "Use Voyage AI for embeddings",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/third_party/VoyageAI/how_to_create_embeddings.md",
          },
          {
            text: "Integrate RAG with LlamaIndex",
            url: "https://github.com/anthropics/anthropic-cookbook/tree/main/third_party/LlamaIndex",
          },
          {
            text: "Build a RAG system with MongoDB",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/third_party/MongoDB/rag_using_mongodb.ipynb",
          },
          {
            text: "Build a RAG system with Pinecone",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/third_party/Pinecone/rag_using_pinecone.ipynb",
          },
        ],
      },
    ],
  },
  agents: {
    id: "agents",
    title: "Agents",
    description:
      "Build autonomous agents that understand, plan, and execute complex tasks",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/agents.svg",
    sections: [
      {
        label: "Documentation",
        links: [
          {
            text: "Learn about building effective agents",
            url: "https://www.anthropic.com/research/building-effective-agents",
          },
          {
            text: "Explore agent patterns with our cookbooks",
            url: "https://github.com/anthropics/anthropic-cookbook/tree/main/patterns/agents",
          },
        ],
      },
      {
        label: "Tools & Integration",
        links: [
          {
            text: "Integrate with Model Context Protocol",
            url: "https://modelcontextprotocol.io/",
          },
          {
            text: "Implement JSON Mode for reliable outputs",
            url: "https://docs.anthropic.com/en/docs/test-and-evaluate/strengthen-guardrails/increase-consistency",
          },
        ],
      },
    ],
  },
  evaluations: {
    id: "evaluations",
    title: "Evaluations",
    description:
      "Test and improve Claude's performance with structured evaluations",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/evaluations.svg",
    sections: [
      {
        label: "Learning",
        links: [
          {
            text: "Take our evaluation course",
            url: "https://github.com/anthropics/courses/blob/master/prompt_evaluations/README.md",
          },
          {
            text: "Learn how to build automated evaluations",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/misc/building_evals.ipynb",
          },
        ],
      },
      {
        label: "Documentation",
        links: [
          {
            text: "Read our evaluations documentation",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/develop-tests",
          },
          {
            text: "Use the Eval Tool on Claude Console",
            url: "https://docs.anthropic.com/en/docs/test-and-evaluate/eval-tool",
          },
        ],
      },
    ],
  },
  promptEngineering: {
    id: "prompt-engineering",
    title: "Prompt Engineering",
    description: "Create effective prompts that maximize Claude's performance",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/prompt-engineering.svg",
    sections: [
      {
        label: "Courses",
        links: [
          {
            text: "Complete our basic tutorial",
            url: "https://github.com/anthropics/courses/blob/master/prompt_engineering_interactive_tutorial/README.md",
          },
          {
            text: "Master real-world prompting techniques",
            url: "https://github.com/anthropics/courses/blob/master/real_world_prompting/README.md",
          },
        ],
      },
      {
        label: "Resources",
        links: [
          {
            text: "Explore our prompt engineering documentation",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",
          },
          {
            text: "Try our interactive prompt generator",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-generator",
          },
          {
            text: "Watch our prompt engineering roundtable",
            url: "https://www.youtube.com/watch?v=T9aRN5JkmL8",
          },
        ],
      },
    ],
  },
  toolUse: {
    id: "tool-use",
    title: "Tool Use",
    description:
      "Extend Claude's capabilities by connecting to external tools and APIs",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/tool-use.svg",
    sections: [
      {
        label: "Getting Started",
        links: [
          {
            text: "Read about tool use general availability",
            url: "https://www.anthropic.com/news/tool-use-ga",
          },
          {
            text: "Explore our tool use documentation",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/tool-use",
          },
        ],
      },
      {
        label: "Learning",
        links: [
          {
            text: "Explore our tool use cookbooks",
            url: "https://github.com/anthropics/anthropic-cookbook/tree/main/tool_use",
          },
          {
            text: "Take our tool use course",
            url: "https://github.com/anthropics/courses/blob/master/tool_use/README.md",
          },
          {
            text: "Watch our tool use demo video",
            url: "https://www.youtube.com/watch?v=6wkFb2_cUik",
          },
        ],
      },
    ],
  },
  vision: {
    id: "vision",
    title: "Vision",
    description:
      "Harness Claude's ability to understand and analyze visual information",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/vision.svg",
    sections: [
      {
        label: "Getting Started",
        links: [
          {
            text: "Read about Claude's vision capabilities",
            url: "https://www.anthropic.com/news/claude-3-5-sonnet",
          },
          {
            text: "Explore our vision documentation",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/vision",
          },
          {
            text: "Get started with vision in our cookbook",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/getting_started_with_vision.ipynb",
          },
        ],
      },
      {
        label: "Advanced Uses",
        links: [
          {
            text: "Learn best practices for vision",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/best_practices_for_vision.ipynb",
          },
          {
            text: "Extract text from images with Claude",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/how_to_transcribe_text.ipynb",
          },
          {
            text: "Analyze charts and graphs with Claude",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/multimodal/reading_charts_graphs_powerpoints.ipynb",
          },
        ],
      },
    ],
  },
  promptCaching: {
    id: "prompt-caching",
    title: "Prompt Caching",
    description:
      "Optimize performance and reduce costs by reusing Claude's responses",
    icon: "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/prompt-caching.svg",
    sections: [
      {
        label: "Documentation",
        links: [
          {
            text: "Read about prompt caching",
            url: "https://www.anthropic.com/news/prompt-caching",
          },
          {
            text: "Explore the prompt caching documentation",
            url: "https://docs.anthropic.com/en/docs/build-with-claude/prompt-caching",
          },
        ],
      },
      {
        label: "Implementation",
        links: [
          {
            text: "Implement prompt caching with our cookbook",
            url: "https://github.com/anthropics/anthropic-cookbook/blob/main/misc/prompt_caching.ipynb",
          },
          {
            text: "Watch our prompt caching explainer video",
            url: "https://youtu.be/h18BezoizkI?list=PLf2m23nhTg1OQAT3n_OD0g3P3gnK6pxW-",
          },
        ],
      },
    ],
  },
};

// Additional topics for work and personal pages
const additionalTopics = {
  artifacts: {
    id: "artifacts",
    title: "Artifacts",
    description:
      "Create, manage, and collaborate on files and other content in Claude.ai",
    icon: "",
    sections: [
      {
        label: "Resources",
        links: [
          {
            text: "Introduction to Artifacts",
            url: "https://support.anthropic.com/en/articles/9945615-intro-to-artifacts",
          },
        ],
      },
    ],
  },
  projects: {
    id: "projects",
    title: "Projects",
    description:
      "Organize your work and collaborate on complex tasks with Claude.ai Projects",
    icon: "",
    sections: [
      {
        label: "Resources",
        links: [
          {
            text: "Introduction to Projects",
            url: "https://support.anthropic.com/en/articles/9945648-intro-to-projects",
          },
        ],
      },
    ],
  },
  integrations: {
    id: "integrations",
    title: "Integrations",
    description:
      "Connect Claude.ai with your favorite tools to streamline your workflow",
    icon: "",
    sections: [
      {
        label: "Resources",
        links: [
          {
            text: "Using the GitHub integration",
            url: "https://support.anthropic.com/en/articles/9945670-using-the-github-integration",
          },
          {
            text: "Using the Analysis tool",
            url: "https://support.anthropic.com/en/articles/10227619-using-the-analysis-tool",
          },
          {
            text: "Using the Google Docs integration",
            url: "https://support.anthropic.com/en/articles/10389539-using-the-google-docs-integration",
          },
        ],
      },
    ],
  },
};

// Merge all topics
const allTopics = { ...topicsData, ...additionalTopics };

// Page-specific topic configurations
const pageTopics = {
  "build-ai-apps.html": ["computerUse", "modelContextProtocol", "rag"],
  "build-ai-apps-topics.html": [
    "computerUse",
    "modelContextProtocol",
    "rag",
    "agents",
    "evaluations",
    "promptEngineering",
    "toolUse",
    "vision",
    "promptCaching",
  ],
  "claude-for-work.html": ["artifacts", "projects", "integrations"],
  "claude-for-you.html": ["artifacts", "projects", "integrations"],
};

/**
 * Initialize the application
 */
function initApp() {
  console.log("Application initialized");

  // Generate HTML header programmatically
  generateHeader();

  // Render topics based on the current page
  renderTopics();

  // Update "See all" links to work in both environments
  updateSeeAllLinks();

  // Initialize accordions for topics section
  initTopicAccordions();
}

/**
 * Updates the "See all" links to work in both local and production environments
 */
function updateSeeAllLinks() {
  const seeAllLinks = document.querySelectorAll("a.see-all");

  if (seeAllLinks.length === 0) return;

  const isSkilljar = window.location.href.includes("skilljar.com");

  seeAllLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Only modify links that point to our HTML pages
    if (
      href &&
      (href.endsWith(".html") ||
        href === "build-ai-apps.html" ||
        href === "build-ai-apps-topics.html")
    ) {
      const pageName = href.replace(".html", "");

      if (isSkilljar) {
        // In Skilljar, use the /page/ format
        link.setAttribute("href", `/page/${pageName}`);
      }
      // Local links stay as they are with .html extension
    }
  });
}

/**
 * Generate HTML header programmatically
 */
function generateHeader() {
  // Create the navigation element
  const nav = document.createElement("nav");
  nav.className = "global-nav";

  // Create the logo container
  const logoDiv = document.createElement("div");
  logoDiv.className = "logotype";
  logoDiv.style.zIndex = "103"; // Ensure logo stays on top of fullscreen menu

  // Create logo link container
  const logoLink = document.createElement("a");
  logoLink.href = "https://anthropic.com";

  // Create image element for the logo, matching the original implementation
  const logoImg = document.createElement("img");
  logoImg.src =
    "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/anthropic-logo.svg";
  logoImg.alt = "Anthropic Logo";

  logoLink.appendChild(logoImg);
  logoDiv.appendChild(logoLink);

  // Create centered logomark for mobile
  const mobileLogomarkDiv = document.createElement("div");
  mobileLogomarkDiv.className = "centered-logo";

  const mobileLogomarkLink = document.createElement("a");
  mobileLogomarkLink.href = "https://anthropic.com";

  const mobileLogomarkImg = document.createElement("img");
  mobileLogomarkImg.src =
    "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/anthropic-logomark.svg";
  mobileLogomarkImg.alt = "Anthropic Logomark";

  mobileLogomarkLink.appendChild(mobileLogomarkImg);
  mobileLogomarkDiv.appendChild(mobileLogomarkLink);

  // Create the hamburger menu
  const hamburgerMenu = document.createElement("div");
  hamburgerMenu.className = "hamburger-menu";

  // Create the three lines for the hamburger icon
  for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    hamburgerMenu.appendChild(span);
  }

  // Create the links container
  const linksDiv = document.createElement("div");
  linksDiv.className = "links";

  // Create the tabs container
  const tabsDiv = document.createElement("div");
  tabsDiv.className = "tabs";

  // Get current page to highlight the active link
  const currentPage = window.location.pathname.split("/").pop();
  console.log("Current page:", currentPage);

  // Create navigation links from the original HTML
  const navigationLinks = [
    { text: "Research", href: "https://anthropic.com/research" },
    { text: "Company", href: "https://anthropic.com/company" },
    { text: "Careers", href: "https://anthropic.com/careers" },
    { text: "News", href: "https://anthropic.com/news" },
  ];

  // Create and append each navigation link
  navigationLinks.forEach((link) => {
    const anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.className = "nav-link";
    anchor.textContent = link.text;
    tabsDiv.appendChild(anchor);
  });

  // Create the CTA button (matching the original implementation)
  const ctaDiv = document.createElement("div");
  ctaDiv.className = "cta-button";

  const ctaLink = document.createElement("a");
  ctaLink.href = "https://claude.ai";

  const buttonLabel = document.createElement("div");
  buttonLabel.className = "button-label";
  buttonLabel.textContent = "Try Claude";

  ctaLink.appendChild(buttonLabel);
  ctaDiv.appendChild(ctaLink);

  // Remove placeholder div for mobile layout

  // Create a wrapper for tabs to help with centering
  const tabsWrapperDiv = document.createElement("div");
  tabsWrapperDiv.className = "tabs-wrapper";
  tabsWrapperDiv.style.flex = "1";
  tabsWrapperDiv.style.display = "flex";
  tabsWrapperDiv.style.flexDirection = "column";
  tabsWrapperDiv.style.justifyContent = "center";
  tabsWrapperDiv.style.width = "100%";
  tabsWrapperDiv.style.alignItems = "center";

  // Add tabs to the wrapper
  tabsWrapperDiv.appendChild(tabsDiv);

  // Append all elements to build the navigation
  linksDiv.appendChild(tabsWrapperDiv);
  linksDiv.appendChild(ctaDiv);
  nav.appendChild(logoDiv);
  nav.appendChild(mobileLogomarkDiv);
  nav.appendChild(hamburgerMenu); // Right side
  nav.appendChild(linksDiv);

  // Find where to insert the header
  const body = document.body;
  const firstChild = body.firstChild;

  // Insert the navigation at the beginning of the body
  // or before the first element inside skilljar-body
  const skilljarContent = document.getElementById("skilljar-body");
  if (skilljarContent) {
    skilljarContent.insertBefore(nav, skilljarContent.firstChild);
  } else {
    // If skilljar-body doesn't exist, insert at the beginning of body
    body.insertBefore(nav, firstChild);
  }

  // Create backdrop for mobile menu
  const backdrop = document.createElement("div");
  backdrop.className = "mobile-menu-backdrop";
  document.body.appendChild(backdrop);

  // No mobile-specific media query needed anymore since we removed the placeholder

  // Add event listener for hamburger menu
  hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    linksDiv.classList.toggle("active");
    backdrop.classList.toggle("active");

    // Prevent body scrolling when menu is open
    if (backdrop.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });

  // Close menu when backdrop is clicked
  backdrop.addEventListener("click", function () {
    hamburgerMenu.classList.remove("active");
    linksDiv.classList.remove("active");
    backdrop.classList.remove("active");
    document.body.style.overflow = "";
  });
}

/**
 * Render topics based on the current page
 */
function renderTopics() {
  // Get current page identifier from URL
  const currentPage = getCurrentPageIdentifier();

  // Find the topics list container
  const topicsListContainer = document.querySelector(".topics-list");
  if (!topicsListContainer) return;

  // Clear existing content
  topicsListContainer.innerHTML = "";

  // Get the topics for the current page
  const currentPageTopics = pageTopics[currentPage] || [];

  // Create and append topics
  currentPageTopics.forEach((topicKey) => {
    const topic = allTopics[topicKey];
    if (!topic) return;

    const topicElement = createTopicElement(topic);
    topicsListContainer.appendChild(topicElement);
  });
}

/**
 * Determines the current page identifier for both local and production environments
 * @returns {string} Page identifier used in the pageTopics mapping
 */
function getCurrentPageIdentifier() {
  const pathname = window.location.pathname;
  const url = window.location.href;

  // Default to index.html
  let pageId = "index.html";

  // Check if we're in Skilljar production environment
  if (url.includes("skilljar.com/page/")) {
    // Extract the last part of the URL path for Skilljar
    const matches = pathname.match(/\/page\/([^/?#]+)/);
    if (matches && matches[1]) {
      // Map Skilljar page names to our HTML file names
      const pageMap = {
        "build-ai-apps": "build-ai-apps.html",
        "build-ai-apps-topics": "build-ai-apps-topics.html",
        "claude-for-work": "claude-for-work.html",
        "claude-for-you": "claude-for-you.html",
      };

      pageId = pageMap[matches[1]] || "index.html";
    }
  } else {
    // Local development - use the file name directly
    const filename = pathname.split("/").pop();
    if (filename) {
      pageId = filename;
    }
  }

  console.log("Current page identified as:", pageId);
  return pageId;
}

/**
 * Create a topic element
 * @param {Object} topic - Topic data
 * @returns {HTMLElement} Topic element
 */
function createTopicElement(topic) {
  // Create topic item
  const topicItem = document.createElement("div");
  topicItem.className = "topic-item";

  // Create topic header
  const topicHeader = document.createElement("div");
  topicHeader.className = "topic-header";

  // Create topic icon only if icon is available and not empty
  if (topic.icon) {
    const topicIcon = document.createElement("div");
    topicIcon.className = "topic-icon";
    const iconImg = document.createElement("img");
    iconImg.src = topic.icon;
    iconImg.alt = topic.title;
    topicIcon.appendChild(iconImg);
    topicHeader.appendChild(topicIcon);
  }

  // Create topic content
  const topicContent = document.createElement("div");
  topicContent.className = "topic-content";

  const topicTitle = document.createElement("div");
  topicTitle.className = "heading-3 topic-title";
  topicTitle.textContent = topic.title;

  const topicDescription = document.createElement("p");
  topicDescription.className = "topic-description";
  topicDescription.textContent = topic.description;

  topicContent.appendChild(topicTitle);
  topicContent.appendChild(topicDescription);

  // Create topic arrow
  const topicArrow = document.createElement("div");
  topicArrow.className = "topic-arrow";

  const caretDown = document.createElement("img");
  caretDown.src =
    "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/caret-down.svg";
  caretDown.className = "caret-down";
  caretDown.alt = "Expand";

  const caretUp = document.createElement("img");
  caretUp.src =
    "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/caret-up.svg";
  caretUp.className = "caret-up";
  caretUp.alt = "Collapse";

  topicArrow.appendChild(caretDown);
  topicArrow.appendChild(caretUp);

  // Assemble topic header
  topicHeader.appendChild(topicContent);
  topicHeader.appendChild(topicArrow);

  // Create expanded content
  const topicContentExpanded = document.createElement("div");
  topicContentExpanded.className = "topic-content-expanded";

  // Create sections
  topic.sections.forEach((section) => {
    const topicSection = document.createElement("div");
    topicSection.className = "topic-section";

    const sectionLabel = document.createElement("div");
    sectionLabel.className = "section-label";

    const labelText = document.createElement("div");
    labelText.className = "label-text";
    labelText.textContent = section.label;

    sectionLabel.appendChild(labelText);

    const sectionLinks = document.createElement("div");
    sectionLinks.className = "section-links";

    // Create links
    section.links.forEach((link) => {
      const linkRow = document.createElement("div");
      linkRow.className = "link-row";

      const anchor = document.createElement("a");
      anchor.href = link.url;
      anchor.target = "_blank";
      anchor.textContent = link.text;

      const rightArrow = document.createElement("img");
      rightArrow.src =
        "https://raw.githubusercontent.com/zckly/sjlms/refs/heads/main/images/right-arrow.svg";
      rightArrow.className = "right-arrow";
      rightArrow.alt = "Arrow";

      linkRow.appendChild(anchor);
      linkRow.appendChild(rightArrow);

      sectionLinks.appendChild(linkRow);
    });

    topicSection.appendChild(sectionLabel);
    topicSection.appendChild(sectionLinks);

    topicContentExpanded.appendChild(topicSection);
  });

  // Related topics section removed

  // Assemble topic item
  topicItem.appendChild(topicHeader);
  topicItem.appendChild(topicContentExpanded);

  return topicItem;
}

/**
 * Initialize accordion functionality for the topics section
 */
function initTopicAccordions() {
  const topicItems = document.querySelectorAll(".topic-item");

  topicItems.forEach((item) => {
    const header = item.querySelector(".topic-header");

    if (header) {
      header.addEventListener("click", function () {
        // Toggle the active class on the topic item
        item.classList.toggle("active");

        // If we want to close other open accordions when opening a new one,
        // uncomment the following code:
        /*
                if (item.classList.contains('active')) {
                    topicItems.forEach(otherItem => {
                        if (otherItem !== item && otherItem.classList.contains('active')) {
                            otherItem.classList.remove('active');
                        }
                    });
                }
                */
      });
    }
  });
}
