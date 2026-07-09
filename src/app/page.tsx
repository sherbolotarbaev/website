'use client'

import { lazy, Suspense } from 'react'
import { HeroSection } from 'sections/hero'

const Dithering = lazy(() =>
	import('@paper-design/shaders-react').then(mod => ({
		default: mod.Dithering,
	})),
)

export default function Home() {
	return (
		<div className='dark:bg-[#151515] flex min-h-screen items-center justify-center overflow-x-hidden bg-background'>
			<main className='relative flex min-h-screen w-full max-w-full flex-col items-center justify-center overflow-x-hidden px-2 py-8'>
				<Suspense fallback={<div className='absolute inset-0 z-0 bg-muted/20' />}>
					<div className='pointer-events-none absolute inset-0 z-0'>
						<Dithering
							colorBack='#00000000'
							colorFront='#d0fe177d'
							shape='warp'
							type='4x4'
							speed={0.2}
							className='size-full'
							minPixelRatio={1}
						/>
					</div>
				</Suspense>
				<div className='relative z-10 w-full min-w-0 max-w-xl'>
					<HeroSection />
				</div>
			</main>
		</div>
	)
}
