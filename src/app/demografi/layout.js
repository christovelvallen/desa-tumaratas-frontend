import HeroTitle from '@/components/HeroTitle';

export const metadata = {
	title: 'Demografi | Desa Tumaratas',
	description: 'Generated by create next app',
};

export default function DemografiLayout({ children }) {
	return (
		<>
			<HeroTitle
				textTop={'Demografi Desa'}
				textMain={'Demografi'}
				textBottom={'Tumaratas'}
			/>
			{children}
		</>
	);
}
