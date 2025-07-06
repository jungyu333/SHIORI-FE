import { ReactNode } from 'react';
import { FormBox } from './FormCard.style';

type Props = {
  children: ReactNode;
};

export default function FormCard({ children }: Props) {
  return <FormBox>{children}</FormBox>;
}
