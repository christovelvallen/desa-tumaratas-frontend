'use client';

import { usePembangunanById } from '@/hooks/useData';
import {
	Grid,
	GridItem,
	Heading,
	Stack,
	useColorMode,
	Text,
	Box,
	Container,
	Skeleton,
	useColorModeValue,
	HStack,
} from '@chakra-ui/react';
import { API_URL } from '@/lib/utils';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Image from 'next/image';

export default function PembangunanDesaDetail({ params }) {
	const { data, error, isLoading } = usePembangunanById(params.id);

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12">
						<Stack>{data ? <PostDetail data={data} /> : null}</Stack>
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}

const PostDetail = ({ data }) => {
	const { colorMode } = useColorMode();

	return (
		<Grid templateColumns="repeat(1, 1fr)">
			<GridItem w="full">
				<Stack px="4" gap="8">
					<Stack>
						<Heading size="lg" textTransform="uppercase">
							{data.attributes.jenisKegiatan}
						</Heading>
						<Text fontSize="md" fontStyle="italic">
							Tanggal: {data.attributes.tanggal}
						</Text>
					</Stack>

					<Stack
						bgImage={`url(
									${API_URL + data.attributes.banner.data.attributes.url}
									)`}
						bgSize="cover"
						bgPos="center"
						w="full"
						h={{ base: '250px', lg: '500px' }}
					></Stack>

					<Stack textTransform="uppercase" fontWeight="semibold">
						<TabelData data={data} />
					</Stack>

					<Stack gap="4">
						<Heading size="md" textTransform="uppercase">
							Keterangan
						</Heading>

						{data.attributes.keterangan ? (
							<Stack gap="6">
								<ReactMarkdown>{data.attributes.keterangan}</ReactMarkdown>
							</Stack>
						) : (
							<Text>-</Text>
						)}
					</Stack>

					<Stack gap="4">
						<Heading size="md" textTransform="uppercase">
							Foto Dokumentasi
						</Heading>
						{data.attributes.fotoDokumentasi.data ? (
							<ImagesList data={data.attributes.fotoDokumentasi.data} />
						) : (
							<Text>-</Text>
						)}
					</Stack>
				</Stack>
			</GridItem>
		</Grid>
	);
};

const TabelData = ({ data }) => {
	const {
		bidang,
		jenisKegiatan,
		volume,
		anggaran,
		lokasi,
		sumberDana,
		tahunAnggaran,
		pelaksanaKegiatan,
	} = data?.attributes;

	return (
		<>
			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">bidang</Text>
				<Text>:</Text>
				<Text flex="2">{bidang ? bidang : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">jenis Kegiatan</Text>
				<Text>:</Text>
				<Text flex="2">
					{jenisKegiatan && jenisKegiatan ? jenisKegiatan : '-'}
				</Text>
			</HStack>

			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">volume</Text>
				<Text>:</Text>
				<Text flex="2">{volume ? volume : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">anggaran</Text>
				<Text>:</Text>
				<Text flex="2">{anggaran ? anggaran : '-'}</Text>
			</HStack>

			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">lokasi</Text>
				<Text>:</Text>
				<Text flex="2">{lokasi ? lokasi : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">sumber Dana</Text>
				<Text>:</Text>
				<Text flex="2">{sumberDana ? sumberDana : '-'}</Text>
			</HStack>

			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">tahun Anggaran</Text>
				<Text>:</Text>
				<Text flex="2">{tahunAnggaran ? tahunAnggaran : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">pelaksana Kegiatan</Text>
				<Text>:</Text>
				<Text flex="2">{pelaksanaKegiatan ? pelaksanaKegiatan : '-'}</Text>
			</HStack>
		</>
	);
};

const ImagesList = data => {
	return (
		<Grid
			templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(4, 1fr)' }}
			gap={4}
		>
			{data.data.map(item => (
				<GridItem key={item.id} w="full">
					<Stack>
						<Image
							src={API_URL + item.attributes.url}
							width={item.attributes.width}
							height={item.attributes.height}
							alt={item.attributes.name}
							priority
						/>
					</Stack>
				</GridItem>
			))}
		</Grid>
	);
};
