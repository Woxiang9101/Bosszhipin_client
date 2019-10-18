const {override, fixBabelImports, addLessLoader} = require('customize-cra');//修改

module.exports = function override(config, env) {
    return config;
};

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: true, //修改为true
    }),

    addLessLoader({
        javascriptEnabled: true,
        modifyVars: {
            // 'brand-primary': 'blue'
        }, //修改样式部分
    }),
);