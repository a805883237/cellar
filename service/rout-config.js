/**
 * 服务路由配置文件
 *
 * Created by v_zhaoxiaoqiang on 2015/6/3.
 */
module.exports = [
    {
        requestMethodType: 'GET',
        contentType: 'html',
        urlPath: '/articles/{articleId}', // 匹配的请求路径
        modelPath: './articles',          // 响应模块路径
        method: 'data'                    // 模块具体响应方法，默认是data方法
    }
];