'use client';

import ProfileDetail from '@/components/feature/ProfileDetail';
import { useHukumTua } from '@/hooks/useData';
import { API_URL } from '@/lib/utils';
import {
	Box,
	Container,
	Skeleton,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function HukumTuaPage() {
	const { data, error, isLoading } = useHukumTua();

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
