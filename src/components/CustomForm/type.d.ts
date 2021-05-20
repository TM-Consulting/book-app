interface CustomFormProps {
  title: string;
  description: string;
  image?: string;
  btnLabel: string;
  search?: string;
  showSearch: boolean;
  progress?: number | null;

  handleClick: (e: any) => void;
  handleChange: (e: any) => void;
  handleSearch?: (e: any) => void;
}
