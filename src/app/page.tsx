export default function Home() {
	return (
		<div className='flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black'>
			<main className='flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start'>
				<div className=''>
					<h2 className='text-4xl leading-loose font-medium'>Sher Arbaev</h2>
					<p className='text-base leading-relaxed font-normal py-3 px-4.5 bg-secondary text-white rounded-3xl'>
						Engineer with 5+ years turning slow systems into fast ones. I've cut
						processing times from minutes to seconds, scaled platforms to 30K+
						users, and shipped AI-native products from scratch. I like hard
						problems and clean architecture.
					</p>
				</div>
			</main>
		</div>
	)
}
