import { HTMLMotionProps, Variants } from "framer-motion";

export const fadeOnDown: Variants = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        }
    }
}

export const fadeOnUp: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

export const staggerContainer: Variants = {
    animate: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const pressableBehavior: HTMLMotionProps<'a'> = {
  whileHover: { scale: 1.05, y: -1 },
  whileTap: { scale: 0.95 },
  transition: { type: "spring", stiffness: 400, damping: 15 }
};