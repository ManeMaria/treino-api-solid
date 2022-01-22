
//protocólo de transferência de dados
// nessa caso da camada de infra (externa) para a domain (interna)
export interface CreateUserTDO {
    name: string;
    email: string;
    password: string;

}