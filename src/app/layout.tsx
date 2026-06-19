import './globals.css'

import { matter } from 'font'
import type { Metadata } from 'next'
import { siteConfig } from './config'

import { Providers } from 'providers'

export const metadata: Metadata = siteConfig

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${matter.className} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
