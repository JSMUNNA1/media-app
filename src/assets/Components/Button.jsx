const Button = ({ height, width, bgColor = "bg-button-color", children }) => {
  const buttonStyles = ` ${height} ${width} ${bgColor} text-white text-base font-semibold rounded-[20px] hover:text-orange-300`;

  return <button className={buttonStyles}>{children}</button>;
};

export default Button;
