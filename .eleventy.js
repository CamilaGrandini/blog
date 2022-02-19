module.exports = function(eleventyConfig) {

    //add css support
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addWatchTarget("./src/css");

    //add image support
    eleventyConfig.addPassthroughCopy("./src/img");

    //return object options
    return {
        dir: {
            input: "src",
        },
    };
};