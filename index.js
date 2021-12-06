const textToSvg=require("text-to-svg")

const textsvg=textToSvg.loadSync();
const attributes={
  fill:'blue',
  stroke:'yellow'
};
const option={
  x:0,
  y:0,
  fontSize:72,
  anchor:'top',
  attributes:attributes
}
const svg=textsvg.getSVG("hilalahmad",option)
console.log(svg)
