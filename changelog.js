/* 73efootball 更新日志与下载信息。每次发版 / 只更新资源时只改这个文件：
   - latest：当前正式版（下载按钮读取这里）
   - releases：从新到旧，type 为 "app"（发了新 APK）或 "resources"（只更新资源，App 版本号不变）
   页面（index.html）读取 window.CHANGELOG 渲染，不需要改页面结构。 */
window.CHANGELOG = {
  latest: {
    version: "1.0.0",
    resources: "2026.11.21",
    date: "2026-11-21",
    apkUrl: "https://github.com/7othreee/73football/releases/download/v1.0.0/73efootball-1.0.0.apk",
    apkSizeMB: 1962,          // 十进制 MB（与手机存储显示一致）
    resourcesSizeMB: 4552,    // 首次安装要下载的资源（整包）
    sha256: "2f7de4a1200a25bc6ebbcee4ee744b74d8f0bab17057b1c0048e305e1bb4d114",
    // 手动资源包（QQ 闪传 / 网盘）：有链接时页面显示下载按钮；没有就提示“稍后提供”。
    // 例：{ label: "QQ 闪传", url: "https://...", file: "73efootball-resources-3e2fdeec.zip", sizeMB: 4552 }
    packLinks: []
  },
  releases: [
    {
      type: "app",
      version: "1.0.0",
      resources: "2026.11.21",
      date: "2026-11-21",
      title: "首个在线版",
      items: [
        "资源改为在线下载：首次进入游戏自动下载（约 4.6GB），断线后可以接着下载，不用重新开始",
        "以后只更新资源时，只下载有变化的文件，不用重新安装 App",
        "App 有新版本时会弹窗提示，可以直接在 App 里下载更新包并安装，存档保留",
        "「关于」页可以切换「正式版 / 测试版」更新通道",
        "安装包从约 3.3GB 缩小到约 2GB",
        "「关于」页新增「导入资源包」：连不上 GitHub 时，可以用 QQ 闪传 / 网盘下载资源包后导入",
        "导入资源更快（实测约 1 分钟）",
        "修复：部分情况下点「进入游戏」提示 Static CPU source differs、无法进入",
        "资源更新后，如果需要重新打开 App 才能生效，会明确提示",
        "启动页显示 App 版本和资源版本（例如 1.0.0 · 资源 2026.11.21）",
        "新包名，可以和旧版本同时安装；旧版本的存档需要导出后再导入（见「从旧版本迁移存档」）"
      ]
    }
  ]
};
