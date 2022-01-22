import { User } from "../../entities/User";
import { EmailProvider } from "../../providers/protocols/email-provider";
import { UsersRepositories } from "../../repositories/protocols/user-repositories";
import { CreateUserTDO } from "./create-user-TDO";

export class CreateUser {
   constructor(
      //desse jeito já cria uma variável e seta no this
      private userRepository: UsersRepositories,
      private emailProvider: EmailProvider
   ) {

   }
   async execute(data: CreateUserTDO): Promise<any> {
      const userAlreadyExists = await this.userRepository.findByEmail(data.name)

      if (userAlreadyExists) {
         throw new Error('User already exists.')
      }

      const user = new User(data)
      await this.userRepository.save(user)

      this.emailProvider.sendEmail({
         to: {
            name: data.name,
            email: data.email
         },

         from: {
            name: "Equipe meu app",
            email: "meuapp@meuapp.com"
         },
         subject: 'Seja  bem-vindo à plataforma',
         body: '<h1>Você já pode realizar o login na nossa plataforma</h1>'
      })
   }
}