"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { Lenis } from "lenis/react";
import { SiSpacex } from "react-icons/si";
import { FaArrowRight, FaMapPin } from "react-icons/fa";
import {
	motion,
	useScroll,
	useTransform,
	useMotionTemplate,
} from "motion/react";

export default function Experiment2() {
	return (
		<div className="bg-zing-950">
			<Lenis root options={{ lerp: 0.05 }}>
				<Nav />
				<Hero />
				<Schedule />
			</Lenis>
		</div>
	);
}

function Nav() {
	return (
		<nav className="fixed left-0 top-0 right-0 z-50 flex items-center justify-between px-6 py-3 text-white">
			<SiSpacex className="text-3xl" />
			<button
				onClick={() => {
					document.getElementById("launch-schedule")?.scrollIntoView({
						behavior: "smooth",
					});
				}}
				className="flex items-center gap-1 text-xs text-zinc-400"
			>
				LAUNCH SCHEDULE <FaArrowRight />
			</button>
		</nav>
	);
}

const SECTION_HEIGHT = 1500;

function Hero() {
	return (
		<div
			className="w-full relative"
			style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
		>
			<CenterImage />
			<ParallaxImages />
			<div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
		</div>
	);
}

function CenterImage() {
	const { scrollY } = useScroll();

	const clip1 = useTransform(scrollY, [0, SECTION_HEIGHT], [25, 0]);
	const clip2 = useTransform(scrollY, [0, SECTION_HEIGHT], [75, 100]);

	const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

	console.log(clipPath);
	const opacity = useTransform(
		scrollY,
		[SECTION_HEIGHT, SECTION_HEIGHT + 500],
		[1, 0],
	);
	const backgroundSize = useTransform(
		scrollY,
		[0, SECTION_HEIGHT + 500],
		["170%", "100%"],
	);

	return (
		<motion.div
			className="sticky top-0 w-full h-screen"
			style={{
				opacity,
				backgroundSize,
				clipPath,
				backgroundImage:
					"url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		/>
	);
}

function ParallaxImages() {
	return (
		<div className="mx-auto max-w-5xl px-4 pt-[200px] relative z-10">
			<ParallaxImage
				src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="And example of a space launch"
				start={-200}
				end={200}
				className="w-1/3 shadow-lg"
			/>
			<ParallaxImage
				src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="An example of a space launch"
				start={200}
				end={-250}
				className="mx-auto w-2/3 shadow-lg"
			/>
			<ParallaxImage
				src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Orbiting satellite"
				start={-200}
				end={200}
				className="ml-auto w-1/3 shadow-lg"
			/>
			<ParallaxImage
				src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Orbiting satellite"
				start={0}
				end={-500}
				className="ml-24 w-5/12 shadow-lg"
			/>
		</div>
	);
}

type ParallaxImageProps = {
	className?: string;
	alt: string;
	src: string;
	start: number;
	end: number;
};

function ParallaxImage({
	className,
	alt,
	src,
	start,
	end,
}: ParallaxImageProps) {
	const ref = useRef<HTMLImageElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: [`${start}px end`, `end ${end * -1}px`],
	});

	const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

	const y = useTransform(scrollYProgress, [0, 1], [start, end]);

	const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

	const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;
	return (
		<motion.img
			ref={ref}
			className={className}
			src={src}
			alt={alt}
			style={{ opacity, transform }}
		/>
	);
}

const Schedule = () => {
	return (
		<section
			id="launch-schedule"
			className="mx-auto max-w-5xl px-4 py-48 text-white"
		>
			<motion.h1
				initial={{ y: 48, opacity: 0 }}
				whileInView={{ y: 0, opacity: 1 }}
				transition={{ ease: "easeInOut", duration: 0.5 }}
				viewport={{ once: true }}
				className="mb-20 text-4xl font-black uppercase text-zinc-50"
			>
				Launch Schedule
			</motion.h1>
			<ScheduleItem title="NG-21" date="Dec 9th" location="Florida" />
			<ScheduleItem title="Starlink" date="Dec 20th" location="Texas" />
			<ScheduleItem title="Starlink" date="Jan 13th" location="Florida" />
			<ScheduleItem title="Turksat 6A" date="Feb 22nd" location="Florida" />
			<ScheduleItem title="NROL-186" date="Mar 1st" location="California" />
			<ScheduleItem title="GOES-U" date="Mar 8th" location="California" />
			<ScheduleItem title="ASTRA 1P" date="Apr 8th" location="Texas" />
		</section>
	);
};
type ScheduleItemProps = {
	title: string;
	date: string;
	location: string;
};
const ScheduleItem = ({ title, date, location }: ScheduleItemProps) => {
	return (
		<motion.div
			initial={{ y: 48, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ ease: "easeInOut", duration: 0.75 }}
			className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
		>
			<div>
				<p className="mb-1.5 text-xl text-zinc-50">{title}</p>
				<p className="text-sm uppercase text-zinc-500">{date}</p>
			</div>
			<div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
				<p>{location}</p>
				<FaMapPin />
			</div>
		</motion.div>
	);
};
