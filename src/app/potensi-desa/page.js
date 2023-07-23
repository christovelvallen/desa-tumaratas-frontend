'use client';

import { usePotensiDesa } from '@/hooks/useData';
import {
	Box,
	Container,
	Heading,
	SkeletonText,
	Stack,
	useColorMode,
} from '@chakra-ui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function PotensiPage() {
	const { data, isError, isLoading } = usePotensiDesa();
	const { colorMode } = useColorMode();

	return (
		<Box color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
			<Container maxW="3xl">
				<SkeletonText
					isLoaded={!isLoading}
					mb="4"
					noOfLines={12}
					spacing="4"
					w="full"
					skeletonHeight="4"
				>
					{data ? (
						<Stack pb="12">
							<Content data={data} />
						</Stack>
					) : null}
				</SkeletonText>
			</Container>
		</Box>
	);
}

const Content = ({ data }) => {
	return (
		<Stack gap="8">
			<Stack gap="8">
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						hortikultura
					</Heading>
				</Stack>
				<Stack px="8" gap="4">
					<ReactMarkdown>{data?.attributes.hortikultura}</ReactMarkdown>
				</Stack>
			</Stack>

			<Stack gap="8">
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						wisata Alam
					</Heading>
				</Stack>
				<Stack px="8" gap="4">
					<ReactMarkdown>{data?.attributes.wisataAlam}</ReactMarkdown>
				</Stack>
			</Stack>
		</Stack>
	);
};
