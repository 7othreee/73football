/* 73efootball 更新日志与下载信息 / Download info and changelog.
   每次发版 / 只更新资源时只改这个文件：
   - latest：当前正式版（下载按钮读取这里）
   - releases：从新到旧，type 为 "app"（发了新 APK）或 "resources"（只更新资源，App 版本号不变）

   【双语】任何文字都可以写成普通字符串（只有中文），或 { zh: "中文", en: "English" }；没写 en 时英文页显示中文。
   【条目】items 里每一项可以是：
       "修复：xxx"                                  // 字符串；以 修复： / 新增： / 优化： 开头会自动带标签（英文页显示 Fix / New / Improved）
       { zh: "修复：xxx", en: "Fix: xxx" }           // 双语
       { zh: "…", en: "…", img: "img/a.png", imgAlt: { zh: "说明", en: "caption" } }   // 条目下方带一张图，点击可放大
   【图片】把图片放进同目录的 img/ 文件夹，路径写 "img/xxx.png"（也可以是 https 地址）。
       release.images 是整个版本的图集（缩略图网格，点击放大）：
       images: [ { src: "img/a.png", caption: { zh: "新界面", en: "New UI" } }, { src: "img/b.png" } ]
       建议单张不超过 500KB（png/webp/jpg 均可），页面会懒加载。
   页面（index.html）读取 window.CHANGELOG 渲染，不需要改页面结构。 */
window.CHANGELOG = {
  latest: {
    version: "1.0.2",
    resources: "2026.11.21",
    date: "2026-11-21",
    apkUrl: "https://github.com/7othreee/73football/releases/download/v1.0.2/73efootball-1.0.2.apk",
    apkSizeMB: 1962,          // 十进制 MB（与手机存储显示一致）
    resourcesSizeMB: 4552,    // 首次安装要下载的资源（整包）
    sha256: "dde9ecba31df9bde24e6df34d3f9d6ba1eeda1ace4bd3d31d9fe9304f764a829",
    // QQ 闪传下载安装包：填完整 https 链接后页面显示可点击的「QQ 闪传下载」按钮；留空 "" 则显示「暂无」。
    // qqNote 可选，写提取码/有效期等提示，可写 { zh: "…", en: "…" }；没写则显示默认提示。
    qqUrl: "",
    qqNote: "",
    // 手动资源包（QQ 闪传 / 网盘）：有链接时页面显示下载按钮；没有就提示“稍后提供”。
    // 例：{ label: "QQ 闪传", url: "https://...", file: "73efootball-resources-3e2fdeec.zip", sizeMB: 4552 }
    packLinks: []
  },
  releases: [
    {
      type: "app",
      version: "1.0.2",
      resources: "2026.11.21",
      date: "2026-11-21",
      title: { zh: "检查更新与下载体验", en: "Update checks and download experience" },
      items: [
        { zh: "新增：「检查更新」，一个入口检查 App 更新、检查资源更新、切换更新通道",
          en: "New: \"Check for updates\" — check for app updates, check for resource updates and switch the update channel in one place" },
        { zh: "优化：App 更新提示改为启动器样式，可选「此版本不再提示」",
          en: "Improved: the app update prompt now matches the launcher style, with \"Don't remind me about this version\"" },
        { zh: "优化：第一次更新会先申请「安装未知应用」权限，从设置回来自动继续，不再重新下载",
          en: "Improved: the first in-app update asks for install permission first and continues by itself when you come back, without downloading again" },
        { zh: "优化：已下载好的新版本不会重复下载，点一下直接安装",
          en: "Improved: a new version that is already downloaded is not downloaded again — tap once to install" },
        { zh: "新增：资源下载面板，显示进度、速度、剩余时间，可暂停并接着下载；可选 GitHub 在线、QQ 闪传网站或导入资源包",
          en: "New: resource download panel with progress, speed and time left, pause and resume; choose GitHub online, the QQ site or import a resource pack" },
        { zh: "新增：国内加速线路，下载更慢时自动换线路",
          en: "New: faster mirror routes, with automatic fallback to another route when a download is slow or fails" },
        { zh: "新增：资源更新改为可选，发现更新后看更新日志，自己决定是否更新",
          en: "New: resource updates are now optional — read the changelog and decide whether to update" },
        { zh: "优化：更新说明按界面语言显示（中文界面看中文，其他语言看英文）",
          en: "Improved: update notes follow the app language (Chinese in a Chinese UI, English otherwise)" },
        { zh: "App 内更新使用差分包，约 2 MB，存档保留",
          en: "In-app updates use a small delta package (about 2 MB), and your saves are kept" }
      ]
    },
    {
      type: "app",
      version: "1.0.0",
      resources: "2026.11.21",
      date: "2026-11-21",
      title: { zh: "首个在线版", en: "First online release" },
      items: [
        { zh: "资源改为在线下载：首次进入游戏自动下载（约 4.6GB），断线后可以接着下载，不用重新开始",
          en: "Resources are now downloaded online: fetched automatically the first time you enter the game (about 4.6 GB), and resumable after a dropped connection" },
        { zh: "以后只更新资源时，只下载有变化的文件，不用重新安装 App",
          en: "Future resource-only updates download just the changed files, with no need to reinstall the app" },
        { zh: "App 有新版本时会弹窗提示，可以直接在 App 里下载更新包并安装，存档保留",
          en: "The app prompts you when a new version is available; download and install the update inside the app, and your saves are kept" },
        { zh: "「关于」页可以切换「正式版 / 测试版」更新通道",
          en: "New update channel switch (Stable / Beta) on the About page" },
        { zh: "安装包从约 3.3GB 缩小到约 2GB",
          en: "The installer shrank from about 3.3 GB to about 2 GB" },
        { zh: "「关于」页新增「导入资源包」：连不上 GitHub 时，可以用 QQ 闪传 / 网盘下载资源包后导入",
          en: "New \"Import resource pack\" on the About page: if GitHub is unreachable, download the pack from another source and import it" },
        { zh: "导入资源更快（实测约 1 分钟）",
          en: "Faster resource import (about 1 minute in testing)" },
        { zh: "修复：部分情况下点「进入游戏」提示 Static CPU source differs、无法进入",
          en: "Fix: in some cases tapping \"Enter game\" showed \"Static CPU source differs\" and could not proceed" },
        { zh: "资源更新后，如果需要重新打开 App 才能生效，会明确提示",
          en: "After a resource update, you are now told clearly if the app must be reopened for it to take effect" },
        { zh: "启动页显示 App 版本和资源版本（例如 1.0.0 · 资源 2026.11.21）",
          en: "The start page shows the app and resource versions (e.g. 1.0.0 · resources 2026.11.21)" },
        { zh: "新包名，可以和旧版本同时安装；旧版本的存档需要导出后再导入（见「从旧版本迁移存档」）",
          en: "New package name: it can be installed alongside the old version; old saves must be exported and then imported (see \"Migrate saves from an older version\")" }
      ]
    }
  ]
};
