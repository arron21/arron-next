import Nav from "../components/Nav/Nav"

export const items = [
  {
      label: 'Photography',
      icon: 'pi pi-fw pi-camera',
      url: '/skills/photography'
  },
  {
    label: 'Project Management',
    icon: 'pi pi-fw pi-camera',
    url: '/skills/project-management'
},
// {
//   label: 'Interior Design',
//   icon: 'pi pi-fw pi-camera',
//   url: '/skills/interior-design'
// },
]
export default function SkillsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {/* <Nav items={items} /> */}
        <div className="p-1">
          {children}
        </div>
      </>
    )
  }