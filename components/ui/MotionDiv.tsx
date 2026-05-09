'use client'
// Thin client-only re-export of framer-motion's <motion.div>. Lets us keep
// section components as Server Components (no `'use client'` at the top)
// while still using the same scroll-in/fade animations they already had.
//
// The previous pattern was: every section was 'use client' just because
// it imported framer-motion. That meant the entire JSX tree of every
// section was hydrated and shipped as JS.
//
// New pattern: only the actual animated wrapper is a client component;
// the surrounding static markup stays server-rendered.
import { motion, type HTMLMotionProps } from 'framer-motion'

type Props = HTMLMotionProps<'div'>

export default function MotionDiv(props: Props) {
  return <motion.div {...props} />
}
