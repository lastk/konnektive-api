import { ResponseStatus, KnkBoolean, DateCreated } from "./shared"

export interface Lead {
    loginId: string;
    password: string;
    campaignId: string;
    orderId?: string;
    firstName: string;
    lastName: string;
    companyName?: string;
    address1: string;
    address2?: string;
    postalCode: string;
    city: string;
    state: string;
    country: string;
    emailAddress: string;
    phoneNumber: string;
    ipAddress:   string;
    billShipSame?: KnkBoolean;
    shipFirstName?: string;
    shipLastName?: string;
    shipCompanyName?: string;
    shipAddress1?: string;
    shipAddress2?: string;
    shipPostalCode?: string;
    shipCity?: string;
    shipState?: string;
    shipCountry?: string;
    affId?: string;
    sourceValue1?: string;
    sourceValue2?: string;
    sourceValue3?: string;
    custom1?: string;
    custom2?: string;
    custom3?: string;
    custom4?: string;
    custom5?: string;
    disableCustomerDedup?: KnkBoolean;
}

export interface LeadMessage {
    billShipSame: KnkBoolean;
    customTaxSet: KnkBoolean;
    shipmentInsured: KnkBoolean;
    firstName: string;
    lastName: string;
    companyName?: any;
    address1: string;
    address2: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    shipFirstName: string;
    shipLastName: string;
    shipCompanyName?: any;
    shipAddress1: string;
    shipAddress2: string;
    shipCity: string;
    shipState: string;
    shipCountry: string;
    shipPostalCode: string;
    emailAddress: string;
    phoneNumber: string;
    campaignId: number;
    orderStatus: string;
    orderType: string;
    agentUserId: number;
    dateCreated: DateCreated;
    customerId: number;
    dateUpdated: string;
    orderId: string;
}

export interface LeadResponse {
    result: ResponseStatus;
    message: LeadMessage | string;
}


