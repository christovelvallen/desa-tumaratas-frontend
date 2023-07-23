'use client';

import { useStatistikPenduduk } from '@/hooks/useData';
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

export default function DemografiPage() {
	const { data, isError, isLoading } = useStatistikPenduduk();
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
						<Stack>
							<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
								<Heading size="lg" textTransform="uppercase">
									Batas Desa
								</Heading>
							</Stack>
							<Stack>
								<TableBatasDesa />
							</Stack>
						</Stack>
						<Stack>
							<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
								<Heading size="lg" textTransform="uppercase">
									Wilayah Desa
								</Heading>
							</Stack>
							<Stack px="4">
								<Text>
									Luas keseluruhan wilayah Desa TUMARATAS yaitu 925 ha. Wilayah
									dimaksud mencakup daerah pemukiman, tanah pekarangan, area
									persawahan, Iahan perkebunan, hutan lindung, dan hutan rakyat.
								</Text>
							</Stack>
						</Stack>
						<Stack>
							<StatistikPenduduk data={data} />
						</Stack>
					</Stack>
				</SkeletonText>
			</Container>
		</Box>
	);
}

const StatistikPenduduk = ({ data }) => {
	return (
		<Stack gap="8">
			{data?.map(items => (
				<Stack key={items.id}>
					<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
						<Heading size="lg" textTransform="uppercase">
							{items.attributes.keterangan}
						</Heading>
					</Stack>
					<Stack>
						<TableDataPenduduk items={items} />
					</Stack>
				</Stack>
			))}
		</Stack>
	);
};

const TableDataPenduduk = ({ items }) => {
	const data = items.attributes.data.data;

	return (
		<TableContainer>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>Keterangan</Th>
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

const TableBatasDesa = () => {
	return (
		<TableContainer>
			<Table variant="simple">
				<Thead>
					<Tr>
						<Th>Arah</Th>
						<Th>Wilayah</Th>
					</Tr>
				</Thead>
				<Tbody>
					<Tr>
						<Td>Sebelah Utara</Td>
						<Td>Kecematan Tompaso Barat</Td>
					</Tr>
					<Tr>
						<Td>Sebelah Selatan</Td>
						<Td>Kabupaten Minahasa Tenggara</Td>
					</Tr>
					<Tr>
						<Td>Sebelah Timur</Td>
						<Td>Kecamatan Langowan Utara</Td>
					</Tr>
					<Tr>
						<Td>Sebelah Barat</Td>
						<Td>Kabupaten Minahasa Selatan</Td>
					</Tr>
				</Tbody>
			</Table>
		</TableContainer>
	);
};
