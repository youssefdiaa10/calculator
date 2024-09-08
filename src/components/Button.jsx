const Button = ({ text, style, action }) => {
  return (
    <>
      <button
        onClick={action}
        type="button"
        className={`${style} ${text === "=" ? "col-span-2" : ""}`}
        id={`${text}`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
