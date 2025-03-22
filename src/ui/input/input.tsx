interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
}

function Input(props: InputProps) {
  return <input {...props} className="form-input" />;
}

export default Input;
