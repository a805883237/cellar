/**
 * ����·�������ļ�
 *
 * Created by v_zhaoxiaoqiang on 2015/6/3.
 */
module.exports = [
    {
        requestMethodType: 'GET',
        contentType: 'html',
        urlPath: '/articles/{articleId}', // ƥ�������·����������url������
        modelPath: 'articles',            // ��Ӧģ��·������ʵ����server��config��servicePath��ƴ�ӣ�
        method: 'data'                    // ģ�������Ӧ������Ĭ����data����
    }
];