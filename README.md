# West Lake Overclock · 西湖超频

杭州西湖的 3D 浏览器游戏。第二版加入四队机器人对战和缩圈机制。桌面用键盘和鼠标；手机和平板显示触屏按钮。浏览器需支持 WebGL 2。

补全了缺失的街景、48 个虚构店招、三种显卡玩法，以及安全区和队友地图标记。

此仓库的根目录包含可直接发布的网页版本。GitHub Pages 设置为从 `main` 分支的根目录发布。游戏不需要服务器或运行时 CDN。

[下载完整的可编辑源码](west-lake-overclock-source.zip)。解压后用 Node.js 22.12 或更新版本运行 `npm ci` 和 `npm run dev`。运行 `npm run build` 生成 `dist/`。

地图数据 © [OpenStreetMap contributors](https://www.openstreetmap.org/copyright)，依 [ODbL 1.0](https://opendatacommons.org/licenses/odbl/1-0/) 提供。修改后的数据见源码包内的地图数据文件。Three.js 的 MIT 许可见 [THREE-LICENSE.txt](THREE-LICENSE.txt)。
