interface ButtonProps {
  children?: React.ReactNode;
}

const ButtonUi = (props: ButtonProps) => {
  return <button>{props.children}</button>;
};

export default ButtonUi;