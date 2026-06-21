import { ChevronRight } from 'lucide-react'
import type { IconType } from 'react-icons'

import { Button } from 'ui/button'

export type ContactItemType = {
	icon?: IconType
	href: string
	children: React.ReactNode
}

export function Contact({ contacts }: { contacts: ContactItemType[] }) {
	return (
		<div className='w -full flex flex-col gap-4'>
			<h2 className='font-medium text-lg'>Contact</h2>
			<div className='flex flex-col'>
				{contacts.map(({ ...props }, idx) => (
					<ContactButton key={idx} {...props} />
				))}
			</div>
		</div>
	)
}

type ContactButtonProps = React.ComponentProps<typeof Button> & ContactItemType

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
