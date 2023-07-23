'use client';

import { useTableKelembagaan } from '@/hooks/useData';
import {
	ArrowForwardIcon,
	ArrowRightIcon,
	ChevronRightIcon,
} from '@chakra-ui/icons';
import {
	Box,
	Container,
	HStack,
	Heading,
	Icon,
	Skeleton,
	Stack,
	Table,
	TableContainer,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useColorModeValue,
	useColorMode,
	useMediaQuery,
	Select,
	Button,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function KelembagaanPage() {
	const [url, setUrl] = useState('badan-pemusyawaratan-desas');
	const [title, setTitle] = useState('badan pemusyawaratan desa');
	const { data, error, isLoading } = useTableKelembagaan(url);

	const [isDesktop] = useMediaQuery('(min-width: 62em)');
	const { colorMode } = useColorMode();

	const items = [
		{
			name: 'BPD',
			nameFull: 'badan pemusyawaratan desa',
			namePath: 'badan-pemusyawaratan-desas',
		},
		{
			name: 'BUMDES',
			nameFull: 'badan usaha milik desa',
			namePath: 'badan-usaha-milik-desas',
		},
		{
			name: 'LPM',
			nameFull: 'lembaga pemberdayaan masyarakat',
			namePath: 'lembaga-pemberdayaan-masyarakats',
		},
		{
			name: 'PKK',
			nameFull: 'pemberdayaan kesejahteraan keluarga',
			namePath: 'pemberdayaan-kesejahteraan-keluargas',
		},
		{
			name: 'Karang Taruna',
			nameFull: 'karang taruna',
			namePath: 'karang-tarunas',
		},
	];

	const handleContent = item => {
		setUrl(item.namePath);
		setTitle(item.nameFull);
	};

	return (
		<Box color={useColorModeValue('gray.700', 'gray.300')}>
			<Container maxW="6xl">
				<Skeleton isLoaded={!isLoading}>
					<Stack pb="12" gap="8" direction={{ base: 'column', lg: 'row' }}>
						<Stack flex="1" px="4">
							<Stack py="2" spacing="0">
								<Heading textTransform="uppercase" size="md">
									Daftar Lembaga
								</Heading>
							</Stack>

							{isDesktop ? (
								items.map((item, index) => (
									<HStack
										onClick={() => handleContent(item)}
										key={index}
										p="4"
										bg={
											title === item.nameFull
												? colorMode === 'light'
													? 'gray.300'
													: 'gray.600'
												: colorMode === 'light'
												? 'gray.100'
												: 'gray.700'
										}
										textTransform="uppercase"
										transition="all 200ms"
										cursor="pointer"
										_hover={{ opacity: '0.8' }}
									>
										<Icon as={ChevronRightIcon} />
										<Text>{item.name}</Text>
									</HStack>
								))
							) : (
								<HStack pb="4" w="full" overflow="auto">
									{items.map((item, index) => (
										<Stack key={index}>
											<Button
												onClick={() => handleContent(item)}
												bg={
													title === item.nameFull
														? colorMode === 'light'
															? 'custom.main'
															: 'custom.main'
														: colorMode === 'light'
														? 'gray.100'
														: 'gray.700'
												}
												color={
													title === item.nameFull
														? colorMode === 'light'
															? 'white'
															: 'gray.300'
														: colorMode === 'light'
														? 'gray.700'
														: 'gray.300'
												}
												textTransform="uppercase"
												_hover={{ opacity: '0.8' }}
											>
												{item.name}
											</Button>
										</Stack>
									))}
								</HStack>
							)}
						</Stack>

						<Stack flex="2">
							{data ? (
								<Stack gap="8">
									<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
										<Heading size="lg" textTransform="uppercase">
											{title}
										</Heading>
									</Stack>
									<TableData data={data} />
								</Stack>
							) : null}
						</Stack>
					</Stack>
				</Skeleton>
			</Container>
		</Box>
	);
}

const TableData = ({ data }) => {
	return (
		<TableContainer>
			<Table variant="striped">
				<Thead>
					<Tr>
						<Th>No</Th>
						<Th>Jabatan</Th>
						<Th>Nama</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data?.map((item, index) => (
						<Tr key={item.id}>
							<Td>{++index}</Td>
							<Td textTransform="uppercase">{item.attributes.jabatan}</Td>
							<Td textTransform="uppercase">
								{item.attributes.perangkat.data
									? item.attributes.perangkat.data.attributes.nama
									: '-'}
							</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
