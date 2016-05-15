module.exports=function () {
    var config={
        port:8004,
        devBaseUrl:'http://localhost',
        title:'React Template',
        paths:{
            html:'./src/app/*.html',
            css:'./src/app/**/*.css',
            ts:'./src/app/**/*.{js,ts,tsx}',
            dist:'./dist',
            distName:'dist',
            build:'./build',
            jsLib:['node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js'],
            cssLib:[],
            main:'./src/app/index.tsx'
        }
    }
    return config;
}