import { Order, PaySource, OrderMessage} from "../../src/types/order"
import { importOrder } from "../../src/commands/order-import"

import { LOGINID, PASSWORD, CAMPAIGNTEST } from "../../src/util/secrets"
import { ResponseStatus } from "../../src/types/shared";

describe("Konnektive CRM - Import Orders", () => {
    describe("Successfully requests", () => {
        let validPayload: Order = {
            loginId: LOGINID,
            password: PASSWORD,
            campaignId: CAMPAIGNTEST,
            firstName: "Donald",
            lastName: "Duck",
            emailAddress: "donald.duck@raf.im",
            phoneNumber: "1199999999",
            address1: "some address",
            postalCode: "14800290",
            city: "salvador",
            state: "BA",
            country: "US",
            ipAddress: '127.0.0.1',
            billShipSame: 1,
            paySource: PaySource.CREDITCARD,
            cardNumber: "0000000000000000",
            cardMonth: "08",
            cardYear: 2022,
            cardSecurityCode: '100',
            product1_id: 177
        }

        return importOrder(validPayload).then(response => {
            expect( (<OrderMessage>response.message).orderId).toBeDefined();
            expect(response.result).toEqual(ResponseStatus.SUCCESS)
        })
    })

    describe("Unsuccessfully requests", () => {
        it("returns errors", () => {
            let invalidPayload: Order = {
                loginId: LOGINID,
                password: PASSWORD,
                campaignId: CAMPAIGNTEST,
                firstName: "Donald",
                lastName: "Duck",
                emailAddress: "donald.duck@raf.im",
                phoneNumber: "1199999999",
                address1: "some address",
                postalCode: "14800290",
                city: "salvador",
                state: "BA",
                country: "US",
                ipAddress: '127.0.0.1',
                billShipSame: 1,
                paySource: PaySource.CREDITCARD,
                cardNumber: "0000000000000000",
                cardMonth: "08",
                cardYear: 2022,
                cardSecurityCode: '100',
                product1_id: 66666666666 // invalid product ;P
            }

            return importOrder(invalidPayload).then(response => {
                expect(response.result).toEqual(ResponseStatus.ERROR)
            })
        })
    })
})
