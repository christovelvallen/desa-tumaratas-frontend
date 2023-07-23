import {
	RiProfileLine,
	RiGovernmentLine,
	RiInformationLine,
} from 'react-icons/ri';

export const siteConfig = [
	{
		name: 'Profil Desa',
		icon: RiProfileLine,
		links: [
			{ name: 'Sejarah Desa', href: '/sejarah-desa' },
			{ name: 'Potensi Desa', href: '/potensi-desa' },
			{ name: 'Peta Desa', href: '/peta-desa' },
			{ name: 'Demografi', href: '/demografi' },
			{ name: 'Sarana dan Prasarana', href: '/sarana-dan-prasarana' },
		],
	},
	{
		name: 'Pemerintahan',
		icon: RiGovernmentLine,
		links: [
			{ name: 'Visi dan Misi', href: '/visi-dan-misi' },
			{ name: 'Hukum Tua', href: '/hukum-tua' },
			{ name: 'Perangkat Desa', href: '/perangkat-desa' },
			{ name: 'Struktur Organisasi', href: '/struktur-organisasi' },
			{ name: 'Kelembagaan', href: '/kelembagaan' },
		],
	},
	{
		name: 'Informasi',
		icon: RiInformationLine,
		links: [
			{ name: 'Keuangan Desa', href: '/keuangan-desa' },
			{ name: 'Pembangunan Desa', href: '/pembangunan-desa' },
		],
	},
];
