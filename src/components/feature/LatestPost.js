'use client';

import { useLatestPost } from '@/hooks/useData';
import { API_URL } from '@/lib/utils';
import {
	Heading,
	Stack,
	Text,
	useColorMode,
	Box,
	Container,
	Skeleton,
	Divider,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import SwiperAutoPlay from '../swiper/SwiperAutoPlay';
import { SwiperSlide } from 'swiper/react';

export default function LatestPost() {
	const { colorMode } = useColorMode();
	const { data, isError, isLoading } = useLatestPost();
	const router = useRouter();

	return (
		<Box color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
			<Divider />
			<Container maxW="6xl">
				<Stack py="12" gap="8">
					<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
						<Heading size="xl" textTransform="uppercase">
							Berita Terbaru
						</Heading>
					</Stack>

					<Stack px={{ base: '0', lg: '4' }}>
						<Skeleton isLoaded={!isLoading}>
							<SwiperAutoPlay>
								{data?.map(item => (
									<SwiperSlide
										key={item.id}
										style={{ maxWidth: '400px', width: 'full' }}
									>
										<Stack onClick={() => router.push(`/berita/${item.id}`)}>
											<Stack
												p="4"
												gap="4"
												rounded="2xl"
												transition="all 200ms"
												cursor="pointer"
												_hover={{
													bg: colorMode === 'light' ? 'gray.200' : 'gray.700',
													color:
														colorMode === 'light' ? 'gray.700' : 'gray.300',
												}}
											>
												<Stack
													bgImage={`url(
															${API_URL + item.attributes.foto.data.attributes.url}
															)`}
													bgSize="cover"
													bgPos="center"
													w="full"
													h="250px"
													rounded="2xl"
												></Stack>

												<Stack>
													<Heading size="md" textTransform="uppercase">
														{item.attributes.judul}
													</Heading>
													<Text fontSize="sm" fontStyle="italic">
														Tanggal: {item.attributes.tanggal}
													</Text>
												</Stack>
											</Stack>
										</Stack>
									</SwiperSlide>
								))}
							</SwiperAutoPlay>
						</Skeleton>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
