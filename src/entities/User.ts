import { GeneratorAdpter } from "../apresentation/utils/id-generator-adapter/id-generator-adapter";


export class User {
    public readonly id?: string;
    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
       this.name = props.name;
       this.email = props.email;
       this.password = props.password;
       this.id = id;

        if (!id) {
            this.id = new GeneratorAdpter().genrate()
        }
    }
}