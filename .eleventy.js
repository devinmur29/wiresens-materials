// .eleventy.js
module.exports = function (eleventyConfig) {

  // START: Custom Nunjucks Filter for startsWith
  // This needs to be inside the eleventyConfig function
  eleventyConfig.addNunjucksFilter("startsWith", function(str, prefix) {
    if (typeof str !== 'string' || typeof prefix !== 'string') {
      // console.warn("startsWith filter received non-string input:", str, prefix); // Optional: for debugging
      return false; // Handle non-string inputs gracefully
    }
    return str.startsWith(prefix);
  });
  // END: Custom Nunjucks Filter

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("site.css");
  eleventyConfig.addPassthroughCopy("site.js");
  eleventyConfig.addPassthroughCopy("**/assets");

  // Layout alias
  eleventyConfig.addLayoutAlias("default", "layout.njk");

  // Set BrowserSync options (if you're using it for live reloading)
  // Ensure this points to the correct output for your CSS, typically in _site
  eleventyConfig.setBrowserSyncConfig({
    files: './_site/site.css' // Changed from css/**/*.css to site.css as per your example
  });

  // Return your Eleventy configuration object
  return {
    dir: {
      input: ".",          // Your project root is the input directory
      includes: "_includes", // Your includes/partials directory
      data: "_data",       // Your data directory
      output: "_site"      // Your output directory for the built site
    },
    passthroughFileCopy: true, // Copy files not processed by Eleventy
    markdownTemplateEngine: "njk" // Use Nunjucks for Markdown files
  };
};