export default function SkillsLayout({
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
