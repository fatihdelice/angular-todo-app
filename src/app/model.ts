export class Model {
    user;
    items;

    constructor() {
        this.user = "Fatih";
        this.items = [
            new TodoItem("Spor", true),
            new TodoItem("Sinema", false),
            new TodoItem("Kodlama", false),
            new TodoItem("Kahvaltı", false),
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description:any , action:any) {
        this.description = description;
        this.action = action;
    }
}