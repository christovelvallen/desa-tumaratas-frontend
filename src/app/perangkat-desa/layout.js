import HeroTitle from '@/components/HeroTitle';

export const metadata = {
	title: 'Perangkat Desa | Desa Tumaratas',
	description: 'Generated by create next app',
};

export default function PerangkatDesaLayout({ children }) {
	return (
		<>
			<HeroTitle
				textTop={'Perangkat Desa'}
				textMain={'Perangkat Desa'}
				textBottom={'Tumaratas'}
			/>
			{children}
		</>
	);
}