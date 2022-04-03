const twTheme = require("tailwindcss/defaultTheme");

const createColorNames = (prefix) =>
  [
    "slate",
    "gray",
    "zinc",
    "neutral",
    "stone",
    "red",
    "orange",
    "amber",
    "yellow",
    "lime",
    "green",
    "emerald",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "fuchsia",
    "pink",
    "rose",
  ].flatMap((color) => {
    const shades = [
      "100",
      "200",
      "300",
      "400",
      "500",
      "600",
      "700",
      "800",
      "900",
    ];

    return shades.map((shade) => `${prefix}-${color}-${shade}`);
  });

const createClassNames = (prefix, values, extras = []) => {
  const classNames = values.flatMap((value) => [
    `${prefix}-${value}`,

    ...extras.map((extra) => `${prefix}-${extra}`),
  ]);

  return classNames;
};

const blur = Object.keys(twTheme.blur);
const brightness = Object.keys(twTheme.brightness);
const contrast = Object.keys(twTheme.contrast);
const grayscale = Object.keys(twTheme.grayscale);
const hueRotate = Object.keys(twTheme.hueRotate);
const invert = Object.keys(twTheme.invert);
const opacity = Object.keys(twTheme.opacity);
const saturate = Object.keys(twTheme.saturate);
const sepia = Object.keys(twTheme.sepia);
const spacing = Object.keys(twTheme.spacing);
const twAnimation = Object.keys(twTheme.animation);
const aspectRatio = Object.keys(twTheme.aspectRatio);
const backgroundImage = Object.keys(twTheme.backgroundImage);
const backgroundPosition = Object.keys(twTheme.backgroundPosition);
const backgroundSize = Object.keys(twTheme.backgroundSize);
const borderRadius = Object.keys(twTheme.borderRadius);
const borderWidth = Object.keys(twTheme.borderWidth);
const boxShadow = Object.keys(twTheme.boxShadow);
const twColumns = Object.keys(twTheme.columns);
const twContent = Object.keys(twTheme.content);
const cursor = Object.keys(twTheme.cursor);
const dropShadow = Object.keys(twTheme.dropShadow);
const flex = Object.keys(twTheme.flex);
const flexGrow = Object.keys(twTheme.flexGrow);
const flexShrink = Object.keys(twTheme.flexShrink);
const fontFamily = Object.keys(twTheme.fontFamily);
const fontSize = Object.keys(twTheme.fontSize);
const fontWeight = Object.keys(twTheme.fontWeight);
const gridAutoColumns = Object.keys(twTheme.gridAutoColumns);
const gridAutoRows = Object.keys(twTheme.gridAutoRows);
const gridColumn = Object.keys(twTheme.gridColumn);
const gridColumnEnd = Object.keys(twTheme.gridColumnEnd);
const gridColumnStart = Object.keys(twTheme.gridColumnStart);
const gridRow = Object.keys(twTheme.gridRow);
const gridRowEnd = Object.keys(twTheme.gridRowEnd);
const gridRowStart = Object.keys(twTheme.gridRowStart);
const gridTemplateColumns = Object.keys(twTheme.gridTemplateColumns);
const gridTemplateRows = Object.keys(twTheme.gridTemplateRows);
const letterSpacing = Object.keys(twTheme.letterSpacing);
const lineHeight = Object.keys(twTheme.lineHeight);
const listStyleType = Object.keys(twTheme.listStyleType);
const minHeight = Object.keys(twTheme.minHeight);
const minWidth = Object.keys(twTheme.minWidth);
const objectPosition = Object.keys(twTheme.objectPosition);
const order = Object.keys(twTheme.order);
const outlineOffset = Object.keys(twTheme.outlineOffset);
const outlineWidth = Object.keys(twTheme.outlineWidth);
const ringWidth = Object.keys(twTheme.ringWidth);
const ringOffsetWidth = Object.keys(twTheme.ringOffsetWidth);
const rotate = Object.keys(twTheme.rotate);
const scale = Object.keys(twTheme.scale);
const screens = Object.keys(twTheme.screens);
const skew = Object.keys(twTheme.skew);
const strokeWidth = Object.keys(twTheme.strokeWidth);
const textDecorationThickness = Object.keys(twTheme.textDecorationThickness);
const textUnderlineOffset = Object.keys(twTheme.textUnderlineOffset);
const transformOrigin = Object.keys(twTheme.transformOrigin);
const transitionDelay = Object.keys(twTheme.transitionDelay);
const transitionDuration = Object.keys(twTheme.transitionDuration);
const transitionProperty = Object.keys(twTheme.transitionProperty);
const transitionTimingFunction = Object.keys(twTheme.transitionTimingFunction);
const willChange = Object.keys(twTheme.willChange);
const zIndex = Object.keys(twTheme.zIndex);

export const tailwindClasses = [
  ...createColorNames("accent"),
  ...createClassNames("animate", twAnimation),
  ...createClassNames("aspect", aspectRatio),
  ...createClassNames("backdrop-blur", blur),
  ...createClassNames("backdrop-brightness", brightness),
  ...createClassNames("backdrop-contrast", contrast),
  ...createClassNames("backdrop-grayscale", grayscale),
  ...createClassNames("backdrop-hue-rotate", hueRotate),
  ...createClassNames("backdrop-invert", invert),
  ...createClassNames("backdrop-opacity", opacity),
  ...createClassNames("backdrop-saturate", saturate),
  ...createClassNames("backdrop-sepia", sepia),
  ...createColorNames("bg"),
  ...createClassNames("bg", backgroundImage),
  ...createClassNames("bg", opacity),
  ...createClassNames("bg", backgroundPosition),
  ...createClassNames("bg", backgroundSize),
  ...createClassNames("blur", blur),
  ...createColorNames("border"),
  ...createClassNames("border", opacity),
  ...createClassNames("rounded", borderRadius),
  ...createClassNames("border", borderWidth),
  ...createClassNames("shadow", boxShadow),
  ...createColorNames("shadow"),
  ...createClassNames("brightness", brightness),
  ...createColorNames("caret"),
  ...createClassNames("columns", twColumns),
  ...createClassNames("content", twContent),
  ...createClassNames("contrast", contrast),
  ...createClassNames("cursor", cursor),
  ...createColorNames("divide"),
  ...createClassNames("divide-y", borderWidth),
  ...createClassNames("divide-x", borderWidth),
  ...createClassNames("drop-shadow", dropShadow),
  ...createColorNames("fill"),
  ...createClassNames("basis", spacing),
  ...createClassNames("flex", flex),
  ...createClassNames("grow", flexGrow),
  ...createClassNames("shrink", flexShrink),
  ...createClassNames("font", fontFamily),
  ...createClassNames("text", fontSize),
  ...createClassNames("font", fontWeight),
  ...createClassNames("gap", spacing),
  ...createColorNames("from"),
  ...createColorNames("to"),
  ...createColorNames("via"),
  ...createClassNames("grayscale", grayscale),
  ...createClassNames("auto-cols", gridAutoColumns),
  ...createClassNames("auto-rows", gridAutoRows),
  ...createClassNames("col", gridColumn),
  ...createClassNames("col-end", gridColumnEnd),
  ...createClassNames("col-start", gridColumnStart),
  ...createClassNames("row", gridRow),
  ...createClassNames("row-end", gridRowEnd),
  ...createClassNames("row-start", gridRowStart),
  ...createClassNames("grid-cols", gridTemplateColumns),
  ...createClassNames("grid-rows", gridTemplateRows),
  ...createClassNames("height", spacing),
  ...createClassNames("hue-rotate", hueRotate),
  ...createClassNames("inset", spacing),
  ...createClassNames("invert", invert),
  ...createClassNames("tracking", letterSpacing),
  ...createClassNames("leading", lineHeight),
  ...createClassNames("list", listStyleType),
  ...createClassNames("m", spacing),
  ...createClassNames("ml", spacing),
  ...createClassNames("mr", spacing),
  ...createClassNames("mt", spacing),
  ...createClassNames("mb", spacing),
  ...createClassNames("mx", spacing),
  ...createClassNames("my", spacing),
  ...createClassNames("max-h", spacing),
  ...createClassNames("max-w", spacing),
  ...createClassNames("min-h", minHeight),
  ...createClassNames("min-w", minWidth),
  ...createClassNames("object", objectPosition),
  ...createClassNames("opacity", opacity),
  ...createClassNames("order", order),
  ...createColorNames("outline"),
  ...createClassNames("outline-offset", outlineOffset),
  ...createClassNames("outline-width", outlineWidth),
  ...createClassNames("p", spacing),
  ...createClassNames("pl", spacing),
  ...createClassNames("pr", spacing),
  ...createClassNames("pt", spacing),
  ...createClassNames("pb", spacing),
  ...createClassNames("px", spacing),
  ...createClassNames("py", spacing),
  ...createColorNames("ring"),
  ...createClassNames("ring", opacity),
  ...createClassNames("ring", ringWidth),
  ...createColorNames("ring-offset"),
  ...createClassNames("ring-offset", ringOffsetWidth),
  ...createClassNames("rotate", rotate),
  ...createClassNames("saturate", saturate),
  ...createClassNames("scale", scale),
  ...createClassNames("scale-x", scale),
  ...createClassNames("scale-y", scale),
  ...createClassNames("max-w-screen", screens),
  ...createClassNames("scroll-m", spacing),
  ...createClassNames("scroll-ml", spacing),
  ...createClassNames("scroll-mr", spacing),
  ...createClassNames("scroll-mt", spacing),
  ...createClassNames("scroll-mb", spacing),
  ...createClassNames("scroll-mx", spacing),
  ...createClassNames("scroll-my", spacing),
  ...createClassNames("scroll-p", spacing),
  ...createClassNames("scroll-pl", spacing),
  ...createClassNames("scroll-pr", spacing),
  ...createClassNames("scroll-pt", spacing),
  ...createClassNames("scroll-pb", spacing),
  ...createClassNames("scroll-px", spacing),
  ...createClassNames("scroll-py", spacing),
  ...createClassNames("sepia", sepia),
  ...createClassNames("skew", skew),
  ...createClassNames("space-y", spacing),
  ...createClassNames("space-x", spacing),
  ...createColorNames("stroke"),
  ...createClassNames("stroke", strokeWidth),
  ...createColorNames("text"),
  ...createColorNames("decoration"),
  ...createClassNames("decoration", textDecorationThickness),
  ...createClassNames("indent", spacing),
  ...createClassNames("text", opacity),
  ...createClassNames("underline-offset", textUnderlineOffset),
  ...createClassNames("origin", transformOrigin),
  ...createClassNames("delay", transitionDelay),
  ...createClassNames("duration", transitionDuration),
  ...createClassNames("transition", transitionProperty),
  ...createClassNames("translate-x", spacing, [
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4",
    "full",
  ]),
  ...createClassNames("translate-y", spacing, [
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4",
    "full",
  ]),
  ...createClassNames("ease", transitionTimingFunction),
  ...createClassNames("w", spacing, [
    "auto",
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4",
    "full",
  ]),
  ...createClassNames("h", spacing, [
    "auto",
    "1/2",
    "1/3",
    "2/3",
    "1/4",
    "2/4",
    "3/4",
    "full",
  ]),
  ...createClassNames("will-change", willChange),
  ...createClassNames("z-index", zIndex),

  "transition",
  "container",
  "flex",
  "inline-flex",
  "block",
  "inline-block",
  "inline",
  "hidden",
];
