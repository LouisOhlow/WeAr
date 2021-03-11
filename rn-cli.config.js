'use strict';

const blacklist = require('react-native/packager/blacklist');
const path = require('path');

module.exports = {
  getProjectRoots() {
    return this._getRoots();
  },

  getAssetRoots() {
    return this._getRoots();
  },

  getAssetExts() {
    return ["obj", "mtl", "JPG", "vrx", "hdr", "gltf", "glb", "bin", "arobject", "gif", "MOV"];
  },

  getBlacklistRE() {
    return blacklist();
  },

  _getRoots() {
    // match on either path separator
    if (__dirname.match(/node_modules[\/\\]react-native[\/\\]packager$/)) {
      // packager is running from node_modules of another project
      return [path.resolve(__dirname, '../../..')];
    } else if (__dirname.match(/Pods\/React\/packager$/)) {
      // packager is running from node_modules of another project
      return [path.resolve(__dirname, '../../..')];
    } else {
      return [path.resolve(__dirname, '.')];
    }
  },

  getTransformModulePath() {
    return require.resolve('react-native/packager/transformer');
  },

};