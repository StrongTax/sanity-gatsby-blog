export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6274be2379c03b2cf6dd7c49",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-3rpihs3g",
                  apiId: "d0b18a60-d075-40db-ac7a-d58248fb5a3f",
                },
                {
                  buildHookId: "6274be2398b0222e033ff2ce",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-rzpfastb",
                  apiId: "b994ae60-be1f-4128-9819-644f4df5c108",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/StrongTax/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-rzpfastb.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
