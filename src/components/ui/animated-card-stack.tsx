'use client'

import { ArrowRight } from 'lucide-react'

import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from './button'

export type CardType = {
	id: number
	contentType: 1 | 2 | 3
}

const cardData = {
	1: {
		title: 'Loops explained',
		description: 'Claude, GPT, Mira and what actually works',
		image: 'https://pbs.twimg.com/media/HLQR6x3WgAAoX0v?format=jpg&name=medium',
		href: 'https://x.com/AnatoliKopadze/status/2068328135611822149',
	},
	2: {
		title: 'How to fix your entire life in 1 day',
		description:
			"If you're anything like me, you think new years resolutions are stupid.",
		image: 'https://pbs.twimg.com/media/G-efypCbQAEEi8a?format=jpg&name=medium',
		href: 'https://x.com/thedankoe/status/2010751592346030461',
	},
	3: {
		title: '21st.dev',
		description: 'Vibe Crafting Platform',
		image: 'https://21st.dev/opengraph-image.png',
		href: '21.dev',
	},
}

const initialCards: CardType[] = [
	{ id: 1, contentType: 1 },
	{ id: 2, contentType: 2 },
	{ id: 3, contentType: 3 },
]

const positionStyles = [
	{ scale: 1, y: 12 },
	{ scale: 0.95, y: -16 },
	{ scale: 0.9, y: -44 },
]

const exitAnimation = {
	y: 340,
	scale: 1,
	zIndex: 10,
}

const enterAnimation = {
	y: -16,
	scale: 0.9,
}

export function CardContent({ contentType }: { contentType: 1 | 2 | 3 }) {
	const data = cardData[contentType]

	return (
		<div className='flex h-full w-full flex-col gap-4'>
			<div className='-outline-offset-1 flex h-[200px] w-full items-center justify-center overflow-hidden rounded-xl outline outline-black/10 dark:outline-white/10'>
				<img
					src={data.image || '/placeholder.svg'}
					alt={data.title}
					className='h-full w-full select-none object-cover'
				/>
			</div>
			<div className='flex w-full items-center justify-between gap-2 px-3 pb-6'>
				<div className='flex min-w-0 flex-1 flex-col'>
					<span className='truncate font-medium text-foreground'>
						{data.title}
					</span>
					<span className='text-muted-foreground'>{data.description}</span>
				</div>
				<Button size='lg' href={data.href} target='_blank'>
					Read
					<ArrowRight />
				</Button>
			</div>
		</div>
	)
}

export function AnimatedCard({
	card,
	index,
	isAnimating,
}: {
	card: CardType
	index: number
	isAnimating: boolean
}) {
	const { scale, y } = positionStyles[index] ?? positionStyles[2]
	const zIndex = index === 0 && isAnimating ? 10 : 3 - index

	const exitAnim = index === 0 ? exitAnimation : undefined
	const initialAnim = index === 2 ? enterAnimation : undefined

	return (
		<motion.div
			key={card.id}
			initial={initialAnim}
			animate={{ y, scale }}
			exit={exitAnim}
			transition={{
				type: 'spring',
				duration: 1,
				bounce: 0,
			}}
			style={{
				zIndex,
				left: '50%',
				x: '-50%',
				bottom: 0,
			}}
			className='absolute flex h-[280px] w-[324px] items-center justify-center overflow-hidden rounded-t-xl border-x border-t border-border bg-card p-1 shadow-lg will-change-transform sm:w-[512px]'
		>
			<CardContent contentType={card.contentType} />
		</motion.div>
	)
}

export function AnimatedCardStack() {
	const [cards, setCards] = useState(initialCards)
	const [isAnimating, setIsAnimating] = useState(false)
	const [nextId, setNextId] = useState(4)

	const handleAnimate = () => {
		setIsAnimating(true)

		const nextContentType = ((cards[2].contentType % 3) + 1) as 1 | 2 | 3

		setCards([...cards.slice(1), { id: nextId, contentType: nextContentType }])
		setNextId(prev => prev + 1)
		setIsAnimating(false)
	}

	return (
		<div className='flex w-full flex-col items-center justify-center'>
			<div className='relative h-[380px] w-full overflow-hidden'>
				<h2 className='font-medium text-lg'>Useful links</h2>
				<AnimatePresence initial={false}>
					{cards.slice(0, 3).map((card, index) => (
						<AnimatedCard
							key={card.id}
							card={card}
							index={index}
							isAnimating={isAnimating}
						/>
					))}
				</AnimatePresence>
			</div>

			<div className='relative z-10 -mt-px flex w-full items-center justify-center border-t border-border py-4'>
				<Button variant='outline' onClick={handleAnimate}>
					Next
				</Button>
			</div>
		</div>
	)
}
