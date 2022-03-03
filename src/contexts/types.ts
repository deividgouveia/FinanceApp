export interface IAuthContext {
  user: {
    uid: string;
    nome: string;
    email: string | null 
  };
  loading: boolean;
  handleSignUp({nome, email, password}:{nome:string; email:string; password:string}):void;
  handleSignIn({email, password}:{email:string; password:string}):void;
}