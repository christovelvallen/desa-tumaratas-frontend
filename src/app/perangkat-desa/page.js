'use client';

import ProfileCard from '@/components/feature/ProfileCard';
import { usePemerintahan } from '@/hooks/useData';
import {
	Box,
	Container,
	Grid,
	GridItem,
	Heading,
	Skeleton,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';

export default function PerangkatDesaPage() {
	const { data, error, isLoading } = usePemerintahan();

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12" px="12">
						<Grid
							gap={8}
							templateColumns={{
								base: 'repeat(1, 1fr)',
								md: 'repeat(3, 1fr)',
								lg: 'repeat(4, 1fr)',
							}}
						>
							{data?.map(item => (
								<GridItem key={item.id} w="full%">
									<ProfileCard data={item} />
								</GridItem>
							))}
						</Grid>
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}
