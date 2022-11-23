const each = (objects, fn) => {
  objects.forEach((object) => {
    fn.call(object);
  });
};

export default each;
