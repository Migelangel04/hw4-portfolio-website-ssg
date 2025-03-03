module.exports = function(eleventyConfig) {
  // Process HTML files as templates
  eleventyConfig.addTemplateFormats("html");

  // Copy static assets
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("script.js");
  eleventyConfig.addPassthroughCopy("fonts");

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "includes",
      data: "data"
    },
    // Allow HTML files to use template features
    htmlTemplateEngine: "njk"
  };
};