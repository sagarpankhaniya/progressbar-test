interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button(props: ButtonProps) {
  return (
    <button className="form-button" {...props}>
      {props.label}
    </button>
  );
}

export default Button;
