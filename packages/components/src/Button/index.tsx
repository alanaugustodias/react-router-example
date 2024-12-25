export default function Button({
  children,
  ...props
}: React.PropsWithChildren) {
  return (
    <button className="p-2 border-2 bg-red" {...props}>
      {children}
    </button>
  );
}
