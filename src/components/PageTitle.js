'use client';

import {
	Box,
	Container,
	Heading,
	Stack,
	useColorModeValue,
} from '@chakra-ui/react';

export default function PageTitle({ title }) {
	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Stack py="12">
					<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
						<Heading size="xl" textTransform="uppercase">
							{title}
						</Heading>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
