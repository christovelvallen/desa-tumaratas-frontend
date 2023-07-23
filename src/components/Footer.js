'use client';

import {
	Box,
	Center,
	Container,
	Flex,
	HStack,
	Heading,
	Icon,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Logo from './Logo';
import { RiMailFill, RiMapPin2Fill, RiPhoneFill } from 'react-icons/ri';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
	return (
		<Stack spacing="0">
			<Box
				bg={useColorModeValue('gray.200', 'gray.900')}
				color={useColorModeValue('gray.700', 'gray.300')}
			>
				<Container maxW="6xl">
					<Stack py="12">
						<Stack gap="8" direction={{ base: 'column', lg: 'row' }}>
							<Stack flex="1">
								<Contact />
							</Stack>

							<Stack flex="1">
								<Map />
							</Stack>
						</Stack>
					</Stack>
				</Container>
			</Box>

			<BottomFooter />
		</Stack>
	);
}

const Contact = () => {
	return (
		<Stack>
			<Stack>
				<Heading>Kontak Kami:</Heading>
			</Stack>

			<Stack py="8" gap="4" opacity="0.8">
				<HStack gap="4">
					<Icon as={RiMapPin2Fill} fontSize="24px" />
					<Text fontSize={{ base: 'md', lg: 'lg' }}>
						Jl. Raya Tumaratas, Tumaratas Dua, Kecamatan Langowan Barat,
						Kabupaten Minahasa, Sulawesi Utara
					</Text>
				</HStack>
				<HStack gap="4">
					<Icon as={RiPhoneFill} fontSize="24px" />
					<Text fontSize={{ base: 'md', lg: 'lg' }}>081356969688</Text>
				</HStack>
				<HStack gap="4">
					<Icon as={RiMailFill} fontSize="24px" />
					<Text fontSize={{ base: 'md', lg: 'lg' }}>
						desatumaratas1887@gmail.com
					</Text>
				</HStack>
			</Stack>
		</Stack>
	);
};

const Map = () => {
	return (
		<Stack>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d997.251149240057!2d124.80836203222192!3d1.1571958023132962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32874799021f449d%3A0x571524fdc3d24855!2sKantor%20Desa%20Tumaratas!5e0!3m2!1sid!2sid!4v1688670309668!5m2!1sid!2sid"
				style={{
					width: '100%',
					height: '400px',
					border: '0',
					borderRadius: '1rem',
				}}
				allowFullScreen=""
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			></iframe>
		</Stack>
	);
};

const BottomFooter = () => {
	return (
		<Box
			bg={useColorModeValue('gray.200', 'gray.900')}
			color={useColorModeValue('gray.700', 'gray.300')}
		>
			<Container maxW="6xl">
				<Stack pt="12" pb={{ base: '28', lg: '12' }}>
					<Flex
						align={'center'}
						_before={{
							content: '""',
							borderBottom: '1px solid',
							borderColor: useColorModeValue('gray.200', 'gray.700'),
							flexGrow: 1,
							mr: 8,
						}}
						_after={{
							content: '""',
							borderBottom: '1px solid',
							borderColor: useColorModeValue('gray.200', 'gray.700'),
							flexGrow: 1,
							ml: 8,
						}}
					>
						<Logo />
					</Flex>
					<Stack pt={4} direction={'row'} justify="center" spacing={8}>
						<Center
							p="2"
							bg={useColorModeValue('gray.200', 'gray.800')}
							rounded="full"
							_hover={{ opacity: '0.8' }}
						>
							<Icon as={FaFacebook} fontSize="24px" />
						</Center>
						<Center
							p="2"
							bg={useColorModeValue('gray.200', 'gray.800')}
							rounded="full"
							_hover={{ opacity: '0.8' }}
						>
							<Icon as={FaInstagram} fontSize="24px" />
						</Center>
						<Center
							p="2"
							bg={useColorModeValue('gray.200', 'gray.800')}
							rounded="full"
							_hover={{ opacity: '0.8' }}
						>
							<Icon as={FaYoutube} fontSize="24px" />
						</Center>
					</Stack>
					<Text
						pt={4}
						fontSize={'md'}
						textAlign={'center'}
						fontWeight="semibold"
					>
						© 2023 KKN UNSRIT Angkatan XXII
					</Text>
				</Stack>
			</Container>
		</Box>
	);
};
