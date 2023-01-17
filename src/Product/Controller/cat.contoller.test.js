const { Router, request } = require('express');
const { addCategory } = require('../cat.queries');

test.todo("Proper User Credentials"), async () => {
    const res = await req(app).post('/').send({
        user_id: "user_id",
        email: "email",
        password: "password"
    })
    expect(res.statusCode).toBe(200)
    expect(addCategory.calls.length).toBe(1)
}