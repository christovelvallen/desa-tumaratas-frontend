'use client';

import { useGallery } from '@/hooks/useData';
import { API_URL } from '@/lib/utils';
import {
	Box,
	Container,
	Text,
	Skeleton,
	Stack,
	Button,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function HeroBanner() {
	const { data, error, isLoading } = useGallery();

	return (
		<Skeleton isLoaded={!isLoading}>
			<Box
				bg="black"
				bgImage={`url(${
					API_URL + data?.attributes.banner.data.attributes.url
				})`}
				bgPos="center"
				bgSize="cover"
			>
				<Container maxW="6xl" h="500px">
					<Stack h="full" textAlign="center" align="center" justify="center">
						<Stack>
							<Herotext />
						</Stack>
						{/* <Stack mt="8">
							<HeroButton />
						</Stack> */}
					</Stack>
				</Container>
			</Box>
		</Skeleton>
	);
}

const Herotext = () => {
	return (
		<Stack textTransform="uppercase">
			<Stack fontWeight="extrabold">
				<Stack
					opacity="0.5"
					letterSpacing="5px"
					fontSize={{ base: '2xl', md: '3xl', lg: '7xl' }}
					color="white"
					textShadow="0 0 100px #000000"
				>
					<Text>Selamat datang di</Text>
				</Stack>

				<Stack
					my={{ base: '-6', lg: '-20' }}
					letterSpacing="4px"
					fontSize={{ base: '5xl', md: '6xl', lg: '9xl' }}
					color="white"
					textShadow="0 0 100px #000000"
				>
					<Text>Tumaratas</Text>
				</Stack>

				<Stack
					mt={{ base: '2', lg: '4' }}
					opacity="0.5"
					letterSpacing="5px"
					fontSize={{ base: 'lg', md: 'xl', lg: '6xl' }}
					color="white"
					textShadow="0 0 100px #000000"
				>
					<Text>Pusat Informasi Desa</Text>
				</Stack>
			</Stack>
		</Stack>
	);
};

// const HeroButton = () => {
// 	const router = useRouter();

// 	return (
// 		<Button
// 			onClick={() => router.push('/potensi-desa')}
// 			variant="outline"
// 			size="lg"
// 			textTransform="uppercase"
// 			fontWeight="bold"
// 			color="white"
// 			rounded="full"
// 			shadow="2xl"
// 			_hover={{ bg: 'gray.100', color: 'gray.700' }}
// 		>
// 			Ada Apa di Tumaratas ?
// 		</Button>
// 	);
// };
