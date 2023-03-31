interface Services {
  id: string;
  name: string;
  price: number[];
}

interface DialogProps {
  isOpen: boolean;
  handleClose: () => void;
}
