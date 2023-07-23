'use client';

import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalCloseButton,
	Box,
	Divider,
	HStack,
	Icon,
	Stack,
	Text,
	useDisclosure,
	Heading,
	useColorMode,
	useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { RiHome5Line, RiNewspaperLine } from 'react-icons/ri';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function BottomNav({ routes }) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [modalItem, setModalItem] = useState(null);

	return (
		<>
			<Box
				pos="fixed"
				bottom="0"
				left="0"
				right="0"
				zIndex="9999"
				color={useColorModeValue('gray.700', 'gray.300')}
				bg={useColorModeValue('white', 'gray.800')}
			>
				<Divider />
				<HStack spacing="0">
					<BtnHome modalAction={{ isOpen, onOpen, onClose }} />
					{routes.map((item, index) => (
						<BtnMenu
							key={index}
							item={item}
							modalAction={{ isOpen, onOpen, onClose }}
							modalState={{ modalItem, setModalItem }}
						/>
					))}
					<BtnBerita modalAction={{ isOpen, onOpen, onClose }} />
				</HStack>
			</Box>
			<ModalMenu
				modalAction={{ isOpen, onOpen, onClose }}
				modalState={{ modalItem, setModalItem }}
			/>
		</>
	);
}

const BtnHome = ({ modalAction }) => {
	const { isOpen, onOpen, onClose } = modalAction;
	const { colorMode } = useColorMode();
	const router = useRouter();

	const handleModal = () => {
		router.push('/');
		onClose();
	};

	return (
		<Stack
			onClick={handleModal}
			py="3"
			spacing="0"
			flex="1"
			textTransform="uppercase"
			textAlign="center"
			align="center"
			justify="center"
			userSelect="none"
			_active={{ bg: colorMode === 'light' ? 'gray.100' : 'gray.700' }}
		>
			<Icon as={RiHome5Line} fontSize="32px" />
			<Text fontSize="6px" fontWeight="semibold">
				Beranda
			</Text>
		</Stack>
	);
};

const BtnBerita = ({ modalAction }) => {
	const { isOpen, onOpen, onClose } = modalAction;
	const { colorMode } = useColorMode();
	const router = useRouter();

	const handleModal = () => {
		router.push('/berita');
		onClose();
	};

	return (
		<Stack
			onClick={handleModal}
			py="3"
			spacing="0"
			flex="1"
			textTransform="uppercase"
			textAlign="center"
			align="center"
			justify="center"
			userSelect="none"
			_active={{ bg: colorMode === 'light' ? 'gray.100' : 'gray.700' }}
		>
			<Icon as={RiNewspaperLine} fontSize="32px" />
			<Text fontSize="6px" fontWeight="semibold">
				Berita
			</Text>
		</Stack>
	);
};

const BtnMenu = ({ item, modalAction, modalState }) => {
	const { isOpen, onOpen, onClose } = modalAction;
	const { modalItem, setModalItem } = modalState;
	const { colorMode } = useColorMode();

	const handleModal = () => {
		onOpen();
		setModalItem(item);

		if (isOpen && modalItem === item) onClose();
	};

	return (
		<Stack
			onClick={handleModal}
			py="3"
			spacing="0"
			flex="1"
			textTransform="uppercase"
			textAlign="center"
			align="center"
			justify="center"
			userSelect="none"
			_active={{ bg: colorMode === 'light' ? 'gray.100' : 'gray.700' }}
		>
			<Icon as={item.icon} fontSize="32px" />
			<Text fontSize="6px" fontWeight="semibold">
				{item.name}
			</Text>
		</Stack>
	);
};

const ModalMenu = ({ modalAction, modalState }) => {
	const { isOpen, onOpen, onClose } = modalAction;
	const { modalItem, setModalItem } = modalState;
	const { colorMode } = useColorMode();
	const router = useRouter();

	const handleLink = path => {
		router.push(path);
		onClose();
	};

	return (
		<Modal
			isOpen={isOpen}
			onClose={onClose}
			closeOnOverlayClick={false}
			motionPreset="slideInBottom"
			size="full"
		>
			<ModalContent
				bg={useColorModeValue('white', 'gray.800')}
				color={useColorModeValue('gray.700', 'gray.300')}
			>
				<ModalCloseButton fontSize="16px" />
				<ModalHeader p="0">
					<Stack pt="8" px="8" textTransform="uppercase">
						<Heading>{modalItem?.name}</Heading>
					</Stack>
				</ModalHeader>
				<ModalBody p="0">
					<Stack p="8" pb="24" spacing="0">
						{modalItem?.links.map((link, index) => (
							<Stack
								onClick={() => handleLink(link.href)}
								key={index}
								spacing="0"
								textTransform="uppercase"
								userSelect="none"
								_active={{
									bg: colorMode === 'light' ? 'gray.100' : 'gray.700',
								}}
							>
								<HStack py="4" gap="4">
									<Icon as={ExternalLinkIcon} fontSize="12px" />
									<Text fontSize="xl">{link.name}</Text>
								</HStack>
								<Divider />
							</Stack>
						))}
					</Stack>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};
