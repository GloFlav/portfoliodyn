import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
  tag?: string;
  year?: string;
}

const ProjectCard = ({ src, title, description, link, tag, year }: Props) => {
  return (
    <Link
      href={link}
      target={link.startsWith("http") ? "_blank" : undefined}
      rel={link.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group relative flex w-full max-w-[420px] flex-col overflow-hidden rounded-2xl border border-[#ffffff1a] bg-[#0000004d] shadow-lg transition duration-300 hover:border-yellow-500/60 hover:shadow-[0_20px_60px_-20px_rgba(255,212,0,0.35)]"
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-[#111]">
        <Image
          src={src}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-yellow-300 backdrop-blur">
            {tag}
          </span>
        )}
        {year && (
          <span className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-gray-200 backdrop-blur">
            {year}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold leading-snug text-white">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">{description}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
