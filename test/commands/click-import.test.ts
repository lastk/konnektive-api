import { importClick } from "../../src/commands/click-import"
import { PageType, Click, ClickMessage } from "../../src/types/clicks";
import { ResponseStatus } from "../../src/types/shared"
import { LOGINID, PASSWORD, CAMPAIGNTEST } from "../../src/util/secrets"

describe("Konnektive CRM", () => {
    describe("Import click feature", () => {
        describe("Importing Presell", () => {
            let clickPayload: Click = {
                loginId: LOGINID,
                password: PASSWORD,
                campaignId: CAMPAIGNTEST,
                pageType: PageType.PRESELL,
                ipAddress: "127.0.0.1",
                requestUri: "http://localhost/?affId=000123&c1=[c1]&c2=[c2]"

            }
            it("import click successfully with affiliate ids when using valid data", () => {
                return importClick(clickPayload).then(response => {
                    expect(response.result).toEqual(ResponseStatus.SUCCESS)
                    expect((<ClickMessage>response.message).affVals.affId).toEqual("000123")
                })
            })
        })

        describe("Errors at importing click", () => {
            it("returns credentials error if credentials is invalid", () => {
                return importClick({
                    loginId: "donald",
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
})
