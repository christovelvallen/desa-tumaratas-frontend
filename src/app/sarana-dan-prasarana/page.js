'use client';

import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
	Box,
	Container,
	Heading,
	Stack,
	useColorMode,
	Text,
	SkeletonText,
} from '@chakra-ui/react';
import { useSaranaPrasarana } from '@/hooks/useData';

export default function SaranadanPrasaranaPage() {
	const { data, isError, isLoading } = useSaranaPrasarana();
	const { colorMode } = useColorMode();

	return (
		<Box color={colorMode === 'light' ? 'gray.700' : 'gray.300'}>
			<Container maxW="3xl">
				<SkeletonText
					isLoaded={!isLoading}
					mb="4"
					noOfLines={12}
					spacing="4"
					w="full"
					skeletonHeight="4"
				>
					<Stack pb="12" gap="8">
						{data?.map(items => (
							<Stack key={items.id}>
								<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
									<Heading size="lg" textTransform="uppercase">
										{items.attributes.jenis}
									</Heading>
								</Stack>
								<Stack>
									<TableData items={items} />
								</Stack>
							</Stack>
						))}
					</Stack>
				</SkeletonText>
			</Container>
		</Box>
	);
}

const TableData = ({ items }) => {
	const data = items.attributes.infrastruktur_desa.data;

	return (
		<TableContainer>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>Nama</Th>
						<Th>Jumlah</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data.map(item => (
						<Tr key={item.id}>
							<Td>{item.attributes.nama}</Td>
							<Td>{item.attributes.jumlah}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
