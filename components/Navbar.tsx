import Link from 'next/link'
import Image from 'next/image'
import AuthProviders from './AuthProviders'
import { NavLinks } from '@/constants'

const Navbar = () => {
    const section = null
  return (
    <nav className="flexBetween navbar">
        <div className="flex-1 flexStart gap-10">
            <Link href="/">
                <Image 
                    src="/logo.svg"
                    width={115}
                    height={43}
                    alt="flexibble"
                />
            </Link>
            <ul className="xl:flex hidden text-small gap-7">
                {NavLinks.map((link) => (
                    <Link href={link.href} key={link.key}>
                        {link.text}
                    </Link>
                ))}
            </ul>
        </div>

        <div className="flexCenter gap-4">
          {section ? (
            <>
                UserPhoto

                <Link href="create-project">
                    Share Work
                </Link>
            </>
          ) : (
            <AuthProviders /> 
          )}  
        </div>
    </nav>
  )
}

export default Navbar