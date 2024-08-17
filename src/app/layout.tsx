import Header from "@/components/Header";
import Menu from "@/components/menu/page";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alexandra Brito Bezerra",
	description: "Psicóloga/Psicanalista",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {


	return (
		<html lang="en">
			<body className={nunito.className + ' bg-background'}>
				<main className="flex h-screen">
					<div className="w-4 bg-primary h-full animate-growo2">
					</div>
					<div className="container mx-auto flex-1 grid grid-rows-12 grid-cols-12 gap-4">
						<div className="col-span-12 row-span-3 ">
							<Header />
						</div>
						<div></div>
						<div className="col-span-12 row-span-10 ">
							<div className="grid h-full grid-cols-12 gap-4 animate-growh animate-growo2 delay-[2000]">
								<Menu />
								<div className="md:col-start-5 col-start-2 row-start-5 md:row-start-1 col-span-10 md:col-span-6 h-full items-start flex flex-col ">
									{children}
								</div>
							</div>
						</div>
					</div>

				</main>
			</body>
		</html>
	);
}
