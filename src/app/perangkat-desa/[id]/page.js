'use client';

import ProfileDetail from '@/components/feature/ProfileDetail';
import {
	Box,
	Container,
	Skeleton,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import { usePerangkatByid } from '@/hooks/useData';

export default function PerangkatDesaDetail({ params }) {
	const { data, error, isLoading } = usePerangkatByid(params.id);

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12">
						{data ? (
							<Stack>
								<ProfileDetail data={data[0]} />
							</Stack>
						) : null}
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}
