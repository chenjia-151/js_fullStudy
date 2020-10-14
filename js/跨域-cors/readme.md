http 头部字段：
    请求头:
        use-agent

    响应头:
        set-cookie  后端设置 cookie

    通用头：
        用在请求的时候
        Content-Type : application/x-form-url-endcode || application/json

        <input name="name" />
        <input name="pwd" />
        application/x-form-url-endcode: name=xxx&pwd=XXXX

        application/json: { name:xxx, pwd: XXX }

        multipart/form-data:
        ------分隔符-------
        name=xxx
        ------分隔符-------
        pwd=xxxx


        用在响应的时候
        content-type: image/jpeg  image/png  text/html  text/javascript
