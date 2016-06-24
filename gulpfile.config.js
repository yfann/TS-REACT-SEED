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
            outCSS:baseOutput+'/css',
            outLib:baseOutput+'/libs',
            outName:'dist',
            build:'./build',
            jsLib:[
            'node_modules/react/dist/react.js',
            'node_modules/react-dom/dist/react-dom.js',
            'node_modules/react-router/umd/ReactRouter.js',
            'node_modules/fixed-data-table/dist/fixed-data-table.js'
            ],
            cssLib:['node_modules/bootstrap/dist/css/bootstrap.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.css',
            'node_modules/fixed-data-table/dist/fixed-data-table.css'],
            main:'./src/app/index.tsx'
        },
        externals:{
         "react": "React",
         "react-dom": "ReactDOM",
         "react-router":"ReactRouter",
         "fixed-data-table":"FixedDataTable"
        }
    }
    return config;
}