describe('Fourth Class Assignment', () => {
    Cypress.Commands.add('login', (username, password) => {
        cy.visit('http://172.31.1.20/#/auth/login');
        cy.request({
            method: 'POST',
            url: 'http://172.31.1.20/gateway/web-login',
            headers: {
                'Content-Type': 'multipart/form-data',
        
            },
            formData: true,
            body: {
                grant_type: 'password',
                username: username,
                password: password,
                user_type: 'WEB'

            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.wrap(response.body.data.access_token).as('accessToken');
        });
     it('Get Dashboard', () => {
        cy.login('Admin', 'admin');
        cy.get('@accessToken').then((token) => {
        cy.request({
            method: 'GET',
            url: 'http://172.31.1.20/gateway/webApi/dashboard/superAdmin',
            headers: {
            Authorization :`Bearer ${accessToken}`
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).eq(true);
            expect(response.body.message).eq('Dashboard Stats has been fetched successfully');
            expect(response.body.data[0].Label).eq('Co-operatives');
            const newLabel = response.body.data[0].Label;
            cy.log(newLabel);
            const countJson = response.body.length;
            console.log(countJson);

        })
     });
    });
        
            cy.request({
                method: 'GET',
                url: 'http://172.31.1.20/gateway/webApi/dashboard/transactionCount',
                headers: {

                    Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJicmFuY2hMaXN0IjpbXSwidXNlcl9uYW1lIjoiQWRtaW4iLCJpc0NsaWVudEFkbWluIjpmYWxzZSwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sInJvbGVzIjpbIlNVUEVSX0FETUlOSVNUUkFUT1IiXSwiZXhwIjoxNzE0MTM1OTIwLCJ1c2VySWQiOjEsImF1dGhvcml0aWVzIjpbIlJFUE9SVFNfQUREIiwiQ09NTUlTU0lPTl9ERUxFVEUiLCJDUkVESVRSRVFVRVNUX1VQREFURSIsIlJFUE9SVFNfVklFVyIsIkNSRURJVFJFUVVFU1RfREVMRVRFIiwiU0VUVExFTUVOVF9HTF9TRVRVUF9BREQiLCJDT01NSVNTSU9OX1VQREFURSIsIlNFVFRMRU1FTlRfR0xfU0VUVVBfVklFVyIsIkNPTU1JU1NJT05fQUREIiwiQ1JFRElUUkVRVUVTVF9BREQiLCJDUkVESVRSRVFVRVNUX1ZJRVciLCJTRVRUTEVNRU5UX0dMX1NFVFVQX1VQREFURSIsIkNPTU1JU1NJT05fVklFVyIsIlNFVFRMRU1FTlRfR0xfU0VUVVBfREVMRVRFIiwiUkVQT1JUU19VUERBVEUiLCJSRVBPUlRTX0RFTEVURSJdLCJqdGkiOiIyZGNhZDAyNi02ZWNmLTQ5YzYtYmViOS1kNjliZDY4MmNmYmMiLCJjbGllbnRfaWQiOiJjbGllbnRJZCJ9.jTcRh2uWOMcih-bwB2i6Q20qbQW6NkvloEx8bTAFAf4iLn8t84Qr0X3PJeNn2nfwGcGSffk_6LEMOhYuIhbJ4PZ62gJnsmbX63gWP_NmTYvgF8qhrLRiboLGkLMmJr02jnFcMQ91A_Wbc6LIHf0DQk_JNED6Gop_6DHe9XmJMRiGjAyreHn6Tb_GellMfCep2LlTTbfnryMiwM32m4Z5jq4k7jYk2jmCkb8_-2G1xUdKPNXGl-CoVvwp4Oyt4u8B60ekt_RAjgxPCDEpw7X_Q0AGloKHnU_PtMYpaG2jq2GoefVfzdgNQ1zB49_e5wQIePeDhZfkHKOXNLmKz1v9jw',
                },
            }).then((response) => {
                expect(response.status).to.eq(200);
                expect(response.message).to.eq('Max Transaction Per Client has been fetched successfully');
                expect(response.data.UTILITY[0].ClientName).to.eq('NAGARIK SAVING AND CREDIT CO-OPERATIVE LTD.,RUPAULIYA')
                const countJson = response.body.length;
                console.log(countJson);
            })
    });

});

