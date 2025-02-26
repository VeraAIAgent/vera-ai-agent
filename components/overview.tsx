import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-3xl mx-auto md:mt-20"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="rounded-xl p-6 flex flex-col gap-8 leading-relaxed text-center max-w-xl">
        <p className="flex flex-row justify-center gap-4 items-center">
          <Image src="/logo.png" width={32} height={32} alt="Vera AI" />
        </p>
        <p>
          Welcome to the Vera AI Assistant! I&apos;m here to help you discover
          everything about company. Whether you&apos;re curious about the
          company&apos;s history, innovative technologies, product lineup, or
          recent achievements, I&apos;m ready to provide comprehensive insights.
        </p>
        <p>
          You can learn more about Vera AI by visiting the{" "}
          <Link
            className="font-medium underline underline-offset-4"
            href="https://vera-ai-agent.vercel.app/"
            target="_blank"
          >
            official page
          </Link>
          .
        </p>
      </div>
    </motion.div>
  );
};
