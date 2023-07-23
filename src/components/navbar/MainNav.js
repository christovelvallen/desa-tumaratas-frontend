'use client';

import TopNav from './TopNav';
import BottomNav from './BottomNav';
import { useMediaQuery } from '@chakra-ui/react';
import { siteConfig } from '@/lib/siteConfig';

export default function MainNav() {
	const [isDesktop] = useMediaQuery('(min-width: 62em)');

	return (
		<>
			<TopNav routes={siteConfig} />
			{!isDesktop ? <BottomNav routes={siteConfig} /> : null}
		</>
	);
}
