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
		<div className='dark:bg-[#151515] flex min-h-screen items-center justify-center bg-background'>
			<main className='relative flex min-h-screen w-full flex-col items-center px-2 py-8 justify-center overflow-hidden'>
				<Suspense fallback={<div className='absolute inset-0 bg-muted/20' />}>
					<div className='absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-30 mix-blend-multiply dark:mix-blend-screen'>
						<Dithering
							colorBack='#00000000'
							colorFront='#ccff00'
							shape='warp'
							type='4x4'
							speed={0.2}
							className='size-full'
							minPixelRatio={1}
						/>
					</div>
				</Suspense>
				<div className='relative z-10'>
					<HeroSection />
				</div>
			</main>
		</div>
	)
}
