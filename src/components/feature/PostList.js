'use client';

import { API_URL } from '@/lib/utils';
import {
	Grid,
	GridItem,
	Heading,
	Stack,
	useColorMode,
	Text,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function PostList({ data }) {
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
						onClick={() => router.push(`/berita/${item.id}`)}
						p="4"
						gap="4"
						rounded="2xl"
						// shadow="2xl"
						transition="all 200ms"
						cursor="pointer"
						_hover={{
							bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
							color: colorMode === 'light' ? 'gray.700' : 'gray.300',
						}}
					>
						<Stack
							bgImage={`url(
									${API_URL + item.attributes.foto.data.attributes.url}
									)`}
							bgSize="cover"
							bgPos="center"
							w="full"
							h="250px"
							rounded="2xl"
						></Stack>

						<Stack>
							<Heading size="md" textTransform="uppercase">
								{item.attributes.judul}
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
}
