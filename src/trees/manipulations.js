import _ from 'lodash';
import {
  mkdir, mkfile, isFile, getChildren, getName, getMeta,
} from '@hexlet/immutable-fs-trees';

const compressImages = (tree) => {
  const children = getChildren(tree);
  const newChildren = children.map((child) => {
    const name = getName(child);
    if (!isFile(child) || !name.endsWith('.jpg')) {
      return child;
    }
    const meta = _.cloneDeep(getMeta(child));
    return mkfile(name, { ...meta, size: meta.size / 2 });
  });
  return mkdir(getName(tree), newChildren, _.cloneDeep(getMeta(tree)));
};

export default compressImages;
