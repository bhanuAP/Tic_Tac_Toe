const isSubSet = function(superset, subset) {
  return superset.every(function(element) {
    return subset.includes(element.toString());
  })
};
