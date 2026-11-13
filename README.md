# West Lake Overclock · 西湖超频

杭州西湖的 3D 浏览器游戏。桌面用键盘和鼠标；手机和平板显示触屏按钮。浏览器需支持 WebGL 2。

此仓库的根目录包含可直接发布的网页版本。在 GitHub 的 **Settings → Pages**，选择 **Deploy from a branch → main → / (root)**。游戏不需要服务器或运行时 CDN。

[下载完整的可编辑源码](west-lake-overclock-source.zip)。解压后用 Node.js 22.12 或更新版本运行 `npm ci` 和 `npm run dev`。运行 `npm run build` 生成 `dist/`。

地图数据 © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)，依 [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/) 提供。修改后的数据在源码包内的 `geo.js` 与 `hubin_data.js`。Three.js 的 MIT 许可见 [THREE-LICENSE.txt](THREE-LICENSE.txt)。
