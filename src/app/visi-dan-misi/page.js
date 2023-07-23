'use client';

import { useVisiMisi } from '@/hooks/useData';
import {
	Box,
	Container,
	Heading,
	SkeletonText,
	Stack,
	useColorMode,
} from '@chakra-ui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function VisidanMisiPage() {
	const { data, isError, isLoading } = useVisiMisi();
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
					<Stack pb="12">
						<Content data={data} />
					</Stack>
				</SkeletonText>
			</Container>
		</Box>
	);
}

const Content = ({ data }) => {
	return (
		<Stack gap="8">
			<Stack>
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						Visi
					</Heading>
				</Stack>
				<Stack px="4">
					<ReactMarkdown>{`"${data?.attributes.visi}"`}</ReactMarkdown>
				</Stack>
			</Stack>

			<Stack>
				<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
					<Heading size="lg" textTransform="uppercase">
						Misi
					</Heading>
				</Stack>
				<Stack px="8">
					<ReactMarkdown>{data?.attributes.misi}</ReactMarkdown>
				</Stack>
			</Stack>
		</Stack>
	);
};
