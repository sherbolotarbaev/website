import type { Metadata } from 'next'

export interface SiteConfigOptions extends Metadata {
	title: string
}

export const siteConfig: SiteConfigOptions = {
	title: 'Sher Arbaev',
	description:
		'SWE 5+ years of experience - distributed systems, highly reliable microservices, and tech team leadership.',
}
