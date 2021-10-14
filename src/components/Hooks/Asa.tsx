import React from 'react';

export interface AllData {
}

export const mock: AllData = {
    hotList: [{   
        id: 369998,
        member: {
            username: '',
            url: '',
            avatar_large: 'string',
            avatar_mini: 'string',
            avatar_normal: 'string',
            id: 123,
            created: 123,
        },
        title: '求教：如果想挖优秀的 Python ，什么才算是有吸引力的条件?',
        image: 'https://cdn.v2ex.com/avatar/111a/37f8/160862_normal.png?m=1496204932',
        url:'http://www.v2ex.com/t/369998',
        content: '除了与能力相匹配的工资（ 20K+）、五险一金、双休、下午茶、高大上的办公环境、各种好相处的同事、早 10 晚 6:30 的工作时间（不加班）之外，还需要什么？求大神们赐教~~~~~',
        content_rendered: '除了与能力相匹配的工资（ 20K+）、五险一金、双休、下午茶、高大上的办公环境、各种好相处的同事、早 10 晚 6:30 的工作时间（不加班）之外，还需要什么？求大神们赐教~~~~~',
        replies: 74,
        last_modified: 'jason19659 ',
        last_reply_by: '168993',
        last_touched: '289003'
    },
    {
        id: 799959,
        member: {
            username: '',
            url: '',
            avatar_large: 'string',
            avatar_mini: 'string',
            avatar_normal: 'string',
            id: 12334,
            created: 123

        },
        title: '微信迁移wechat的朋友注意了， 转到wechat就无法登录网页版微信了，fuck',
        image: 'https://cdn.v2ex.com/avatar/cd15/3421/455199_normal.png?m=1630490634',
        url:'http://www.v2ex.com/t/799959',
        content: '早上点完确认，下午登录网页版发现登不上了。用网页版的朋友迁移需慎重呀',
        content_rendered: '早上点完确认，下午登录网页版发现登不上了。用网页版的朋友迁移需慎重呀',
        replies: 23,
        last_modified: 'sheep3',
        last_reply_by: '168993',
        last_touched: '289003'
    }],
    
    contents: [],
   
    ad: [{   
        title: '广告',
        image: 'images/11.png',
        url:'https://www.amazon.com.au/',
        content: 'Priming us to never leave the house'
    }]
}

export const V2exContext = React.createContext(mock)

interface V2exContextProviderProps {
    children: object
}

export const V2exContextProvider= (props: V2exContextProviderProps) => {
    const {children} = props

    return (
        <V2exContext.Provider value= {mock}>
            {children}
        </V2exContext.Provider>
    )
}