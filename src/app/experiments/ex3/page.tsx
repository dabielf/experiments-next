"use client";
import styles from "./page.module.css";
import { Poppins } from "next/font/google";
import { useState } from "react";
import { motion } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

const poppins = Poppins({
	subsets: ["latin"],
	display: "swap",
	weight: "700",
});

export default function Home() {
	const [isHovered, setIsHovered] = useState(false);
	const { x, y } = useMousePosition();
	const size = isHovered ? 400 : 40;

	return (
		<main className={styles.main}>
			<motion.div
				className={styles.mask}
				animate={{
					WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
					WebkitMaskSize: `${size}px`,
				}}
				transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
			>
				<p
					className={poppins.className}
					onMouseEnter={() => {
						setIsHovered(true);
					}}
					onMouseLeave={() => {
						setIsHovered(false);
					}}
				>
					<div className={styles.text}>
						A visual designer - with skills that haven't been replaced by A.I
						(yet) - making good shit only if the paycheck is equally good.
					</div>
				</p>
			</motion.div>

			<div className={styles.body}>
				<p className={poppins.className}>
					<div className={styles.text}>
						I'm a <span className={styles.emphasis}>selectively skilled</span>{" "}
						product designer with strong focus on producing high quality &
						impactful digital experience.
					</div>
				</p>
			</div>
		</main>
	);
}
