export type ProductOption = {
    title : string,
    items : ProductOptionItem[]
}
export type ProductOptionItem = {
    selected : boolean,
    name : string,
    stock? : number,
    price : number,
    priceMode : "add" | "multiply" | "replace",
    additionalInfos? : string[],
    images? : string[],
}