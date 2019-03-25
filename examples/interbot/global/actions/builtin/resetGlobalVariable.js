//CHECKSUM:636a38b3938d3d33eddefebcf4da3eb283ac9b6a24eecfa34af00e13ff25d477
"use strict";

/**
 * Reset a variable globally
 * @title Reset global variable
 * @category Storage
 * @author Botpress, Inc.
 * @param {string} name - The name of the variable
 */
const resetGlobalVariable = async name => {
  const key = bp.kvs.getGlobalStorageKey(name);
  await bp.kvs.removeStorageKeysStartingWith(key);
};

return resetGlobalVariable(args.name);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0R2xvYmFsVmFyaWFibGUuanMiXSwibmFtZXMiOlsicmVzZXRHbG9iYWxWYXJpYWJsZSIsIm5hbWUiLCJrZXkiLCJicCIsImt2cyIsImdldEdsb2JhbFN0b3JhZ2VLZXkiLCJyZW1vdmVTdG9yYWdlS2V5c1N0YXJ0aW5nV2l0aCIsImFyZ3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7Ozs7QUFPQSxNQUFNQSxtQkFBbUIsR0FBRyxNQUFNQyxJQUFOLElBQWM7QUFDeEMsUUFBTUMsR0FBRyxHQUFHQyxFQUFFLENBQUNDLEdBQUgsQ0FBT0MsbUJBQVAsQ0FBMkJKLElBQTNCLENBQVo7QUFDQSxRQUFNRSxFQUFFLENBQUNDLEdBQUgsQ0FBT0UsNkJBQVAsQ0FBcUNKLEdBQXJDLENBQU47QUFDRCxDQUhEOztBQUtBLE9BQU9GLG1CQUFtQixDQUFDTyxJQUFJLENBQUNOLElBQU4sQ0FBMUIiLCJzb3VyY2VSb290IjoiL1ZvbHVtZXMvYnAvYm90cHJlc3MvbW9kdWxlcy9idWlsdGluL3NyYy9iYWNrZW5kIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBSZXNldCBhIHZhcmlhYmxlIGdsb2JhbGx5XG4gKiBAdGl0bGUgUmVzZXQgZ2xvYmFsIHZhcmlhYmxlXG4gKiBAY2F0ZWdvcnkgU3RvcmFnZVxuICogQGF1dGhvciBCb3RwcmVzcywgSW5jLlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBUaGUgbmFtZSBvZiB0aGUgdmFyaWFibGVcbiAqL1xuY29uc3QgcmVzZXRHbG9iYWxWYXJpYWJsZSA9IGFzeW5jIG5hbWUgPT4ge1xuICBjb25zdCBrZXkgPSBicC5rdnMuZ2V0R2xvYmFsU3RvcmFnZUtleShuYW1lKVxuICBhd2FpdCBicC5rdnMucmVtb3ZlU3RvcmFnZUtleXNTdGFydGluZ1dpdGgoa2V5KVxufVxuXG5yZXR1cm4gcmVzZXRHbG9iYWxWYXJpYWJsZShhcmdzLm5hbWUpXG4iXX0=