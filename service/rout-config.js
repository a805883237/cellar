/**
 * ����·�������ļ�
 *
 * Created by v_zhaoxiaoqiang on 2015/6/3.
 */
module.exports = [
    {
        requestMethodType: 'GET',
        contentType: 'html',
        urlPath: '/articles/{articleId}', // ƥ�������·��
        modelPath: './articles',          // ��Ӧģ��·��
        method: 'data'                    // ģ�������Ӧ������Ĭ����data����
    }
];