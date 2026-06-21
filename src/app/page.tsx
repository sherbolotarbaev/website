import Shader from '@/components/ui/shader'
import { HeroSection } from 'sections/hero'

export default function Home() {
	return (
		<div className='dark:bg-[#151515] flex min-h-screen items-center justify-center bg-background'>
			<main className='relative flex min-h-screen w-full flex-col items-center px-2 py-8 justify-center'>
				<Shader />
				<HeroSection />
			</main>
		</div>
	)
}
