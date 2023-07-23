'use client';

import { API_URL } from '@/lib/utils';
import { Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function PostDetail({ data }) {
	return (
		<Grid templateColumns="repeat(1, 1fr)">
			<GridItem w="full">
				<Stack px="4" gap="8">
					<Stack>
						<Heading size="lg" textTransform="uppercase">
							{data.attributes.judul}
						</Heading>
						<Text fontSize="md" fontStyle="italic">
							Tanggal: {data.attributes.tanggal}
						</Text>
					</Stack>

					<Stack
						bgImage={`url(
									${API_URL + data.attributes.foto.data.attributes.url}
									)`}
						bgSize="cover"
						bgPos="center"
						w="full"
						h={{ base: '250px', lg: '500px' }}
					></Stack>

					<Stack gap="6">
						<ReactMarkdown>{data.attributes.konten}</ReactMarkdown>
					</Stack>
				</Stack>
			</GridItem>
		</Grid>
	);
}
