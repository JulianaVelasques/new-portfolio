import Styles from '../styles/components/Button.module.css';

interface ButtonProps {
  color: string;
  children: string;
  icon?: any;
  hasIcon?: Boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button style={{ backgroundColor: props.color }} className={Styles.container}>
      {props.children}
      {props.hasIcon ? <img src={props.icon} className={Styles.img} /> : ''}
    </button>
  );
}
