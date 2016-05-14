module.exports=function () {
    var config={
        port:8004,
        devBaseUrl:'http://localhost',
        title:'React Template',
        paths:{
            html:'./src/app/*.html',
            ts:'./src/app/**/*.ts',
            dist:'./dist',
            build:'./build'
        }
    }
    return config;
}