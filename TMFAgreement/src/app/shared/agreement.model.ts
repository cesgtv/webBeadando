export class Agreement {
    id: string;
    name: string;
    description: string;
    agreementType: string;
    status: string;
    agreementPeriod: number;
    version: string;
    // above!
    /*
    agreementAuthorization: AgreementAuthorization[];
    agreementItem: AgreementItem[];
    agreementSpecification: AgreementSpecificationRef;
    associatedAgreement: AgreementRef[];
    characteristic: Characteristic[];
    completionDate: number;
    documentNumber: number;
    engagedParty: RelatedParty[];
    href: string;
    initialDate: Date;
    statementOfIntent: string;
    */
}

// sub resources

export interface AgreementAuthorization {
    date: Date;
    signatureRepresentation: string;
    state: string;
}

export interface AgreementItem {
    product: ProductRef[];
    productOffering: ProductOfferingRef[];
    termOrCondition: AgreementTermOrCondition[];
}


export interface Characteristic {
    name: string;
    value: string;
    valueType: string;
}

export interface RelatedParty {
    referredType: string;
    href: string;
    id: string;
    name: string;
    role: string;
}

export interface AgreementTermOrCondition {
    description: string;
    id: string;
    validFor: number;
}

// relationships

export interface AgreementRef {
    referredType: string;
    href: string;
    id: string;
    name: string;
}

export interface AgreementSpecificationRef {
    referredType: string;
    href: string;
    id: string;
    name: string;
    description: string;
}

export interface ProductRef {
    referredType: string;
    href: string;
    id: string;
    name: string;
}

export interface ProductOfferingRef {
    referredType: string;
    href: string;
    id: string;
    name: string;
}
