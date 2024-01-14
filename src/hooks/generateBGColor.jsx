// Generates random background color
const randomRGB = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var rgb = "rgb(" + x + "," + y + "," + z + ")";
  return rgb;
};

export default randomRGB;
