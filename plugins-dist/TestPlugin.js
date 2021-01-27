"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TestPlugin = void 0;

class TestPlugin {
  apply(complier) {
    const hooks = complier.hooks;
    hooks.emit.tap('test-plugin', compilation => {
      let filelist = 'In this build:\n\n'; // 遍历所有编译过的资源文件

      for (let filename in compilation.assets) {
        filelist += `- ${filename} \n`;
      } // 将列表作为新的资源文件，插入到webpack构建中


      compilation.emitAsset('filelist.md', {
        source: () => filelist,
        size: () => filelist.length,
        map: () => ({}),
        sourceAndMap: () => ({
          source: filelist,
          map: {}
        }),
        updateHash: () => {},
        buffer: () => Buffer.from(filelist)
      });
    });
  }

} // class TestPlugin {
//     apply(complier) {
//         const hooks = complier.hooks;
//         hooks.emit.tap('test-plugin', compilation => {
//             let filelist = 'In this build:\n\n';
//             // 遍历所有编译过的资源文件
//             for(let filename in compilation.assets) {
//                 filelist += `- ${filename} \n`
//             }
//             // 将列表作为新的资源文件，插入到webpack构建中
//             compilation.assets['filelist.md'] = {
//                 source: () => filelist,
//                 size: () => filelist.length
//             }
//         })
//     }
// }
// module.exports = TestPlugin


exports.TestPlugin = TestPlugin;
//# sourceMappingURL=TestPlugin.js.map