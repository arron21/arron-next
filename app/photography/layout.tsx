export default function PhotographyLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section>
        <div className="">
          {children}
        </div>
      </section>
    );
  }
  