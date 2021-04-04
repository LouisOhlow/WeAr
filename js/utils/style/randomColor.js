const getRandomColor = () => {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  if (color.length === 6) {
    color += '5';
  }
  return color;
};

export default getRandomColor;
