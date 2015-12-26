<div class="article-detail-headers-container">
    <p><strong>文章目录</strong></p>
    <ul>
        <li v-for="item in headerTree">
            <a v-on:click="scrollToHeaderContent" data-value="{{item.id}}">{{item.text}}</a>
            <ul v-if="item.children.length > 0">
                <li v-for="item in item.children">
                    <a v-on:click="scrollToHeaderContent" data-value="{{item.id}}">{{item.text}}</a>
                </li>
            </ul>
        </li>
    </ul>
</div>
<div class="article-detail-container">{{{htmlContent}}}</div>
