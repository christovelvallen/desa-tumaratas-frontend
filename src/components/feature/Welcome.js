'use client';

import { useHukumTua, useVisiMisi } from '@/hooks/useData';
import { API_URL } from '@/lib/utils';
import {
	Box,
	Container,
	Heading,
	Skeleton,
	Stack,
	Text,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';
import Image from 'next/image';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function Welcome() {
	const [isDesktop] = useMediaQuery('(min-width: 62em)');
	const { data, error, isLoading } = useHukumTua();

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Stack py="12">
					{!isDesktop ? (
						<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
							<Heading size="xl">HUKUM TUA</Heading>
							<Heading size="xl">DESA TUMARATAS</Heading>
						</Stack>
					) : null}

					<Skeleton isLoaded={!isLoading}>
						<Stack
							gap="8"
							direction={{ base: 'column', lg: 'row' }}
							align="center"
						>
							<Stack pt="8" px="8" maxW="400px" w="full">
								{data ? (
									<Image
										src={
											API_URL +
											data[0]?.attributes.perangkat.data.attributes.foto.data
												.attributes.url
										}
										width={
											data[0]?.attributes.perangkat.data.attributes.foto.data
												.attributes.width
										}
										height={
											data[0]?.attributes.perangkat.data.attributes.foto.data
												.attributes.height
										}
										alt={
											data[0]?.attributes.perangkat.data.attributes.foto.data
												.attributes.name
										}
										priority
									/>
								) : null}
							</Stack>

							<Stack gap="8">
								{isDesktop ? (
									<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
										<Heading size="xl">HUKUM TUA</Heading>
										<Heading size="xl">DESA TUMARATAS</Heading>
									</Stack>
								) : null}

								<Stack px="4">
									{data ? (
										<Heading size={{ base: '2xl', lg: '3xl' }}>
											{data[0]?.attributes.perangkat.data.attributes.nama}
										</Heading>
									) : null}
								</Stack>

								<Stack px="4">
									<Text>Dengan Visi:</Text>
									<Visi />
								</Stack>
							</Stack>
						</Stack>
					</Skeleton>
				</Stack>
			</Container>
		</Box>
	);
}

const Visi = () => {
	const { data, isError, isLoading } = useVisiMisi();

	return (
		<Skeleton isLoaded={!isLoading}>
			{data ? (
				<ReactMarkdown>{`"${data?.attributes.visi}"`}</ReactMarkdown>
			) : null}
		</Skeleton>
	);
};
