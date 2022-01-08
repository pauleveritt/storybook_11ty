# Storybook and 11ty

I'd like to do my 11ty work in a way similar to component-driven development.
With isolated, reusable units -- components -- which can be developed with Storybook and tested with Jest.
These components can be either Nunjucks macros or Eleventy shortcodes.

tl;dr What should Webpack target? 11ty needs `node`, Storybook doesn't like that.

## The Failure

Including this line:

```javascript
const TemplateRender = require("@11ty/eleventy/src/TemplateRender");
```

...leads to 11ty executing NodeJS code such as `fs`, which then breaks in Storybook because the engine/target isn't Node.
But then switching Webpack to Node via:

```javascript
config.target = "node";
```

...fails.
The build succeeds, but the loading of the Storybook site -- even the built version in `storybook-static` served from disk -- fails.
It brings up the page but the spinner stays forever because nothing else loads.
However, the dev console shows no errors and no 404 results.

## Background

This repo has a few things:

- A Nunjucks-based 11ty site
- A macro in `src/_includes/Banner.njk`
- A Storybook (type=html) install
- A story in `src/stories/Banner.stories.js`

## 11ty Rendering

Everything works fine if I render the Nunjucks macro directly, using Nunjucks.
Everything even works fine if I switch Storybook to Webpack 5 and use the `simple-nunjucks-loader` plugin for Webpack.

But I'd like my Storybook story to render using Eleventy.
This lets me gain all the 11ty configuration/features and use shortcodes instead of macros.

For this, I'm trying to mimic the approach in 11ty's `https://github.com/11ty/eleventy/blob/master/test/TemplateRenderNunjucksTest.js` file.
This uses `TemplateRender` and `TemplateConfig` to go through 11ty for rendering.

You can see my approach in `src/stories/Banner.stories.js`.

## Hacks I Did and the Result

- I switched out of webpack4 to webpack5 since simple-nunjucks-loader wanted that. 
Though it might not be needed, as I'm now letting 11ty render.
- Made a custom `.storybook/webpack.config.js`
  - Switched the target to node
  - Allowed much larger output files (over 3 MB) which I think came from packing a bunch of NodeJS code into the bundles