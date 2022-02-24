export interface IAuthContext {
  user: {
    uid: string;
    nome: string;
    email: string | null 
  };
  handleSignUp({nome, email, password}:{nome:string; email:string; password:string}):void;
}