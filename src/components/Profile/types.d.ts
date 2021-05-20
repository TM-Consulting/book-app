interface ProfileFormProps {
  name: string;
  email: string;
  city:string;
  enable?: boolean;

  handleClick: (e: any) => void;
  handleChange: (e: any) => void;
}