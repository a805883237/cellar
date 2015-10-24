/**
 * Created by zhaoxiaoqiang on 15/10/13.
 *
 * 初始化网站(遗漏或更改后可以二次初始化)
 */
var config = require('./config.js');

// 根路径，config.rootLevel
rootPath = __dirname.replace(/\\/g, '/').split('/').slice(0, -1 * config.rootLevel).join('/');
// 获取的路径是所配置根路径的本地绝对路径，使用时把根路径加到前面(用于对目标路径的操作)
config.rootPath = rootPath + config.rootPath;

// 获取文章列表
var getArticleArr = require('./get-article-arr.js');
var articleArr = getArticleArr(config);
console.log(articleArr.length);

// 初始化data.json
var initDataJson = require('./init-json-data.js');
initDataJson(articleArr);

// 生成首页
var initIndexPage = require('./init-index-page.js');
initIndexPage(articleArr);

// 生成文章详情页和数据片段
var initArticleDetailPage = require('./init-article-detail.js');
initArticleDetailPage(articleArr);
