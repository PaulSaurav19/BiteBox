// we will define the properties and properties type based on the response we get

export type User = {
    _id: string;
    email: string;
    name: string;
    contactNumber: string;
    addressLine1: string;
    addressLine2?: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
}