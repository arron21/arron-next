import Link from 'next/link'
import './Nav.css';


export default function Nav(props) {

    return (
        <nav>
        <ul className='flex flex-wrap'>
            {props.items.map((i) => (
                <li className='m-1 p-1'>
                    <Link href={i.url}>{i.label}</Link>
                    {i.items ? 
                    <ul>
                        {i.items && i.items.map((x)=> <li className='m-1 p-1'><Link href={x.url}>{x.label}</Link></li>)}
                    </ul> 
                    : null}

                </li>
            ))}
        </ul>
        </nav>

    )
  }