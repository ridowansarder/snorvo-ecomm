'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type Props = {
  href: string;
  label: string;
};

export default function AnimatedNavLink({ href, label }: Props) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative px-3 py-2"
    >
      <Link
        href={href}
        className="text-base font-medium text-gray-700 dark:text-gray-200 transition-colors duration-300"
      >
        {label}
      </Link>

      <motion.div
        layoutId="nav-underline"
        className="absolute left-0 bottom-0 h-0.5 bg-blue-600 rounded"
        initial={false}
        animate={{
          width: isActive ? '100%' : '0%',
        }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
