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
				transition={{ duration: 0.6, ease: "easeOut" }}
			>
				Experiment 1 - Animated SVG Line
			</motion.div>

			<div className="space-y-4">
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<div className="text-white text-2xl font-bold py-2 px-4">
					This is the
					<span className="relative ml-1">
						Experiment
						<svg
							className="absolute -top-2 -left-2 -right-2 -bottom-2"
							viewBox="0 0 303 79"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<motion.path
								initial={{ pathLength: 0 }}
								animate={{ pathLength: 1 }}
								transition={{ duration: 0.6, ease: "easeOut" }}
								d="M102.5 6L36 14.5L16.5 23.5C1.99997 39.5 -12.4 61.5 26 71.5C64.4 81.5 197.833 77.8333 272 71.5C287.5 67.6667 313.6 55.8 294 39C274.4 22.2 191.5 32 139 23.5C102.5 17.5905 33 8.83333 16.5 1.5"
								stroke="#FEE41E"
								strokeWidth="3"
							/>
						</svg>
					</span>
				</div>
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
