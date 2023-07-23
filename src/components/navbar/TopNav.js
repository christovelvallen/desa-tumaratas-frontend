'use client';

import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Box,
	Container,
	HStack,
	IconButton,
	Stack,
	Button,
	Divider,
	useMediaQuery,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { ChevronDownIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Logo from '../Logo';

export default function TopNav({ routes }) {
	const [isDesktop] = useMediaQuery('(min-width: 62em)');
	const { toggleColorMode } = useColorMode();

	return (
		<Box
			pos="sticky"
			top="0"
			left="0"
			right="0"
			zIndex="10"
			bg={useColorModeValue('white', 'gray.800')}
			color={useColorModeValue('gray.700', 'gray.300')}
		>
			<Container maxW="6xl">
				<HStack py="4" justify="space-between">
					<Stack>
						<Logo />
					</Stack>

					{isDesktop ? (
						<HStack>
							<HomeMenu />
							{routes.map((item, index) => (
								<DropdownMenu key={index} item={item} />
							))}
							<BeritaMenu />
						</HStack>
					) : null}

					<Stack>
						<IconButton
							onClick={toggleColorMode}
							icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
							fontSize="26px"
							color={useColorModeValue('gray.700', 'gray.300')}
							bg="transparent"
							_hover={{ bg: 'transparent' }}
						/>
					</Stack>
				</HStack>
			</Container>
			<Divider />
		</Box>
	);
}

const HomeMenu = () => {
	return (
		<Button
			fontSize="sm"
			color={useColorModeValue('gray.700', 'gray.300')}
			bg="transparent"
			_hover={{ bg: 'transparent', opacity: '0.8' }}
		>
			<Link href={'/'}>BERANDA</Link>
		</Button>
	);
};

const BeritaMenu = () => {
	return (
		<Button
			fontSize="sm"
			color={useColorModeValue('gray.700', 'gray.300')}
			bg="transparent"
			_hover={{ bg: 'transparent', opacity: '0.8' }}
		>
			<Link href={'/berita'}>BERITA</Link>
		</Button>
	);
};

const DropdownMenu = ({ item }) => {
	return (
		<Menu>
			<MenuButton
				as={Button}
				rightIcon={<ChevronDownIcon />}
				fontSize="sm"
				textTransform="uppercase"
				color={useColorModeValue('gray.700', 'gray.300')}
				bg="transparent"
				_hover={{ bg: 'transparent', opacity: '0.8' }}
				_expanded={{ bg: 'transparent', opacity: '0.8' }}
			>
				{item.name}
			</MenuButton>
			<MenuList px="2" fontSize="sm">
				{item.links.map((link, index) => (
					<MenuItem key={index} py="2" textTransform="uppercase" rounded="md">
						<Link href={link.href}>{link.name}</Link>
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};
