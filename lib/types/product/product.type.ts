import { ProductOption } from "./product-option.type";

export type ProductBuyMode = "buy" | "rent" | "subscription" | "free" | "preorder" | "coming_soon" | "unavailable" | "other" | "contact";

export interface Product {
    id : string,
    name : string,
    basePrice : number,
    paiementFrequency : "once" | "year" | "month" | "week" | "day" | "hour" | "minute" | "second",
    baseImages? : string[],
    quantity : number,
    description : string,
    mode : ProductBuyMode,
    options : ProductOption[],
}

