import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<nav className="flex gap-4">
					<Link href="/experiments/ex1" className="hover:underline">
						Experiment 1
					</Link>
					<Link href="/experiments/ex2" className="hover:underline">
						Experiment 2
					</Link>
					<Link href="/experiments/ex3" className="hover:underline">
						Experiment 3
					</Link>
				</nav>
			</main>
		</div>
	);
}
