interface ProfileFormProps {
  name: string;
  email: string;
  city:string;

  handleClick: (e: any) => void;
  handleChange: (e: any) => void;
}