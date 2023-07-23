'use client';

import HeroBanner from '@/components/HeroBanner';
import StatistikDesa from '@/components/feature/StatistikDesa';
import Welcome from '@/components/feature/Welcome';
import { Stack } from '@chakra-ui/react';

export default function Home() {
	return (
		<Stack spacing="0">
			<HeroBanner />
			<Welcome />
			<StatistikDesa />
		</Stack>
	);
}
