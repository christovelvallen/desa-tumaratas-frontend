'use client';

import {
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer,
} from '@chakra-ui/react';

export default function TableData({ data }) {
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
}
