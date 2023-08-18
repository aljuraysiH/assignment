import { DTO } from "@/Models/DTO";

const Button = ({ children, className, onClick }: DTO.ButtonProps) => {
  return (
    <button onClick={onClick} className={`p-2 px-4 rounded-3xl border border-opacity-20 border-gray-100 text-white outline-none ${className || ""}`}>
      {children}
    </button>
  );
};

export default Button;
