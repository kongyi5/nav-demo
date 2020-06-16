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

// 取出 localStorage 中的 zzz 对应的 hash
let hashInLocalStorage = JSON.parse(localStorage.getItem("zzz") || "null");
if (hashInLocalStorage) {
  hash = hashInLocalStorage;
}

// 遍历 keys，生成 kbd 标签
let index = 0;
while (index < keys["length"]) {
  // 0 1 2
  let div1 = document.createElement("div");
  div1.className = "row";
  main.appendChild(div1);
  row = keys[index]; // 第一个数组 第二个数组 第三个数组

  let index2 = 0;
  while (index2 < row["length"]) {
    // 0-9 0-8 0-6
    kbd = document.createElement("kbd");
    kbd.textContent = row[index2];
    kbd.className = "key";
    button = document.createElement("button");
    button.textContent = "编辑";
    button.id = row[index2];
    button.onclick = (xxxxx) => {
      // xxxxx.target 就是用户点击的元素
      key = xxxxx.target["id"]; // q w e r t
      x = prompt("给我一个网址"); // qq.com
      hash[key] = x; // hash 变更
      localStorage.setItem("zzz", JSON.stringify(hash));
    };
    kbd.appendChild(button);
    div1.appendChild(kbd);
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
