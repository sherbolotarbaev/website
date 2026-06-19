import { ThemeProvider } from './theme'

interface ProvidersProps {
	children: React.ReactNode
}

export function Providers({ children }: Readonly<ProvidersProps>) {
	return (
		<ThemeProvider
			attribute='class'
			defaultTheme='dark'
			storageKey='theme'
			forcedTheme='dark'
			disableTransitionOnChange
		>
			{children}
		</ThemeProvider>
	)
}
