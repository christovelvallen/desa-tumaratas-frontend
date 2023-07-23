import HeroTitle from '@/components/HeroTitle';

export const metadata = {
	title: 'Hukum Tua | Desa Tumaratas',
	description: 'Generated by create next app',
};

export default function HukumTuaLayout({ children }) {
	return (
		<>
			<HeroTitle
				textTop={'Hukum Tua Desa'}
				textMain={'Hukum Tua'}
				textBottom={'Tumaratas'}
			/>
			{children}
		</>
	);
}