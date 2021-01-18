module.exports = {
  processors: ["stylelint-processor-styled-components"],
  extends: [
    "stylelint-config-recommended",
    "stylelint-config-styled-components",
  ],
  rules: {
    "unit-allowed-list": [
      ["%", "em", "rem", "vw", "vh", "s", "ms", "deg", "vmin", "vmax", "fr"],
      {
        ignoreProperties: { px: ["media-feature-name"] },
      },
    ],
  },
}
