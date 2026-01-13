type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "dark" | "ghost";
    size?: "normal" | "small";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({children, className, variant = "primary", size = "normal", ...props}: ButtonProps) {
    const baseStyle = "inline-flex gap-2 duration-300 ease-in-out justify-center items-center cursor-pointer"
    const variantStyle = {
        primary: "bg-primary text-white hover:bg-primary/80",
        dark: "bg-dark text-white hover:bg-dark/80",
        ghost: "bg-transparent text-black hover:text-primary"
    }
    const sizeStyle = {
        normal: "py-2 px-8",
        small: "py-2 px-4"
    }
  return (
    <button className={`${baseStyle} ${variantStyle[variant]} ${sizeStyle[size]} ${className}`} {...props}>
        {children}
    </button>
  )
}
