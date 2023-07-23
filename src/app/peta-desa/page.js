'use client';

import { usePetaDesa } from '@/hooks/useData';
import { API_URL } from '@/lib/utils';
import {
	Box,
	Container,
	HStack,
	Heading,
	Skeleton,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function PetaDesaPage() {
	const { data, error, isLoading } = usePetaDesa();

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12" gap="8">
						<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
							<Heading size="lg" textTransform="uppercase">
								Peta Desa
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
						<Stack px="4">
							<Text fontWeight="semibold">Keterangan:</Text>
							<HStack>
								<Text w="150px">- Batas Wilayah</Text>
								<Text>:</Text>
								<Box w="100px" h="3px" bg="red.500"></Box>
							</HStack>
							<HStack>
								<Text w="150px">- Jalan Desa</Text>
								<Text>:</Text>
								<Box w="100px" h="3px" bg="blue.500"></Box>
							</HStack>
							<HStack>
								<Text w="150px">- Jalan Pertanian</Text>
								<Text>:</Text>
								<Box w="100px" h="3px" bg="gray.800"></Box>
							</HStack>
						</Stack>
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}
