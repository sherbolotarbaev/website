import {
	BsGithub,
	BsInstagram,
	BsLinkedin,
	BsTelegram,
	BsTwitterX,
} from 'react-icons/bs'

import { AnimatedTextCycle } from 'ui/animated-text-cycle'
import { Avatar, AvatarImage } from 'ui/avatar'

import SectionBadge, { StarIcon } from 'ui/section-badge'
import { AnimatedCardStack } from '../ui/animated-card-stack'
import { Contact, type ContactItemType } from './contact'
import { Education, type EducationItemType } from './education'
import { WorkExperience, type ExperienceItemType } from './work-experience'

const contacts: ContactItemType[] = [
	{
		icon: BsGithub,
		children: 'GitHub',
		href: 'https://github.com/sherbolotarbaev',
	},
	{
		icon: BsLinkedin,
		children: 'LinkedIn',
		href: 'https://www.linkedin.com/in/sherbolotarbaev',
	},
	{
		icon: BsTelegram,
		children: 'Telegram',
		href: 'https://t.me/sherbolotarbaev',
	},
	{
		icon: BsInstagram,
		children: 'Instagram',
		href: 'https://instagram.com/sherbolotarbaev',
	},
	{
		icon: BsTwitterX,
		children: 'X',
		href: 'https://x.com/sherbolotarbaev',
	},
]

export const experiences: ExperienceItemType[] = [
	{
		id: 'peopleup',
		companyName: 'PeopleUp',
		companyLogo: '/images/peopleup_ai_logo.jpeg',
		companyWebsite: 'https://www.peopleup.ai',
		span: 'by wedevx',
		positions: [
			{
				id: 'peopleup-senior-software-engineer',
				title: 'Founding AI Engineer',
				employmentPeriod: 'Jun 2025 – Jun 2026',
				description:
					'I built the next generation of **AI-driven recruitment tools**, including an autonomous pipeline from resume scanning to technical and soft-skill interviews that reduced recruiter screening time by **60-70%**. I developed **share.peopleup.ai**, an end-to-end assessment platform that leverages **LLMs**, **LangChain**, and **vector databases** to ingest interview transcripts and video data, providing deep-dive performance insights. My technical focus included architecting a multi-instance API integration layer with **AES-256-CBC** encryption and concurrent request deduplication, alongside a real-time webhook ingestion system using **RabbitMQ** and **Bun** on **Google Cloud Run** to ensure guaranteed delivery and graceful shutdowns. I also designed a claim synchronization engine using **Prisma ORM**, implemented a document processing pipeline with **Google Document AI**, and built a real-time claims dashboard using **Next.js** and Server-Sent Events (SSE). Beyond the product, I maintained a high bar for engineering excellence by conducting **senior-level system design interviews** in collaboration with top-tier engineers from **Google** and **AWS**.',
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
		companyLogo: '/images/wedevx_logo.png',
		positions: [
			{
				id: 'wedevx-lead',
				title: 'Senior Software Engineer',
				description:
					'wedevx is an **AI-powered Ed-Tech platform**, backed by **Antler** and **Beta Boom**, that helps engineers land high-paying roles through hands-on, AI-native learning experiences. Led the architectural redesign and modernization of the learning platform (migrating from **Next.js** 13 to 15 and adopting shadcn/ui) to deliver a high-performance user experience. Re-architected core backend pipelines and **Prisma** query structures, slashing heavy processing times from **7 minutes to ~7 seconds for 30K+ active users**. Built the new AI-native learning product, integrating real-time agents to create a **ChatGPT-style personalized learning experience**. Designed cloud-based workstations enabling students to interact with live **AWS terminals** and **Linux environments** directly in their browser.',
				employmentPeriod: 'May 2023 - Jun 2026',
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
		companyLogo: '/images/finik_kg_logo.png',
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
		companyLogo: '/images/medchek_kg_logo.webp',
		span: 'by Mancho',
		positions: [
			{
				id: 'medchek-backend',
				title: 'Node.js Backend Developer',
				description:
					'Built scalable backend services for Medcheck, a platform designed to **decentralize healthcare** by allowing users to search for specialists and clinics, and Meducation, a gamified professional development tool for pharmacists in remote areas. Revolutionized the user experience by implementing **Elasticsearch**, slashing search latency **from 2-3 seconds down to 200-400ms**.',
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
		companyLogo: '/images/mancho_dev_logo.jpeg',
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

const educations: EducationItemType[] = [
	{
		id: 'iksu',
		universityName: 'Issyk-Kul State University (IKSU)',
		universityWebsite: 'https://www.iksu.kg',
		degree: `Bachelor's degree`,
		fieldOfStudy: 'Computer Science',
		universityLogo: '/images/iksu_kg_logo.png',
		description:
			'Chairman of the Student Union; organized tech meetups and events. 2nd Place, Enactus Kyrgyzstan National Entrepreneurship Cup 2022 (20+ teams). Relevant Coursework: Data Structures and Algorithms, Systems Programming, Parallel and Distributed Processing, Machine Organization, Computer Design, Software Design, Computer Architecture',
		period: 'Sep 2019 - May 2023',
	},
]

export function HeroSection() {
	return (
		<div className='relative box-border w-full min-w-0 max-w-xl overflow-x-clip rounded-4xl bg-background/80 p-4 backdrop-blur-sm'>
			<div className='w-full h-full flex flex-col gap-8'>
				<SectionBadge
					className='w-fit'
					text='Open to New Opportunities'
					icon={<StarIcon />}
				/>

				<header className='flex items-start gap-3.5'>
					<Avatar className='size-14 rounded-xl after:rounded-xl'>
						<AvatarImage src='/images/sher.jpeg' className='rounded-xl' />
					</Avatar>

					<div className='flex flex-col gap-0.5'>
						<h2 className='text-xl leading-none font-medium'>Sher Arbaev </h2>
						<div className='text-base leading-relaxed text-muted-foreground/80'>
							<AnimatedTextCycle
								words={[
									'Software Engineer',
									'AI Engineer',
									'Full-Stack Developer',
								]}
							/>
						</div>
					</div>
				</header>

				<p className='text-[15px] sm:text-base leading-relaxed [&>span]:bg-[#d1fe17] [&>span]:px-1 [&>span]:text-[13px] [&>span]:font-medium [&>span]:sm:text-sm [&>span]:text-primary-foreground [&>span]:inline-block [&>span]:-skew-x-12 [&>span]:rounded-sm'>
					Over the last <span>5+ years</span>, I’ve moved from scaling{' '}
					<span>FinTech/EdTech backends</span> to building{' '}
					<span>AI-native products</span> that actually change how people work.
					My focus is simple: <span>turn complex</span>, messy ideas{' '}
					<span>into fast</span>, reliable software. <br />
					<br />
					I’m a builder at heart. I love process, <span>I love speed</span>, and
					I’m always looking <span>to make life a bit better</span> through the
					products I create.
				</p>

				<WorkExperience experiences={experiences} />
				<Education educations={educations} />
				<Contact contacts={contacts} />
				<AnimatedCardStack />

				<footer className='w-full flex items-center justify-center'>
					<p className='text-xs sm:text-sm text-muted-foreground'>
						© 2026 Sher Arbaev. All rights reserved.
					</p>
				</footer>
			</div>
		</div>
	)
}
