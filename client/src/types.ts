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

export type MenuItem = {
    _id: string;
    name: string;
    price: number;
};

export type Restaurant = {
    _id: string;
    user: string;
    restaurantName: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    phoneNumber: string;
    deliveryPrice: number;
    estimatedDeliveryTime: number;
    cuisines: string[];
    menuItems: MenuItem[];
    imageUrl: string;
    lastUpdated: string;
}