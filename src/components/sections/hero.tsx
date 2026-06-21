import { ChevronRight } from 'lucide-react'
import { IconType } from 'react-icons'
import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTelegram,
	BsTwitterX,
} from 'react-icons/bs'

import { AnimatedTextCycle } from 'ui/animated-text-cycle'
import { Avatar, AvatarImage } from 'ui/avatar'
import { Button } from 'ui/button'
import SectionBadge, { StarIcon } from 'ui/section-badge'
import { type ExperienceItemType, WorkExperience } from './work-experience'

interface ContactItem {
	icon?: IconType
	children: React.ReactNode
}

const contacts: ContactItem[] = [
	{
		icon: BsGithub,
		children: 'GitHub',
	},
	{
		icon: BsLinkedin,
		children: 'LinkedIn',
	},
	{
		icon: BsTelegram,
		children: 'Telegram',
	},
	{
		icon: BsInstagram,
		children: 'Instagram',
	},
	{
		icon: BsTwitterX,
		children: 'X',
	},
]

export const experiences: ExperienceItemType[] = [
	{
		id: 'peopleup',
		companyName: 'PeopleUp',
		companyLogo:
			'https://media.licdn.com/dms/image/v2/D560BAQG3Au1LaZjulw/company-logo_200_200/B56ZcYPnmoG0AU-/0/1748458438073/peopleup_ai_logo?e=1783555200&v=beta&t=79DrcCJHyLgs2xrz8oipZBFHepqbaa_IXE1j6r_NDxI',
		companyWebsite: 'https://www.peopleup.ai',
		span: 'by wedevx',
		positions: [
			{
				id: 'peopleup-senior-software-engineer',
				title: 'Founding AI Engineer',
				employmentPeriod: 'Jun 2025 – Jun 2026',
				description:
					'I built the next generation of **AI-driven recruitment tools**, including an autonomous pipeline from resume scanning to technical and soft-skill interviews that reduced recruiter screening time by **60-70%**. I developed **share.peopleup.ai**, an end-to-end assessment platform that leverages **LLMs**, **LangChain**, and **vector databases** to ingest interview transcripts and video data, providing deep-dive performance insights. My technical focus included architecting a multi-instance API integration layer with **AES-256-CBC** encryption and concurrent request deduplication, alongside a real-time webhook ingestion system using **RabbitMQ** and **Bun** on **Google Cloud Run** to ensure guaranteed delivery and graceful shutdowns. I also designed a claim synchronization engine using Prisma ORM, implemented a document processing pipeline with **Google Document AI**, and built a real-time claims dashboard using Next.js and Server-Sent Events (SSE). Beyond the product, I maintained a high bar for engineering excellence by conducting senior-level system design interviews in collaboration with top-tier engineers from **Google** and **AWS**.',
				employmentType: 'Full-time',
				icon: 'code',
				skills: [
					'React',
					'TypeScript',
					'SASS',
					'Python',
					'LangChain',
					'OpenAI API',
					'Claude Code',
					'Vector Databases',
					'Next.js',
				],
			},
		],
	},
	{
		id: 'wedevx',
		companyName: 'wedevx',
		companyWebsite: 'https://wedevx.co',
		companyLogo:
			'https://s3-eu-west-1.amazonaws.com/tpd/logos/649d18d3cc7acb3708c81d3a/0x0.png',
		positions: [
			{
				id: 'wedevx-lead',
				title: 'Senior Software Engineer',
				description:
					'wedevx is an **AI-powered Ed-Tech platform**, backed by **Antler** and **Beta Boom**, that helps engineers land high-paying roles through hands-on, AI-native learning experiences. Led the architectural redesign and modernization of the learning platform (migrating from Next.js 13 to 15 and adopting shadcn/ui) to deliver a high-performance user experience. Re-architected core backend pipelines and Prisma query structures, slashing heavy processing times from **7 minutes to ~7 seconds for 30K+ active users**. Built the new AI-native learning product, integrating real-time agents to create a **ChatGPT-style personalized learning experience**. Designed cloud-based workstations enabling students to interact with live **AWS terminals** and **Linux environments** directly in their browser.',
				employmentPeriod: 'May 2025 - Jun 2026',
				employmentType: 'Full-time',
				icon: 'code',
			},
			{
				id: 'wedevx-lead',
				title: 'Software Engineer III',
				employmentPeriod: 'Sep 2024 – May 2025',
				employmentType: 'Full-time',
				icon: 'code',
			},
			{
				id: 'wedevx-sde2',
				title: 'Software Engineer II',
				employmentPeriod: 'Feb 2024 – Sep 2024',
				employmentType: 'Full-time',
				icon: 'code',
				skills: [
					'Systems Design',
					'Code Review',
					'Nest.js',
					'Microservices',
					'Leadership',
					'Docker',
					'Kubernetes',
					'AWS',
					'Prisma ORM',
				],
			},
			{
				id: 'wedevx-sde',
				title: 'Software Engineer',
				employmentPeriod: 'Jun 2023 – Feb 2024',
				employmentType: 'Full-time',
				icon: 'code',
				skills: [
					'Problem Solving',
					'PostgreSQL',
					'Supabase',
					'TypeScript',
					'API Design',
					'Fastify',
					'Nest.js',
					'Docker',
					'Amazon S3',
					'Code Review',
				],
			},
		],
	},
	{
		id: 'finik',
		companyName: 'Finik (QUICKPAY)',
		companyWebsite: 'https://finik.kg',
		companyLogo:
			'https://www.finik.kg/downloads/finik-logos/symbols/finik-black-symbol-bg-1080.png',
		span: 'by Mancho',
		positions: [
			{
				id: 'finik-backend',
				title: 'Node.js Backend Developer',
				description:
					'Joined during a critical period of technical debt; re-engineered database and networking layers to stabilize the platform, transforming it from a service with frequent crashes to a reliable system with **zero downtime**.',
				employmentPeriod: 'Feb 2023 – May 2023',
				employmentType: 'Full-time',
				icon: 'code',
				skills: [
					'Node.js',
					'Express.js',
					'MongoDB',
					'Amazon DynamoDB',
					'Elasticsearch',
					'AWS',
					'Docker',
					'Amazon S3',
				],
			},
		],
	},
	{
		id: 'medchek',
		companyName: 'medchek',
		companyWebsite: 'https://medcheck.kg',
		companyLogo:
			'https://play-lh.googleusercontent.com/UF-DZ83xCQPbgZdfwOsJD9DeR9bHFdIkpnW-ECzA1TftOUfXuc6LOWOp_8QFj0AuM5rBckJLDv_1jRtGbu3c=w480-h960-rw',
		span: 'by Mancho',
		positions: [
			{
				id: 'medchek-backend',
				title: 'Node.js Backend Developer',
				description:
					'Built scalable backend services for Medcheck, a platform designed to **decentralize healthcare** by allowing users to search for specialists and clinics, and Meducation, a gamified professional development tool for pharmacists in remote areas. Revolutionized the user experience by implementing Elasticsearch, slashing search latency **from 2-3 seconds down to 200-400ms**.',
				employmentPeriod: 'Sep 2022 – May 2023',
				employmentType: 'Full-time',
				icon: 'code',
				skills: [
					'Node.js',
					'Express.js',
					'MongoDB',
					'Amazon DynamoDB',
					'Elasticsearch',
					'AWS',
					'Docker',
					'Amazon S3',
				],
			},
		],
	},
	{
		id: 'mancho',
		companyName: 'Mancho',
		companyWebsite: 'https://mancho.dev',
		companyLogo:
			'https://media.licdn.com/dms/image/v2/C4E0BAQHCsohtw5k0Qw/company-logo_200_200/company-logo_200_200/0/1630627568617?e=1783555200&v=beta&t=NQfnamJMazuo5s8pnRUZHw3Hecys3m_aaF-H9fwr6JU',
		positions: [
			{
				id: 'mancho-frontend',
				title: 'Frontend Developer',
				description:
					'Mancho is a **tech studio** founded with a clear mission: to make life in **Kyrgyzstan** a little more fair by building high-impact, accessible digital solutions. During my time there, I evolved from a frontend intern to a full-stack engineer, playing a key role in bringing **MedTech** and **FinTech** services to underserved regions.',
				employmentPeriod: 'Aug 2021 – Sep 2022',
				employmentType: 'Full-time',
				icon: 'code',
				skills: ['React', 'Next.js', 'Redux', 'TypeScript'],
			},
			{
				id: 'mancho-intern',
				title: 'Intern Frontend Developer',
				employmentPeriod: 'May 2021 – Aug 2021',
				employmentType: 'Internship',
				icon: 'education',
				skills: ['React', 'JavaScript', 'TypeScript', 'SASS'],
			},
		],
	},
]

export function HeroSection() {
	return (
		<div className='w-full max-w-md flex items-center justify-center'>
			<div className='w-full h-full flex flex-col gap-8'>
				<SectionBadge
					className='w-fit'
					text='Open to New Opportunities'
					icon={<StarIcon fill='#008cff' />}
				/>

				<div className='flex items-start gap-3.5'>
					<Avatar className='size-14 rounded-xl after:rounded-xl'>
						<AvatarImage src='/images/sher.jpeg' className='rounded-xl' />
					</Avatar>

					<div className='flex flex-col gap-0.5'>
						<h2 className='text-xl leading-none font-medium'>Sher Arbaev </h2>
						<p className='text-base leading-relaxed text-muted-foreground/80'>
							<AnimatedTextCycle
								words={[
									'Software Engineer',
									'AI Engineer',
									'Full-Stack Developer',
								]}
							/>
						</p>
					</div>
				</div>

				<p className='text-base leading-relaxed'>
					Over the last 5+ years, I’ve moved from scaling FinTech/EdTech
					backends to building AI-native products that actually change how
					people work. My focus is simple: turn complex, messy ideas into fast,
					reliable software. <br />
					<br />
					I’m a builder at heart. I love the process, I love the speed, and I’m
					always looking to make life a little more efficient through the
					products I create.
				</p>

				<WorkExperience experiences={experiences} className='w-full' />

				<div className='flex flex-col gap-4'>
					<h2 className='font-medium text-base'>Contact</h2>
					<div className='flex flex-col'>
						{contacts.map(({ ...props }, idx) => (
							<ContactButton key={idx} {...props} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

type ContactButtonProps = React.ComponentProps<typeof Button> & ContactItem

function ContactButton({ icon: Icon, children, ...props }: ContactButtonProps) {
	return (
		<Button
			{...props}
			size='lg'
			variant='ghost'
			className='w-full justify-start gap-3.5 h-14 px-0 rounded-none border-x-0 border-t-0 border-foreground/6 text-base text-muted-foreground first:border-t last:border-b hover:bg-transparent!'
		>
			{Icon ? <Icon /> : null} {children}{' '}
			<ChevronRight className='ml-auto transition-transform duration-200 ease-in-out group-hover/button:translate-x-1' />
		</Button>
	)
}
