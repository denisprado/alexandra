'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {

	const pathname = usePathname();

	return <div className="col-start-2 col-span-2 h-full items-start justify-start ">
		<ul className="w-full flex md:flex-col md:first:border-b-0 ">
			<MenuItem href={"sobre"} text="Sobre" path={pathname!} />
			<MenuItem href={"contato"} text="Contato" path={pathname!} />
		</ul>
	</div>
}

const MenuItem = ({ href, text, path }: { href: string, text: string, path: string }) => {
	return (
		<Link href={href} className={`text-secondary hover:text-primary hover:font-bold ${path === '/' + href && 'font-bold text-primary bg-primary/15 hover:text-primary'}`}>
			<li className="p-4 border-secondary border-dotted border-y-2 border-b border-t   ">
				{text}
			</li>
		</Link>
	)
}