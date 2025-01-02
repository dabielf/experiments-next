"use client";

import React from "react";
import Link from "next/link";
import { motion } from "motion/react";

export default function Experiment1() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-center p-8">
			<motion.div
				className="text-3xl font-bold mb-6"
				initial={{ y: -20, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8 }}
			>
				Experiment 1
			</motion.div>
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
