import React from 'react';
import semver from 'semver';

export const VERSION = React.version;

export function is(range) {
  if (/&&/.test(range)) {
    throw new RangeError('&& may not work properly in ranges, apparently');
  }
  return semver.satisfies(VERSION, range, { includePrerelease: true });
}

export const REACT16 = is('16');
export const REACT17 = is('17');

// The shallow renderer in react 16 does not yet support batched updates. When it does,
// we should be able to go un-skip all of the tests that are skipped with this flag.
export const BATCHING = !REACT16 && !REACT17;

export const TODO_17 = function (condition) {
  return REACT17 && condition;
};
