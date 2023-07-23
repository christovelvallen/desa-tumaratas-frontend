'use client';

import { Stack, useColorModeValue } from '@chakra-ui/react';
import Image from 'next/image';

export default function Logo() {
	return (
		<Stack maxW="200px">
			<Image
				src={useColorModeValue('/logo/dark.png', '/logo/light.png')}
				width={500}
				height={500}
				alt="logo"
				priority
			/>
		</Stack>
	);
}
