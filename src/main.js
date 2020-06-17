// 1. 初始化数据
let hashA = init();
let keys = hashA["keys"];
let hash = hashA["hash"];

// 2.生成键盘
generateKeyBoard(keys, hash);

// 3.监听用户动作
listenToUser(hash);

// 下面是工具函数
function getFromLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name) || "null");
}

function createTag(tagName) {
  return document.createElement(tagName);
}

function createSpan(textContent) {
  let span = createTag("span");
  span.textContent = textContent;
  span.className = "text";
  return span;
}

function createButton(id) {
  let button = createTag("button");
  button.textContent = "编辑";
  button.id = id;
  button.onclick = (xxxxx) => {
    // xxxxx.target 就是用户点击的元素
    let button2 = xxxxx.target;
    let img2 = button2.previousSibling;
    let key = button2["id"]; // q w e r t
    let x = prompt("给我一个网址"); // qq.com
    hash[key] = x; // hash 变更
    img2.src = "http://" + x + "/favicon.ico";
    img2.onerror = (xxx) => {
      xxx.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
    };
    localStorage.setItem("zzz", JSON.stringify(hash));
  };
  return button;
}

function createImage(domain) {
  let img = createTag("img");
  if (domain) {
    img.src = "http://" + domain + "/favicon.ico";
  } else {
    img.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
  }
  img.onerror = (xxx) => {
    xxx.target.src = "//i.loli.net/2017/11/10/5a05afbc5e183.png";
  };
  return img;
}

function init() {
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
    y: "youtube.com",
    u: "uc.com",
    i: "iqiyi.com",
    o: "opera.com",
    p: "pornhub.com",
    a: "acfun.com",
    s: "sohu.com",
    z: "zhihu.com",
    m: "mail.qq.com",
  };
  // 取出 localStorage 中的 zzz 对应的 hash
  let hashInLocalStorage = getFromLocalStorage("zzz");
  if (hashInLocalStorage) {
    hash = hashInLocalStorage;
  }
  return {
    keys: keys,
    hash: hash,
  };
}

function generateKeyBoard(keys, hash) {
  // 遍历 keys，生成 kbd 标签
  for (let index = 0; index < keys["length"]; index += 1) {
    // 0 1 2
    let div1 = createTag("div");
    div1.className = "row";

    main.appendChild(div1);

    let row = keys[index]; // 第一个数组 第二个数组 第三个数组
    for (let index2 = 0; index2 < row["length"]; index2 += 1) {
      // 0-9 0-8 0-6
      let span = createSpan(row[index2]);

      let button = createButton(row[index2]);

      let img = createImage(hash[row[index2]]);

      let kbd = createTag("kbd");
      kbd.className = "key";

      kbd.appendChild(span);
      kbd.appendChild(img);
      kbd.appendChild(button);

      div1.appendChild(kbd);
    }
  }
}

function listenToUser(hash) {
  document.onkeypress = (xxx) => {
    let key = xxx["key"];
    let website = hash[key];
    window.open("https://" + website, "_blank");
  };
}
