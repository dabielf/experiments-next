import React from "react";
import Link from "next/link";

export default function Experiment1() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-8">
			<h1 className="text-3xl font-bold mb-6">Experiment 1</h1>
			<p className="text-lg mb-8">Welcome to the first experiment!</p>
			<div className="space-y-4">
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
					Start Experiment
				</button>
				<Link
					href="/"
					className="block text-center text-blue-500 hover:underline"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
}
