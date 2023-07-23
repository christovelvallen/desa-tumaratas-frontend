'use client';

import { useStatistikPendudukFilter } from '@/hooks/useData';
import {
	Box,
	Container,
	Heading,
	Stack,
	useColorMode,
	Divider,
	Skeleton,
} from '@chakra-ui/react';

export default function StatistikDesa() {
	const { colorMode } = useColorMode();

	return (
		<Box color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
			<Divider />
			<Container maxW="6xl">
				<Stack py="12">
					<Stack>
						<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
							<Heading size="xl" textTransform="uppercase">
								STATISTIK DESA
							</Heading>
						</Stack>
						<Stack px="4">
							<Heading size="md" fontWeight="normal">
								Berikut adalah beberapa data statistik tentang Desa Tumaratas
							</Heading>
						</Stack>
					</Stack>

					<Stack>
						<DataResult />
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}

const DataResult = () => {
	const { colorMode } = useColorMode();
	const { data, error, isLoading } = useStatistikPendudukFilter(
		'Jumlah%20Penduduk%20Menurut%20Jenis%20Kelamin'
	);

	return (
		<Skeleton isLoaded={!isLoading} w="full">
			<Stack
				mt="8"
				px="4"
				gap="8"
				direction={{ base: 'column', lg: 'row' }}
				opacity="0.8"
			>
				<Stack flex="1">
					<Heading>Jumlah Penduduk</Heading>
					<Stack mt="4" gap="4" direction={{ base: 'column', lg: 'row' }}>
						{data
							? data[0].attributes.data.data?.map(item => (
									<Stack
										key={item.id}
										p="4"
										flex="1"
										bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
										rounded="2xl"
									>
										<Heading size="lg">{item.attributes.jumlah}</Heading>
										<Heading size="md">{item.attributes.nama}</Heading>
									</Stack>
							  ))
							: null}
					</Stack>
				</Stack>

				<Stack flex={{ base: '1', lg: '0' }}>
					<LuasWilayah />
				</Stack>
			</Stack>
		</Skeleton>
	);
};

const LuasWilayah = () => {
	const { colorMode } = useColorMode();

	return (
		<Stack
			p="8"
			minW="300px"
			w="full"
			bg={colorMode === 'light' ? 'gray.100' : 'gray.700'}
			rounded="2xl"
		>
			<Heading size="lg">Luas Wilayah</Heading>
			<Heading size="4xl">925</Heading>
			<Heading size="xl">Hektar</Heading>
		</Stack>
	);
};
