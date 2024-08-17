'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {

	const pathname = usePathname();

	return <div className="col-start-2 col-span-2 h-full items-start justify-start ">
		<ul className="w-full md:ml-20 flex md:flex-col">
			<MenuItem href={"sobre"} text="Sobre" path={pathname!} />
			<MenuItem href={"contato"} text="Contato" path={pathname!} />
		</ul>
	</div>
}

const MenuItem = ({ href, text, path }: { href: string, text: string, path: string }) => {
	return (
		<Link href={href} className={`${path === '/' + href && 'font-bold text-primary'}`}>
			<li className="p-4 border-secondary border-dotted border-y-2 border-b border-t md:border-t-0 first:border-t text-secondary hover:text-primary hover:font-bold">
				{text}
			</li>
		</Link>
	)
}