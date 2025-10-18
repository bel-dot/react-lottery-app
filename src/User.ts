interface IUser {
    id: number,
    name: string,
    birth: string,
    email: string,
    phone: string;
}

export default class User implements IUser {
    id: number;
    name: string;
    birth: string;
    email: string;
    phone: string;
    
    constructor(id: number, name: string, birth: string, email: string, phone: string) {
        this.id = id;
        this.name = name;
        this.birth = birth;
        this.email = email;
        this.phone = phone;
    }
}