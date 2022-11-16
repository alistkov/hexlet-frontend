import _ from 'lodash';
import { isFile, getName, getChildren } from '@hexlet/immutable-fs-trees';

const getHiddenFilesCount = (tree) => {
  const name = getName(tree);
  if (isFile(tree)) {
    return name.startsWith('.') ? 1 : 0;
  }
  const children = getChildren(tree);
  const hiddensFilesCount = children.map(getHiddenFilesCount);

  return _.sum(hiddensFilesCount);
};

export default getHiddenFilesCount;
