import { Lead, LeadMessage } from "../../src/types/lead"
import { importLead } from "../../src/commands/lead-import"
import { LOGINID, PASSWORD, CAMPAIGNTEST } from "../../src/util/secrets"
import { ResponseStatus } from "../../src/types/shared";

describe("Konnektive CRM", () => {

    describe("Import Lead feature", () => {

        describe("Importing leads", () => {
            it("imports a lead into konnektive crm", () => {
                let leadPayload: Lead = {
                    loginId: LOGINID,
                    password: PASSWORD,
                    campaignId: CAMPAIGNTEST,
                    ipAddress: "127.0.0.1",
                    firstName: "Donald",
                    lastName: "Fauntleroy Duck",
                    address1: "some address",
                    address2: "street",
                    postalCode: "14800",
                    city: "acme City",
                    state: "AC",
                    country: "BR",
                    emailAddress: "duck.donald@acme.ltda",
                    phoneNumber: "11911111111",
                    billShipSame: 1,
                }

                return importLead(leadPayload).then(response => {
                    expect(response.result).toEqual(ResponseStatus.SUCCESS)
                    expect((<LeadMessage>response.message).orderId).toBeDefined()
                })
            })
        })

        describe("Errors at importing lead", () => {
            it("returns errors with invalid lead requests do", () => {
                let invalidPayload: Lead = {
                    loginId: LOGINID,
                    password: PASSWORD,
                    campaignId: "____",
                    ipAddress: "127.0.0.1",
                    firstName: "Donald",
                    lastName: "Fauntleroy Duck",
                    address1: "some address",
                    address2: "street",
                    postalCode: "12345",
                    city: "acme City",
                    state: "AC",
                    country: "BR",
                    emailAddress: "duck.donald@acme.ltda",
                    phoneNumber: "11911111111",
                    billShipSame: 1,
                }

                return importLead(invalidPayload).then(response => {
                    expect(response.result).toEqual(ResponseStatus.ERROR)
                    expect(response.message).toBeDefined();
                })
            })
        })
    });
})
