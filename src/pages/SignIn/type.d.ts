interface SignInProps{
      email?: string;
      password?: string;
      confirm?: string;

      handleClick?: (e: any) => void;
      handleChange?: (e: any) => void;
      
}