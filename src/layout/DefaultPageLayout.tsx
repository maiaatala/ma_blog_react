import "./DefaultPageLayout.css";
interface DefaultPageLayoutProps {
  children: React.ReactNode;
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

export const DefaultPageLayout = (props: DefaultPageLayoutProps) => {
  const { children, leftContent, rightContent } = props;

  return (
    <section>
      <aside>{leftContent}</aside>
      <main>{children}</main>
      <aside>{rightContent}</aside>
    </section>
  );
};
