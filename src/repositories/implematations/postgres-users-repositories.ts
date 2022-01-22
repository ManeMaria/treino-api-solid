import { User } from "../../entities/User";
import { UsersRepositories } from "../protocols/user-repositories";

export class PostgresUserRepositories implements UsersRepositories {
    private users: User[] = [];

    async findByEmail(email: string): Promise<User | undefined> {
        const user = this.users.find(user => user.email === email) 
        return user
    };
    async save(user: User): Promise<void> {
        this.users.push(user)
        console.log('users :>> ', this.users);
    };
}