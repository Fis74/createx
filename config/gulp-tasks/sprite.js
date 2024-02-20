import svgSprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";
import svgmin from "gulp-svgmin";
import replace from "gulp-replace";
export const sprite = () => {
  return app.gulp
    .src(`${app.path.src.svgicons}`, {})
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: "SVG",
          message: "Error: <%= error.message %>",
        })
      )
    )
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
          $("[opacity]").removeAttr("opacity");
        },
        parserOptions: {
          xmlMode: true,
        },
      })
    )
    .pipe(replace("&gt;", ">"))
    .pipe(
      svgSprite({
        mode: {
          symbol: {
            sprite: "../img/icons/sprite/sprite.svg",
            //example: true
          },
        },
        shape: {
          id: {
            separator: "",
            generator: "",
          },
          transform: [
            {
              SVGO: {
                plugins: [
                  { removeXMLNS: true },
                  { convertPathData: false },
                  { removeViewBox: false },
                  { removeUnusedNS: false },
                  { removeUselessStrokeAndFill: true },
                  { cleanupIDs: false },
                  { removeComments: true },
                  { removeEmptyAttrs: true },
                  { removeEmptyText: true },
                  { collapseGroups: true },
                  { removeAttrs: { attrs: "(fill|stroke|style|opacity)" } },
                ],
              },
            },
          ],
        },
        svg: {
          rootAttributes: {
            style: "display: none;",
            "aria-hidden": true,
          },
          xmlDeclaration: false,
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.srcFolder}`));
};
