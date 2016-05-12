module.exports=function () {
    var config={
        port:8004,
        devBaseUrl:'http://localhost',
        paths:{
            html:'./src/app/*.html',
            ts:'./src/app/**/*.ts',
            dist:'./dist',
        }
    }
    return config;
}