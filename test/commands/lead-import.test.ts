import { Lead, LeadMessage } from "../../src/types/lead"
import { importLead } from "../../src/commands/lead-import"
import { LOGINID, PASSWORD, CAMPAIGNTEST } from "../../src/util/secrets"
import { ResponseStatus } from "../../src/types/shared";

describe("Konnektive CRm - Import Leads", () => {
    describe("Successfully Requests", () => {
        it("creates lead at crm", () => {
            let lead: Lead = {
                loginId: LOGINID,
                password: PASSWORD,
                campaignId: CAMPAIGNTEST,
                ipAddress: "127.0.0.1",
                firstName: "rafael",
                lastName: "oliveira",
                address1: "some address",
                address2: "street",
                postalCode: "14800",
                city: "salvador",
                state: "BA",
                country: "BR",
                emailAddress: "dev@avenida.agency",
                phoneNumber: "11911111111",
                billShipSame: 1,
            }

            return importLead(lead).then(response => {
                expect(response.result).toEqual(ResponseStatus.SUCCESS)
                expect((<LeadMessage>response.message).orderId).toBeDefined()
            })
        })
    })

    describe("Unsucessfully Requests", () => {
        it("returns errors with invalid lead requests do", () => {
            let invalidPayload: Lead = {
                loginId: LOGINID,
                password: PASSWORD,
                campaignId: "____",
                ipAddress: "127.0.0.1",
                firstName: "rafael",
                lastName: "oliveira",
                address1: "some address",
                address2: "street",
                postalCode: "14800",
                city: "salvador",
                state: "BA",
                country: "BR",
                emailAddress: "dev@avenida.agency",
                phoneNumber: "11911111111",
                billShipSame: 1,
            }

            return importLead(invalidPayload).then(response => {
                expect(response.result).toEqual(ResponseStatus.ERROR)
                expect(response.message).toBeDefined();
            })
        })
    })
})
