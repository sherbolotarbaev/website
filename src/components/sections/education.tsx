import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

export type EducationItemType = {
	id: string
	universityName: string
	universityWebsite?: string
	degree: string
	fieldOfStudy: string
	universityLogo?: string
	description: string
	period: string
}

export function Education({ educations }: { educations: EducationItemType[] }) {
	return (
		<div className='w-full'>
			<h2 className='font-medium text-lg'>Education</h2>
			{educations.map(education => (
				<EducationItem key={education.id} education={education} />
			))}
		</div>
	)
}

export function EducationItem({ education }: { education: EducationItemType }) {
	return (
		<div className='w-full py-4'>
			<div className='w-full not-prose flex items-center gap-3'>
				<div
					className='flex size-9 shrink-0 items-center justify-center'
					aria-hidden
				>
					{education.universityLogo ? (
						<Image
							src={education.universityLogo}
							alt={education.universityName}
							width={1080}
							height={1080}
							quality={100}
							className='rounded-full'
							unoptimized
						/>
					) : (
						<span className='flex size-4 rounded-full bg-zinc-300 dark:bg-zinc-600' />
					)}
				</div>

				<div className='w-full flex items-start flex-col sm:flex-row gap-1 justify-between'>
					<h3 className='w-full text-base text-balance leading-snug font-medium'>
						{education.universityName} {education.degree} in{' '}
						{education.fieldOfStudy}
					</h3>

					<span className='text-[13px] sm:text-sm font-normal text-muted-foreground whitespace-nowrap sm:ml-4'>
						{education.period}
					</span>
				</div>
			</div>

			{education.description && (
				<div className='pt-4 pl-12 text-[15px] sm:text-base text-muted-foreground text-balance leading-relaxed'>
					<ReactMarkdown>{education.description}</ReactMarkdown>
				</div>
			)}
		</div>
	)
}
