interface Prop {
  children: string;
  color?: "primary" | "secondary" | "success";
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Prop) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
