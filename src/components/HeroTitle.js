'use client';

import {
	Box,
	Container,
	Stack,
	Text,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';

export default function HeroTitle({ textTop, textMain, textBottom }) {
	const [isDesktop] = useMediaQuery('(min-width: 62em)');

	return (
		<Box>
			<Container maxW="6xl">
				<Stack py="12">
					<Stack
						p="6"
						bg="custom.main"
						color={useColorModeValue('white', 'gray.300')}
						textAlign="center"
						textTransform="uppercase"
						fontWeight="extrabold"
						rounded="3xl"
					>
						{isDesktop ? (
							<Text mb="-24" fontSize="8xl" opacity="0.2">
								{textTop}
							</Text>
						) : null}

						<Text fontSize={{ base: '4xl', lg: '7xl' }}>{textMain}</Text>

						{isDesktop ? (
							<Text mt="-24" fontSize="8xl" opacity="0.2">
								{textBottom}
							</Text>
						) : null}
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
