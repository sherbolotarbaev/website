import localFont from 'next/font/local'

export const matter = localFont({
	src: [
		{
			path: './matter-font-family/Matter-Thin.otf',
			weight: '100',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-ThinItalic.otf',
			weight: '100',
			style: 'italic',
		},
		{
			path: './matter-font-family/Matter-Light.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-LightItalic.otf',
			weight: '300',
			style: 'italic',
		},
		{
			path: './matter-font-family/Matter-Regular.otf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-RegularItalic.otf',
			weight: '400',
			style: 'italic',
		},
		{
			path: './matter-font-family/Matter-Medium.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-MediumItalic.otf',
			weight: '500',
			style: 'italic',
		},
		{
			path: './matter-font-family/Matter-SemiBold.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-SemiBoldItalic.otf',
			weight: '600',
			style: 'italic',
		},
		{
			path: './matter-font-family/Matter-Bold.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-BoldItalic.otf',
			weight: '700',
			style: 'italic',
		},
		{
			path: './matter-font-family/Matter-Heavy.otf',
			weight: '800',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-HeavyItalic.otf',
			weight: '800',
			style: 'italic',
		},
		{
			path: './matter-font-family/Matter-Black.otf',
			weight: '900',
			style: 'normal',
		},
		{
			path: './matter-font-family/Matter-BlackItalic.otf',
			weight: '900',
			style: 'italic',
		},
	],
	variable: '--font-matter',
})
