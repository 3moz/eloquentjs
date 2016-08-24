obj1 = {
  a: 1,
  b: 2,
  c: 3
}
obj2 = {
  a: 1,
  c: 3,
  b: 2
}

function deepEqual(item1,item2) {
  //if both args are non-null objects ...
  if ((item1!=null) && (item2!=null) &&
     (typeof item1 == 'object') && (typeof item2 == 'object')) {
    //do they have the same number of properties?
    var propCountItem1 = 0
    var propCountItem2 = 0

    for (var prop in item1) {
      propCountItem1++
    }

    for (var prop in item2) {
      propCountItem2++
    }

    if (propCountItem1!=propCountItem2) {
      //if they don't have the same number of properties, return false.
      console.log(false);
      return false;
    } else {
      //if they do have the same number of properties, do they have the same
      //properties?
      for (var prop in item1) {
        if(item2.hasOwnProperty(prop)) {
          //if item2 has a property of item1, do those properties then have the
          //same value?
          deepEqual(item1[prop],item2[prop]);
        } else {
          console.log(false);
          return false;
        }
      }
    }

  //if both args are non-objects, are they equal?
  } else if (item1!==item2) {
  //if not, return false
    console.log(false);
    return false;
  } else {
    console.log(true);
    return true;
  }
}

deepEqual(obj1,obj2);
