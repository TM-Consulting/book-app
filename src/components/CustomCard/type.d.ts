interface CustomCardProps {
  title: string; // add ?
  description: string;
  showBtn: boolean;
  imgUrl?: string;
  handleClick: (e: MouseEventHandler) => void;
}
