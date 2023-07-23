'use client';

import { useApbDes } from '@/hooks/useData';
import { API_URL } from '@/lib/utils';
import {
	Box,
	Button,
	Container,
	HStack,
	Skeleton,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function KeuanganDesaPage() {
	const [banner, setBanner] = useState();
	const { data, error, isLoading } = useApbDes();

	useEffect(() => {
		setBanner(!isLoading ? data[0]?.attributes.banner.data.attributes : null);
	}, [data, isLoading]);

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12">
						{banner ? (
							<Stack>
								<HStack px="4" pb="8" w="full" overflow="auto">
									{data.map(item => (
										<Stack key={item.id}>
											<Button
												onClick={() =>
													setBanner(item.attributes.banner.data.attributes)
												}
												bg={
													banner.name ===
													item.attributes.banner.data.attributes.name
														? 'custom.main'
														: 'gray.200'
												}
												color={
													banner.name ===
													item.attributes.banner.data.attributes.name
														? 'white'
														: 'gray.700'
												}
												textTransform="uppercase"
												_hover={{ opacity: '0.8' }}
											>
												APBDES {item.attributes.tahun}
											</Button>
										</Stack>
									))}
								</HStack>

								<Stack px="4" align="center">
									<Image
										src={API_URL + banner.url}
										width={banner.width}
										height={banner.height}
										alt={banner.name}
										priority
									/>
								</Stack>
							</Stack>
						) : null}
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}
