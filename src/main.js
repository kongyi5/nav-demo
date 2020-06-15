let keys = {
  0: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
  1: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
  2: ["z", "x", "c", "v", "b", "n", "m"],
  length: 3,
};

let hash = {
  q: "qq.com",
  w: "weibo.com",
  e: "ele.me",
  r: "renren.com",
  t: "tianya.com",
  y: "yahoo.com",
  u: "uc.com",
  i: "iqiyi.com",
  o: "opera.com",
  p: "pornhub.com",
  a: "acfun.com",
  s: "sohu.com",
  z: "zhihu.com",
  m: "mcdonalds.com.cn",
};

// 遍历 keys，生成 kbd 标签
let index = 0;
while (index < keys["length"]) {
  // 0 1 2
  let div1 = document.createElement("div");
  mainXXX.appendChild(div1);
  row = keys[index]; // 第一个数组 第二个数组 第三个数组

  let index2 = 0;
  while (index2 < row["length"]) {
    // 0-9 0-8 0-6
    kbdXXX = document.createElement("kbd");
    kbdXXX.textContent = row[index2];
    div1.appendChild(kbdXXX);
    index2 += 1;
  }
  index += 1;
}

document.onkeypress = (xxx) => {
  let key = xxx["key"];
  website = hash[key];
  // location.href = "http://" + website;
  window.open("https://" + website, "_blank");
};
