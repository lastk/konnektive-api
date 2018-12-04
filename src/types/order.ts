import { ResponseStatus, KnkBoolean } from "./shared"

export interface Order {
    loginId: string;
    password: string;
    campaignId: string;
    orderId?: string;
    sessionId?: string;
    customerId?: string;
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
    ipAddress: string;
    billShipSame?: KnkBoolean;
    shipFirstName?: string;
    shipLastName?:  string;
    shipCompanyName?: string;
    shipAddress1?: string;
    shipAddress2?: string;
    shipPostalCode?: string;
    shipCity?: string;
    shipState?: string;
    shipCountry?: string;
    paySource: PaySource;
    cardNumber?: string;
    cardMonth?: string;
    cardYear?:  number;
    cardSecurityCode?: string;
    forceMerchantId?: KnkBoolean;
    preAuthBillerId?: string;
    preAuthMerchantTxnId?: string;
    salesTax?: number;
    taxExemption?: string;
    achAccountType?: AchAccountType;
    iban?: string;
    ddibc?: string;
    accountHolder?: string;
    forceQA?: KnkBoolean;
    SkipQA?: KnkBoolean;
    insureShipment?: KnkBoolean;
    product1_id: number;
    product1_qty?: number;
    product1_price?: number;
    product1_shipPrice?: number;
    [key: string]: any; // Make possible to add product{i}_id
    couponCode?: string;
    shipProfileId?: number;
    salesUrl?: string;
    affId?: string;
    sourceValue1?: string;
    sourceValue2?: string;
    sourceValue3?: string;
    sourceValue4?: string;
    sourceValue5?: string;
    custom1?: string;
    custom2?: string;
    custom3?: string;
    custom4?: string;
    custom5?: string;
    redirectsTo?: string;
    errorRedirectsTo?: string;
    eci?: string;
    xid?: string;
    cavv?: string;
    rebill_eci?: string;
    rebill_cavv?: string;
    disableCustomerDedup?: string;
    signature?: string;
}

export enum AchAccountType {
    CHECKING = "CHECKING",
    SAVINGS  = "SAVINGS"
}


export enum PaySource {
    CREDITCARD = "CREDITCARD",
    CHECK      = "CHECK",
    ACCTONFILE = "ACCTONFILE",
    COD        = "COD",
    DIRECTDEBIT = "DIRECTDEBIT",
    PREPAID    = "PREPAID",
    APPLEPAY   = "APPLEPAY",
    GOOGLEPLAY = "GOOGLEPLAY",
}


export interface Item {
    productId: string;
    name: string;
    qty: string;
    shipping: string;
    price: string;
    refundRemaining: string;
    purchaseStatus: string;
    billingCycleType: string;
    finalBillingCycle: string;
    nextBillDate: string;
}

export interface OrderMessage {
    orderId: string;
    sourceId?: any;
    sourceValue1?: any;
    sourceValue2?: any;
    sourceValue3?: any;
    shipCarrier: string;
    shipMethod: string;
    dateCreated: string;
    orderType: string;
    orderStatus: string;
    reviewStatus?: any;
    totalAmount: number;
    campaignName: string;
    customerId: number;
    name: string;
    emailAddress: string;
    phoneNumber: string;
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
    paySource: string;
    cardType: string;
    cardLast4: number;
    cardExpiryDate: string;
    achRoutingNumber?: any;
    achAccountNumber?: any;
    couponCode?: any;
    agentUserId?: any;
    basePrice: string;
    baseShipping: string;
    voiceLogNumber?: any;
    discountPrice: string;
    salesTax: string;
    shipUpcharge: string;
    shipProfileId?: any;
    currencySymbol: string;
    campaignId: number;
    amountPaid: string;
    totalDiscount: string;
    items: Item[];
}

export interface OrderResponse {
    result: ResponseStatus;
    message: OrderMessage | string;
}


