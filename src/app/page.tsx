import { HeroSection } from 'sections/hero'

export default function Home() {
	return (
		<div className='dark:bg-[#151515] flex min-h-screen items-center justify-center bg-background'>
			<main className='flex min-h-screen w-full flex-col items-center px-4 py-12 justify-center'>
				<HeroSection />
			</main>
		</div>
	)
}
