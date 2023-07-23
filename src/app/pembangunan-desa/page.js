'use client';

import {
	Box,
	Container,
	Heading,
	Stack,
	useColorModeValue,
	Grid,
	GridItem,
	useColorMode,
	Text,
	Skeleton,
} from '@chakra-ui/react';
import { API_URL } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { usePembangunan } from '@/hooks/useData';

export default function PembangunanDesaPage() {
	const { data, error, isLoading } = usePembangunan();

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12">
						<Stack>
							<PostList data={data} />
						</Stack>
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}

const PostList = ({ data }) => {
	const { colorMode } = useColorMode();
	const router = useRouter();

	return (
		<Grid
			templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
			gap={8}
		>
			{data?.map(item => (
				<GridItem key={item.id} w="full">
					<Stack
						onClick={() => router.push(`/pembangunan-desa/${item.id}`)}
						p="4"
						gap="4"
						rounded="2xl"
						transition="all 200ms"
						cursor="pointer"
						_hover={{
							bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
							color: colorMode === 'light' ? 'gray.700' : 'gray.300',
						}}
					>
						<Stack
							bgImage={`url(
									${API_URL + item.attributes.banner.data.attributes.url}
									)`}
							bgSize="cover"
							bgPos="center"
							w="full"
							h="250px"
							rounded="2xl"
						></Stack>

						<Stack>
							<Heading size="md" textTransform="uppercase">
								{item.attributes.jenisKegiatan}
							</Heading>
							<Text fontSize="sm" fontStyle="italic">
								Tanggal: {item.attributes.tanggal}
							</Text>
						</Stack>
					</Stack>
				</GridItem>
			))}
		</Grid>
	);
};
