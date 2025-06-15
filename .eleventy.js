module.exports = function (eleventyConfig) {
  // Pass through static assets
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addPassthroughCopy("site.js");
  eleventyConfig.addPassthroughCopy("**/assets");

  // Layout alias
  eleventyConfig.addLayoutAlias("default", "layout.njk");

  // Set Markdown options if needed (optional)
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/css/**/*.css'
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk"
  };
};
