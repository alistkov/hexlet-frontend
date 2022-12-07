import yup from 'yup';

const genres = [
  'drama', 'horror', 'fantasy', 'classic',
];

const getInvalidBooks = (books) => {
  const bookSchema = yup.object({
    name: yup.string().required(),
    author: yup.string().required(),
    pagesCount: yup.number().positive(),
    link: yup.string().min(1).url(),
    genre: yup.string().oneOf(genres),
  });

  return books.filter((book) => !bookSchema.isValidSync(book));
};

export default getInvalidBooks;
