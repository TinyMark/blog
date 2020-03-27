module.exports = {
    // base: "/blog/",
    title: '好好学习，天天向上',
    dest: './dist',
    description: 'Just playing around',
    // permalink: "/:year/:month/:day/:slug",
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    themeConfig: {
        // 导航栏
        nav: [
            {
                text: '🙋‍♂️HELP',
                items: [
                    { text: '面试宝典', link: '/help/面试宝典.md' }
                ]
            },
            {
                text: '🔥新世界',
                items: [
                    // {
                    //     text: '你不知道系列', items: [
                    //         { text: 'CSS', link: '/新世界/你不知道的CSS.md' },
                    //         { text: 'JS', link: '/新世界/你不知道的JS.md' }
                    //     ]
                    // },
                    { text: '黑科技', link: '/新世界/黑科技.md' }
                ]
            },

            {
                text: '🙈算法修炼',
                items: [
                    {
                        text: '算法问题', items: [
                            { text: '十大经典排序算法', link: '/算法修炼/十大经典排序算法/十大经典排序算法.md' },
                            { text: '斐波那契数列', link: '/算法修炼/Fibonacci/斐波那契数列.md' }
                        ]
                    },
                    {
                        text: 'LeetCode', items: [
                            { text: 'JavaScript', link: '/算法修炼/LeetCode/JavaScript/JavaScript.md' }
                        ]
                    },
                    { text: '拍大腿', link: '/算法修炼/拍大腿/拍大腿的解法（还可以这样玩）.md' }
                ]
            }
        ],
        // sidebarDepth: 2,
        // 侧边栏
        sidebar: 'auto',
        // 显示所有页面的标题链接
        displayAllHeaders: true,
        // 搜索结果数量
        // searchMaxSuggestions: 10,
        // 最后更新时间
        lastUpdated: false, // string | boolean
        // lastUpdated: '上次更新', // string | boolean
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'tinymark',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '🤞GitHub',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
    },
    plugins: [
        ['@vuepress/medium-zoom', {
            selector: '.theme-default-content :not(a)>img'
        }],
        '@vuepress/back-to-top',
        // [
        //     'vuepress-plugin-comment',
        //     {
        //         choosen: 'gitalk',
        //         options: {
        //             clientID: '719dde2361e5d8b2df23',
        //             clientSecret: '27c918df26819be6c0ed03799f8399843949c3c4',
        //             repo: 'tinymark.github.io',
        //             owner: 'tinymark',
        //             admin: ['tinymark'],
        //             distractionFreeMode: false
        //         }
        //     }
        // ]
    ],
}