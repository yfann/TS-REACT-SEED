module.exports=function () {
    
    var baseOutput='./dist';
    
    var config={
        port:8004,
        devBaseUrl:'http://localhost',
        title:'React Template',
        paths:{
            index:'./src/app/index.html',
            css:'./src/app/**/*.css',
            ts:'./src/app/**/*.{js,ts,tsx}',
            out:baseOutput,
            outScript:baseOutput+'/scripts',
            outCss:baseOutput+'/css',
            outLib:baseOutput+'/libs',
            outName:'dist',
            build:'./build',
            jsLib:['node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js'],
            cssLib:[],
            main:'./src/app/index.tsx'
        }
    }
    return config;
}