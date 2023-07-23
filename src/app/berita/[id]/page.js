'use client';

import PostDetail from '@/components/feature/PostDetail';
import { usePostById } from '@/hooks/useData';
import {
	Box,
	Container,
	Skeleton,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';

export default function BeritaDetail({ params }) {
	const { data, error, isLoading } = usePostById(params.id);

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
