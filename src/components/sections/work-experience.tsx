import {
	BriefcaseBusinessIcon,
	ChevronDown,
	ChevronRight,
	ChevronUp,
	CodeXmlIcon,
	DraftingCompassIcon,
	GraduationCapIcon,
} from 'lucide-react'

import React from 'react'
import ReactMarkdown, { type Components } from 'react-markdown'

import Image from 'next/image'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from 'ui/collapsible'
import { LinkPreview } from 'ui/link-preview'

import { cn } from 'utils'

const experienceMarkdownComponents: Components = {
	ul: ({ children }) => (
		<ul className='not-prose my-0 flex list-none flex-col gap-2.5 pl-0'>
			{children}
		</ul>
	),
	li: ({ children }) => (
		<li className='not-prose flex list-none items-start gap-2.5 leading-relaxed text-muted-foreground'>
			<span
				className='mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary'
				aria-hidden
			/>
			<span className='min-w-0 text-pretty'>{children}</span>
		</li>
	),
	p: ({ children }) => (
		<p className='not-prose my-0 leading-relaxed text-muted-foreground [&:not(:first-child)]:mt-2.5'>
			{children}
		</p>
	),
	strong: ({ children }) => (
		<strong className='font-medium text-foreground'>{children}</strong>
	),
}

function formatDescriptionAsBullets(description: string) {
	if (/^[\s]*[-*]/m.test(description)) return description

	const sentences = description
		.split(/(?<=\.)\s+(?=[A-Z])/)
		.map(sentence => sentence.trim())
		.filter(Boolean)

	if (sentences.length === 0) return description

	return sentences.map(sentence => `- ${sentence}`).join('\n')
}

function ExperienceMarkdown({ description }: { description: string }) {
	return (
		<ReactMarkdown components={experienceMarkdownComponents}>
			{formatDescriptionAsBullets(description)}
		</ReactMarkdown>
	)
}

const iconMap = {
	code: CodeXmlIcon,
	design: DraftingCompassIcon,
	business: BriefcaseBusinessIcon,
	education: GraduationCapIcon,
} as const

export type ExperiencePositionIconType = keyof typeof iconMap

export type ExperiencePositionItemType = {
	id: string
	title: string
	employmentPeriod: string
	employmentType?: string
	description?: string
	icon?: ExperiencePositionIconType
	skills?: string[]
	isExpanded?: boolean
}

export type ExperienceItemType = {
	id: string
	companyName: string
	companyWebsite?: string
	span?: string
	companyLogo?: string
	positions: ExperiencePositionItemType[]
	isCurrentEmployer?: boolean
}

export function WorkExperience({
	experiences,
}: {
	experiences: ExperienceItemType[]
}) {
	return (
		<div className='w-full'>
			<h2 className='font-medium text-lg'>Experience</h2>
			{experiences.map(experience => (
				<ExperienceItem key={experience.id} experience={experience} />
			))}
		</div>
	)
}

export function ExperienceItem({
	experience,
}: {
	experience: ExperienceItemType
}) {
	return (
		<div className='w-full flex flex-col gap-4 py-4'>
			<Collapsible>
				<div className='w-full not-prose flex items-start gap-3'>
					<div
						className='flex size-9 pt-2 shrink-0 items-center justify-center'
						aria-hidden
					>
						{experience.companyLogo ? (
							<Image
								src={experience.companyLogo}
								alt={experience.companyName}
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

					<div className='w-full flex flex-col gap-1 sm:flex-row items-start justify-between'>
						<div>
							<CollapsibleTrigger className='w-full group/experience not-prose block text-left select-none'>
								<h3 className='w-full text-balance text-base leading-snug font-medium flex items-center gap-1.5'>
									{experience.positions[0].title}{' '}
									<div
										className={cn(
											'shrink-0 text-muted-foreground [&_svg]:size-4 group-hover/experience:text-foreground',
											!experience.positions[0].description?.length
												? 'hidden'
												: '',
										)}
										aria-hidden
									>
										<ChevronDown className='hidden group-data-[state=open]/experience:block' />
										<ChevronRight className='hidden group-data-[state=closed]/experience:block' />
									</div>
								</h3>
							</CollapsibleTrigger>
							<p className='text-sm'>
								{experience.companyWebsite ? (
									<LinkPreview
										className='text-sm'
										url={experience.companyWebsite}
									>
										{experience.companyName}
									</LinkPreview>
								) : (
									<span className='font-medium'>{experience.companyName}</span>
								)}{' '}
								{experience.span && (
									<span
										className={cn(
											'text-[11px] font-normal p-0.5 px-1 text-white rounded-full',
											experience.span === 'by wedevx'
												? 'bg-gradient-to-r from-indigo-400/40 via-indigo-500/60 to-violet-500/30'
												: 'bg-gradient-to-r from-blue-400/40 via-blue-500/60 to-cyan-500/30',
										)}
									>
										{experience.span}
									</span>
								)}
							</p>
						</div>

						<span className='text-[13px] sm:text-sm font-normal text-muted-foreground'>
							{experience.positions[0].employmentPeriod}
						</span>
					</div>
				</div>

				<CollapsibleContent className='overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down'>
					{experience.positions[0].description && (
						<Prose className='pt-3 pl-12 text-[15px] sm:text-base'>
							<ExperienceMarkdown
								description={experience.positions[0].description}
							/>
						</Prose>
					)}
				</CollapsibleContent>
			</Collapsible>

			{/* <div className='relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border'>
				{experience.positions.map(position => (
					<ExperiencePositionItem key={position.id} position={position} />
				))}
			</div> */}
		</div>
	)
}

export function ExperiencePositionItem({
	position,
}: {
	position: ExperiencePositionItemType
}) {
	const ExperienceIcon = iconMap[position.icon || 'business']

	return (
		<Collapsible defaultOpen={position.isExpanded} asChild>
			<div className='relative last:before:absolute last:before:h-full last:before:w-4'>
				<CollapsibleTrigger className='group/experience not-prose block w-full text-left select-none'>
					<div className='relative z-1 mb-1 flex items-center gap-3'>
						<div
							className='flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground'
							aria-hidden
						>
							<ExperienceIcon className='size-4' />
						</div>

						<h4 className='flex-1 text-base font-medium text-balance flex items-center justify-between'>
							{position.title}{' '}
							<div className='text-sm font-normal text-muted-foreground'>
								{position.employmentPeriod}
							</div>
						</h4>

						<div
							className={cn(
								'shrink-0 text-muted-foreground [&_svg]:size-4',
								!position.description?.length ? 'hidden' : '',
							)}
							aria-hidden
						>
							<ChevronDown className='hidden group-data-[state=open]/experience:block' />
							<ChevronUp className='hidden group-data-[state=closed]/experience:block' />
						</div>
					</div>
				</CollapsibleTrigger>

				<CollapsibleContent className='overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down'>
					{position.description && (
						<Prose className='pt-2 pl-9 text-[15px] sm:text-base'>
							<ExperienceMarkdown description={position.description} />
						</Prose>
					)}

					{Array.isArray(position.skills) && position.skills.length > 0 && (
						<ul className='not-prose flex flex-wrap gap-1.5 pt-2 pl-9'>
							{position.skills.map((skill, index) => (
								<li key={index} className='flex'>
									<Skill>{skill}</Skill>
								</li>
							))}
						</ul>
					)}
				</CollapsibleContent>
			</div>
		</Collapsible>
	)
}

function Prose({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'prose prose-sm max-w-none text-foreground prose-zinc dark:prose-invert',
				'prose-a:font-medium prose-a:break-words prose-a:text-foreground prose-a:underline prose-a:underline-offset-4',
				'prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none',
				className,
			)}
			{...props}
		/>
	)
}

function Skill({ className, ...props }: React.ComponentProps<'span'>) {
	return (
		<span
			className={cn(
				'inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground',
				className,
			)}
			{...props}
		/>
	)
}
