require('datejs');

function combineUsers(...args) {
  const combinedObject = {
    users: []
  }

  args.forEach((arg) => {
    combinedObject.users.push(...arg);
  });

  combinedObject.merge_date = Date.today().toString("M/d/yyyy");

  return combinedObject;
}


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};