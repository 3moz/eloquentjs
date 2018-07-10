let map = { one: true, two: true, hasOwnProperty: true };

//console.log(map.hasOwnProperty("one"));
// error, not a function

/**
 * Can you think of a way to call hasOwnProperty on an object that has its own property by that name?
 * Remember that methods that exist on plain objects come from Object.prototype.Also remember that you
 * can call a function with a specific this binding by using its call method.
 */