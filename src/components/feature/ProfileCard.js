'use client';

import { API_URL } from '@/lib/utils';
import { Heading, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

export default function ProfileCard({ data }) {
	const router = useRouter();

	return (
		<Stack
			onClick={() => router.push(`/perangkat-desa/${data?.id}`)}
			rounded="3xl"
			shadow="lg"
			cursor="pointer"
			overflow="hidden"
			transition="all 200ms"
			_hover={{ opacity: '0.9' }}
		>
			<Stack
				bgImage={`url(${
					API_URL +
					data?.attributes.perangkat.data.attributes.foto.data.attributes.url
				})`}
				bgPos="top"
				bgSize="cover"
				w="full"
				h="250px"
			></Stack>
			<Stack pb="4" px="4" textAlign="center">
				<Heading size="md">{data?.attributes.jabatan}</Heading>
				<Text fontSize="sm">
					{data?.attributes.perangkat.data.attributes.nama}
				</Text>
			</Stack>
		</Stack>
	);
}
