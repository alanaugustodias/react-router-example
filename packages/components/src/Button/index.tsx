export default function Button({
  children,
  ...props
}: React.PropsWithChildren) {
  return (
    <button className="text-3xl font-bold underline p-10 border-8 bg-red" {...props}>
      {children}
    </button>
  );
}
