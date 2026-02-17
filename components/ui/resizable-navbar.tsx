"use client";

import React, { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  children: ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavProps {
  children: ReactNode;
  className?: string;
  visible?: boolean;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-0 z-[99999] w-full pt-3 lg:pt-3", visible && "pt-4", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(
              child as React.ReactElement<{ visible?: boolean }>,
              { visible },
            )
          : child,
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "60%" : "100%",
        borderRadius: "9999px",
        marginTop: visible ? "16px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
      }}
      className={cn(
        "relative z-[100000] mx-auto hidden w-full max-w-7xl items-center self-start rounded-full bg-yellow-400 dark:bg-yellow-500 backdrop-blur-xl border border-yellow-500 dark:border-yellow-600 px-6 py-3 lg:grid lg:grid-cols-[auto_1fr_auto] gap-3 shadow-lg",
        visible && "bg-yellow-500 dark:bg-yellow-600 border-yellow-600 dark:border-yellow-700",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

interface NavItemsProps {
  items: { name: string; link: string }[];
  className?: string;
  onItemClick?: () => void;
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-2 lg:flex",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          key={`link-${idx}`}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-sm font-medium transition-colors duration-200"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-red-600"
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span 
            className={cn(
              "relative z-20 transition-colors duration-200",
              hovered === idx 
                ? "text-white" 
                : "text-black dark:text-white"
            )}
          >
            {item.name}
          </span>
        </a>
      ))}
    </div>
  );
};

export const NavbarLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 group relative z-10 flex-shrink-0 min-w-fit">
      <div className="relative h-12 lg:h-14 w-12 lg:w-14 bg-white rounded-full p-1">
        <img 
          src="/aval logo.png" 
          alt="Aval Logo" 
          className="h-full w-full object-contain rounded-full transition-all duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "button",
  children,
  className,
  variant = "primary",
  onClick,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-6 py-2.5 rounded-full text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition-all duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-[0_0_24px_rgba(220,38,38,0.15)] hover:from-red-700 hover:to-red-600",
    secondary: "bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  const Component = Tag as any;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Component>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(20px)" : "blur(0px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "90%" : "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: "16px",
        marginTop: visible ? "16px" : "0px",
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[100000] mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-yellow-400 dark:bg-yellow-500 backdrop-blur-xl border border-yellow-500 dark:border-yellow-600 px-4 py-3 lg:hidden shadow-lg",
        visible && "bg-yellow-500 dark:bg-yellow-600 border-yellow-600 dark:border-yellow-700",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex items-center justify-between w-full max-w-[1600px] mx-auto px-4 h-14">
      {children}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="relative w-9 h-9 rounded-xl flex items-center justify-center text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
      aria-label="Toggle menu"
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X size={20} className="text-black dark:text-white" />
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Menu size={20} className="text-black dark:text-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
};

interface MobileNavMenuProps {
  children: ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
  onClose,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100001]"
          />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "absolute inset-x-0 top-14 z-[100002] flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-8 shadow-2xl shadow-black/20",
              className,
            )}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
