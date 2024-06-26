import Nav from '../components/Nav/Nav';

export const items = [
  {
      label: 'Frontend',
      icon: 'pi pi-fw pi-upload',
      url: '/engineering/frontend'
  },
  {
    label: 'Angular',
    icon: 'pi pi-fw pi-upload',
    url: '/engineering/angular'
},
{
  label: 'React',
  icon: 'pi pi-fw pi-upload',
  url: '/engineering/react'
},
{
  label: 'Vue',
  icon: 'pi pi-fw pi-upload',
  url: '/engineering/vue'
},
{
  label: 'UI/UX',
  icon: 'pi pi-fw pi-upload',
  url: '/engineering/ui-ux'
},
{
  label: 'Soft Skills',
  icon: 'pi pi-fw pi-upload',
  url: '/engineering/soft-skills'
},
  {
      label: 'Backend',
      icon: 'pi pi-fw pi-search',
      url: '/engineering/backend'
  },
  {
    label: 'Design',
    icon: 'pi pi-fw pi-search',
    url: '/engineering/design'
  }
]

export default function SkillsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <Nav items={items} />
        <div className='p-1'>
        {children}
        </div>
      </section>
    )
  }