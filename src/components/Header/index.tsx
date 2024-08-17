import Logo from "@/components/Logo";
import Link from "next/link";

export default function Header() {
	return <div className="grid gap-4 h-full grid-cols-12">
		<div className="col-start-2 col-span-8 h-full items-end flex animate-growh animate-growo">
			<Link href={'/sobre'}>
				<Logo />
			</Link>
		</div>

	</div>

}