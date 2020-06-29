export class UserModel {

    private id: number;
    private email: string;
    private first_name: string;
    private last_name: string;
    private avatar: string;

    constructor(dataUser) {
        this.id = dataUser && dataUser['id'] ? dataUser['id'] : -1;
        this.email = dataUser && dataUser['email'] ? dataUser['email'] : "";
        this.first_name = dataUser && dataUser['first_name'] ? dataUser['first_name'] : "";
        this.last_name = dataUser && dataUser['last_name'] ? dataUser['last_name'] : "";
        this.avatar = dataUser && dataUser['avatar'] ? dataUser['avatar'] : "";
    }

    getDataUser() {
        return { ...this }
    }

}