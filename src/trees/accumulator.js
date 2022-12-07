import path from 'path';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

const findFilesByName = (tree, substring) => {
  const iter = (node, acc) => {
    const name = getName(node);
    const newAcc = path.join(acc, name);
    if (isFile(node)) {
      return name.includes(substring) ? newAcc : [];
    }
    return getChildren(node).flatMap((child) => iter(child, newAcc));
  };

  return iter(tree, '');
};

export default findFilesByName;
