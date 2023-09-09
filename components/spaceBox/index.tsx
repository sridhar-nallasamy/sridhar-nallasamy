interface SpaceBoxProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function SpaceBox({
  children,
  className,
  ...otherProps
}: SpaceBoxProps) {
  return (
    <div
      className={`shadow-mine-2-10 bg-black-transparent rounded-lg flex items-center justify-center ${
        className ? className : ''
      }`}
      {...otherProps}
    >
      {children}
    </div>
  );
}
