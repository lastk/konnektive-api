import { ResponseStatus } from "./shared"

export interface Click {
    loginId: string;
    password: string;
    campaignId: string;
    pageType: PageType;
    ipAddress: string;
    userAgent?: string;
    requestUri?: string;
    sessionId?: string;
}

export enum PageType {
    PRESELL = "presellPage",
    LEAD = "leadPage",
    CHECKOUT = "checkoutPage",
    UPSELL1 = "upsellPage1",
    UPSELL2 = "upsellPage2",
    UPSELL3 = "upsellPage3",
    UPSELL4 = "upsellPage4",
    THANKYOU = "thankyouPage"
}

export interface AffVals {
    affId?: string;
    c1?: string;
    c2?: string;
    c3?: string;
}

export interface ClickMessage {
    sessionId?: string;
    pixel?: boolean;
    affVals: AffVals;
}

export interface ClickResponse {
    result: ResponseStatus;
    message?: ClickMessage | string;
}
