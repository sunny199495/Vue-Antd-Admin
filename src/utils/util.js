import enquireJs from "enquire.js";

export function isDef(v) {
  return v !== undefined && v !== null;
}

/**
 * Remove an item from an array.
 */
export function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

export function safeLevel(item) {
  if (item.templateValue.title.level == 1) return "一级";
  else if (item.templateValue.title.level == 2) return "二级";
  else if (item.templateValue.title.level == 3) return "三级";
  else if (item.templateValue.title.level == 4) return "四级";
  else return "五级";
}

export function currentTime(time = +new Date()) {
  var date = new Date(time + 8 * 3600 * 1000);
  return date
    .toJSON()
    .substr(0, 19)
    .replace("T", " ")
    .replace(/-/g, "-");
}

export function isRegExp(v) {
  return _toString.call(v) === "[object RegExp]";
}

export function enquireScreen(call) {
  const handler = {
    match: function() {
      call && call(true);
    },
    unmatch: function() {
      call && call(false);
    },
  };
  enquireJs.register("only screen and (max-width: 767.99px)", handler);
}

const _toString = Object.prototype.toString;
