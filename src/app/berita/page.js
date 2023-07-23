'use client';

import PostList from '@/components/feature/PostList';
import { usePosts } from '@/hooks/useData';
import {
	Box,
	Container,
	Skeleton,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';

export default function BeritaPage() {
	const { data, error, isLoading } = usePosts();

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
