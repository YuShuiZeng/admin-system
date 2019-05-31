const Mock = require('mockjs');

function user() {
    return {
        user: Mock.mock({
            "code": 200,
            "data": {
                "userid": "@id()",
                "username": "@cname()",
                "date": "@date()",
                "avatar": "@image('200x200','red','#fff','avatar')",
                "description": "@paragraph()",
                "ip": "@ip()",
                "email": "@email()"
            }
        })
    }
}

module.exports = {
    userInfo: user()
}