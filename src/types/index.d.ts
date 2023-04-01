interface Services {
  id: string;
  name: string;
  price: number[];
}

interface SpecialOffert {
  product: string;
  relatedProducts: string[];
}

interface DialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

interface BestPackage {
  elements: string[];
  price: number | undefined;
}
