'use client';

import {
	Box,
	Container,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

export default function SejarahPage() {
	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="3xl">
				<Stack pb="12">
					<Stack>
						<Content />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}

const Content = () => {
	return (
		<Stack gap="8">
			<Stack>
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						Asal usul TUMARATAS
					</Heading>
				</Stack>
				<Stack px="4">
					<Text>
						Desa TUMARATAS berdiri pada tahun 1887. Asal usul TUMARATAS itu
						sendiri berawal dari masyarakat petani yang datang dari
						Langowan,Sonder,Tondano dan daerah lain dengan tujuan untuk berkebun
						atau membuka lahan pertanian baru, mereka juluki “SEMANGUMA” dari
						kata HUMA (Kebun).
					</Text>
				</Stack>
			</Stack>

			<Stack>
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						Asal usul Penduduk
					</Heading>
				</Stack>
				<Stack px="4">
					<Text>
						Pada awalnya, penduduk yang datang adalah untuk berkebun. Tapi lama
						kelamaan mulai ada yang menetap. Seiring dengan perjalanan waktu dan
						perkembangan yang ada, lahan pertanian semakin diperluas dan
						penggarap semakin banyak dan bangunan tempat tinggal makin
						bertambah. Walaupun penggarap kebun (SEMANGUMA) sudah mulai banyak,
						tetapi mereka masih berstatus penduduk desa asalnya. Dan karena
						tertarik dengan hasil pertanian yang diperoleh di lokasi pertanian
						yang ada, maka mereka mulai menata tempat tinggal dan mengatur
						jalur-jalur jalan.
					</Text>
				</Stack>
			</Stack>

			<Stack>
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						Asal usul Nama Tumaratas
					</Heading>
				</Stack>
				<Stack px="4">
					<Text>
						Nama Desa Tumaratas terambil dari nama atau sebutan sesuatu bunyi
						yang akibatkan adanya pergesekan dua cabang kayu beringin atau yang
						dikenal dengan sebutan nama “Pohon Wetes” di lokasi mata air yang
						pohonnya besar dan rimbun daunnya,yang dijadikan tempat orang-orang
						penggarap kebun bernaung baik musim kemarau maupun hujan. Disaat
						angin bertiup mengakibatkan terjadi pergesekan kedua cabang pohon
						beringin tersebut dan mengeluarkan atau memperdengarkan bunyi
						gesekan yang disebut “MATARETES” sesuai bahasa TOUNTEMBOAN. Lama
						kelamaan lokasi tempat adanya pohon beringin atau wetees itu
						dijuluki lokasi “MATARETES” Sehingga berangsur waktu kewaktu,nama
						tempat tersebut berubah menjadi “TUMARATAS” dan nama itu dijadikan
						Nama Desa sampai sekarang.
					</Text>
				</Stack>
			</Stack>

			<Stack>
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						TUMARATAS resmi menjadi Desa
					</Heading>
				</Stack>
				<Stack px="4">
					<Text>
						Pada tahun 1887 barulah Desa Tumaratas resmi menjadi Desa Definitif
						yang dikepalai oleh seorang Kepala Desa yang disebut HUKUM
						TUA.Dimana status Hukum Tua tersebut disamping sebagai kepala
						pemerintahan desa,juga sebagai kepala adat yang bekerja sama dengan
						tokoh-tokoh agama.ltulah sebabnya seorang Hukum Tua adalah pelaksana
						hukum, dan pelaksana adat serta pengendali agama.Makanya kedudukan
						sebagai Hukum Tua sangat dihormati dan disegani ditengah-tengah
						masyarakat.
					</Text>
				</Stack>
			</Stack>
		</Stack>
	);
};
