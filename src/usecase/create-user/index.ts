import { MailtrapEmailProvider } from "../../providers/protocols/implematations/mailtrapEmail-provider";
import { PostgresUserRepositories } from "../../repositories/implematations/postgres-users-repositories";
import { CreateUser } from "./create-user";
import { CreateUserController } from "./create-user-controller";

const postgresUserRepositories = new PostgresUserRepositories()
const mailtrapEmailProvider = new MailtrapEmailProvider()
const  createUser = new CreateUser(postgresUserRepositories, mailtrapEmailProvider)
const createUserController = new CreateUserController(createUser)

export {createUserController}