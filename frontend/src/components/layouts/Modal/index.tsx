import ReactDOM from 'react-dom';
import {ModalLayout} from './Modal'
import { TModalProps } from './types';

//const modalRoot = document.getElementById('modal');
const modalRoot = document.body;

export function Modal(props: TModalProps) {
  return ReactDOM.createPortal((<ModalLayout {...props}/>),modalRoot!)
}