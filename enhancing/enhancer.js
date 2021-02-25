module.exports = {
  success,
  fail,
  repair,
  get,
};


function success(item) {
  if (item.enhancement !== 20) {
    item.enhancement++;
  }
  return { ...item };
}


function fail(item) {
  if (item.enhancement < 15) {
    item.durability -= 5;
  } else if (item.enhancement >= 15) {
    item.durability -= 10;
  } else {
    item.durability--;
  }
  return { ...item };
}


function repair(item) {
  item.durability = 100;
  return { ...item };
}


function get(item) {
  if(item.name.charAt(0) === '[') {
    item.name = item.name.slice((item.name.indexOf(']')) + 2)
  }

  if (item.enhancement === 0) {
    return { ...item };
  } else {
    return { ...item, name: `[+${item.enhancement}] ${item.name}`};
  }
  
}