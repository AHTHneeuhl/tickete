type TProps = {
  children: React.ReactNode;
};
const Wrapper: React.FC<TProps> = ({ children }) => {
  return <section className="px-32">{children}</section>;
};

export default Wrapper;
