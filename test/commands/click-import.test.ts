import { importClick } from "../../src/commands/click-import"
import { PageType, Click, Message } from "../../src/types/clicks";
import { ResponseStatus } from "../../src/types/shared"
import { LOGINID, PASSWORD, CAMPAIGNTEST } from "../../src/util/secrets"

describe("Konnektive CRM - Import Clicks", () => {
    describe("SuccessFully Requests", () => {
        let validPayload: Click = {
            loginId: LOGINID,
            password: PASSWORD,
            campaignId: CAMPAIGNTEST,
            pageType: PageType.PRESELL,
            ipAddress: "127.0.0.1",
            requestUri: "http://localhost/?affId=000123&c1=[c1]&c2=[c2]"

        }
        it("import click successfully with affiliate ids", () => {
            return importClick(validPayload).then(response => {
                expect(response.result).toEqual(ResponseStatus.SUCCESS)
                expect((<Message>response.message).affVals.affId).toEqual("000123")
            })
        })
    })

    describe("Unsuccessfully Requests", () => {
        it("returns credentials error if credentials is invalid", () => {
            return importClick({
                loginId: "rafael",
                password: "123123",
                campaignId: "000",
                pageType: PageType.PRESELL,
                ipAddress: "127.0.0.1"

            }).then(response => {
                expect(response.result).toEqual(ResponseStatus.ERROR)
                expect(response.message).toEqual(expect.stringContaining('Could not authenticate credentials'));
            })
        })
    })

})
