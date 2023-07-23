'use client';

import { useStrukturOrganisasi } from '@/hooks/useData';
import { API_URL } from '@/lib/utils';
import {
	Box,
	Container,
	Heading,
	Skeleton,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function StrukturOrganisasiPage() {
	const { data, error, isLoading } = useStrukturOrganisasi();

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12" gap="8">
						<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
							<Heading size="lg" textTransform="uppercase">
								Struktur Organisasi dan Tata Kerja Pemerintahan <br /> Desa
								Tumaratas
							</Heading>
						</Stack>
						<Stack px="4" align="center">
							{data ? (
								<Image
									src={API_URL + data?.attributes.foto.data.attributes.url}
									width={data?.attributes.foto.data.attributes.width}
									height={data?.attributes.foto.data.attributes.height}
									alt={data?.attributes.foto.data.attributes.name}
									priority
								/>
							) : null}
						</Stack>
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}
