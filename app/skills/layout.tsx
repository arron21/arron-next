import Nav from "../components/Nav/Nav"

export const items = [
  {
      label: 'Photography',
      icon: 'pi pi-fw pi-camera',
      url: '/skills/photography'
  },
]
export default function SkillsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Nav items={items} />
        {children}
      </section>
    )
  }