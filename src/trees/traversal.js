import {
  mkdir, mkfile, isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';
import _ from 'lodash';

const downcaseFileNames = (tree) => {
  if (isFile(tree)) {
    return mkfile(getName(tree).toLowerCase(), _.cloneDeep(getMeta(tree)));
  }

  const newChildren = getChildren(tree).map(downcaseFileNames);
  return mkdir(getName(tree), newChildren, _.cloneDeep(getMeta(tree)));
};

export default downcaseFileNames;
