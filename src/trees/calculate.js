import _ from 'lodash';
import {
  isFile, getName, getMeta, getChildren,
} from '@hexlet/immutable-fs-trees';

const calculateSize = (tree) => {
  if (isFile(tree)) {
    return getMeta(tree).size;
  }
  return _.sum(getChildren(tree).map(calculateSize));
};

const du = (tree) => {
  const result = getChildren(tree).map((child) => [getName(child), calculateSize(child)]);
  return _.sortBy(result, [(child) => child[1]]).reverse();
};

export default du;
