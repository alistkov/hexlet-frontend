const convert = (...dates) => {
  if (dates.length === 0) {
    return [];
  }

  return dates.map((date) => new Date(...date).toDateString());
};

export default convert;
