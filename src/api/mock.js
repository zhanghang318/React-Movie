import Mock from 'mockjs'
const {Random}  = Mock
export const musicTop = Mock.mock({
    'musicTopList|10':[{
        'uniquekey':'@natural',
        'title':'@ctitle(3,6)'
    }]
})
export const newList = Mock.mock({
    "newConList|5":[{
          'id':'@natural',
          'text':'@csentence(15,20)',
          'url': Random.image('150x150', Random.color(), '#FFF', Random.word(3, 5))
    }]
})
export const comment = Mock.mock({
    "commentList|10":[{
        'id':'@natural',
        'time': '@datetime(17-MM-dd HH:mm:ss)',
        'name': '@cname(3)',
        'content': '@cparagraph',
        'url': Random.image('50x50', Random.color(), '#FFF', Random.word(3, 5))
    }]
})
export const messages = Mock.mock({
    'messageList|5-8': [{
        'id': '@natural',
        'title': '@ctitle(5,10)',
        'name': '@name',
        'url': Random.image('40x40', Random.color(), '#FFF', Random.word(3, 5))
    }]
});

export const correlations = Mock.mock({
    'correlationList|5-8': [{
        'id': '@natural',
        'title': '@ctitle(6,10)',
        'name': '@name',
        'url': Random.image('40x40', Random.color(), '#FFF', Random.word(3, 5))
    }]
});
