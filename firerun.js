fetch("https://playentry.org/graphql", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ko",
    "content-type": "application/json",
    "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"98\", \"Google Chrome\";v=\"98\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "x-client-type": "Client"
  },
  "referrer": "https://playentry.org/profile/5facc4019089070304dc9ce5/community/entrystory?sort=created",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"\\n    mutation CREATE_COMMENT(\\n        \\n    $content: String\\n    $image: String\\n    $sticker: String\\n    $target: String\\n    $targetSubject: String\\n    $targetType: String\\n    $groupId: ID\\n\\n    ) {\\n        createComment(\\n            \\n    content: $content\\n    image: $image\\n    sticker: $sticker\\n    target: $target\\n    targetSubject: $targetSubject\\n    targetType: $targetType\\n    groupId: $groupId\\n\\n        ) {\\n            warning\\n            comment {\\n                \\n    id\\n    user {\\n        \\n    id\\n    nickname\\n    username\\n    profileImage {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    status {\\n        following\\n        follower\\n    }\\n    description\\n    role\\n\\n    }\\n    content\\n    created\\n    removed\\n    blamed\\n    commentsLength\\n    likesLength\\n    isLike\\n    hide\\n    image {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n    sticker {\\n        \\n    id\\n    name\\n    label {\\n        \\n    ko\\n    en\\n    ja\\n    vn\\n\\n    }\\n    filename\\n    imageType\\n    dimension {\\n        \\n    width\\n    height\\n\\n    }\\n    trimmed {\\n        filename\\n        width\\n        height\\n    }\\n\\n    }\\n\\n            }\\n        }\\n    }\\n\",\"variables\":{\"content\":\"위대한 파이어런님ㅠㅠ 존경합니다...\",\"target\":\"620f24f3be86f6005684e35b\",\"targetSubject\":\"discuss\",\"targetType\":\"individual\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});
