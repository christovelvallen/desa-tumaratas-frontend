import HeroTitle from '@/components/HeroTitle';

export const metadata = {
	title: 'Sejarah Desa | Desa Tumaratas',
	description: 'Generated by create next app',
};

export default function SejarahLayout({ children }) {
	return (
		<>
			<HeroTitle
				textTop={'Sejarah Desa'}
				textMain={'Sejarah Desa'}
				textBottom={'Tumaratas'}
			/>
			{children}
		</>
	);
}