import { getDirectImageUrl } from "@/lib/functions";
import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  img: string;
  link: string;
  price: string;
  description?: string;
  servings?: string;
};

export default function Card({
  title,
  img,
  link,
  price,
  servings,
  description,
}: Props) {
  return (
    <article className="border dark:border-neutral-800 rounded-lg overflow-hidden bg-white dark:bg-neutral-800 shadow flex">
      <div className="w-[200px] h-[200px] flex items-center justify-center flex-shrink-0">
        <Image
          className="w-full h-full bg-white object-cover"
          src={getDirectImageUrl(img)}
          alt={title}
          width={200}
          height={200}
          priority
        />
      </div>
      <div className="w-full p-3 flex flex-col">
        <h3 className="text-lg font-medium">{title}</h3>
        {servings && <p className="opacity-60">{servings}</p>}
        {description && <p className="mt-2">{description}</p>}
        <Link
          href={link}
          className="ml-auto mt-auto w-full px-5 py-2 font-medium rounded-md bg-[#EB0045] text-lg text-white text-center hover:brightness-110 transition-all text-balance"
        >
          {price}
        </Link>
      </div>
    </article>
  );
}
