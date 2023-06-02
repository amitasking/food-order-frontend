export class Order {
    constructor(empId : string, type : String | undefined, FoodItemId : string | undefined){
        this.empId = empId
        this.type = type;
        this.FoodItemId = FoodItemId
    }
    id : string | undefined
    date : Date | undefined
    empId : String | undefined
    type : String | undefined
    FoodItemId : String | undefined
}