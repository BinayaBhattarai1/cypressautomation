describe('CRUD Operation', () => {
    it('Create', () => {
        cy.request({
            method: "POST",
            url: "http://172.31.1.20/gateway/web-login",
            body: {
                grant_type: "password",
                username: "nagarik",
                password: "nagarik",
                user_type: "WEB"
            },
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Accept-Encoding': 'gzip, deflate',
                'Accept-Language': 'en-US,en;q=0.9',
                'Connection': 'keep-alive',
                'Content-Length': '452',
                'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundaryXzi0AZaFQIje7bQ6',
                'Host': '172.31.1.20',
                'Origin': 'http://172.31.1.20:9999',
                'Referer': 'http://172.31.1.20:9999/',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36'
            }
        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(200)
            Cypress.env('Token', response.body.data.access_token)
            const accessToken = Cypress.env('Token')
            cy.log(accessToken)
        })
    })
})
