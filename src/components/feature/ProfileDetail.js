'use client';

import { API_URL } from '@/lib/utils';
import {
	HStack,
	Heading,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export default function ProfileDetail({ data }) {
	return (
		<Stack>
			<Stack gap="12" direction={{ base: 'column', lg: 'row' }}>
				<Stack px="12" align="center">
					<Stack maxW="420px" w="full">
						<ProfilImage data={data} />
					</Stack>
				</Stack>

				<Stack flex="1">
					<Stack pl="2.5" borderLeft="4px" borderColor="custom.main">
						<Heading size="lg" textTransform="uppercase">
							Profil {data?.attributes.jabatan}
						</Heading>
					</Stack>

					<Stack
						mt="4"
						px={{ base: '0', lg: '4' }}
						spacing="0"
						fontSize="sm"
						textTransform="uppercase"
					>
						<ProfileData data={data} />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}

const ProfilImage = ({ data }) => {
	return (
		<Image
			src={
				API_URL +
				data?.attributes.perangkat.data.attributes.foto.data.attributes.url
			}
			width={
				data?.attributes.perangkat.data.attributes.foto.data.attributes.width
			}
			height={
				data?.attributes.perangkat.data.attributes.foto.data.attributes.height
			}
			alt={data?.attributes.perangkat.data.attributes.foto.data.attributes.name}
			priority
		/>
	);
};

const ProfileData = ({ data }) => {
	const {
		nama,
		jenisKelamin,
		tempatLahir,
		tanggalLahir,
		alamat,
		foto,
		agama,
		status,
		pendidikan,
		email,
		noTelepon,
	} = data?.attributes.perangkat.data.attributes;

	return (
		<>
			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">NAMA</Text>
				<Text>:</Text>
				<Text flex="2">{nama ? nama : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">TEMPAT, TGL LAHIR</Text>
				<Text>:</Text>
				<Text flex="2">
					{tempatLahir && tanggalLahir ? tempatLahir + ',' + tanggalLahir : '-'}
				</Text>
			</HStack>

			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">ALAMAT</Text>
				<Text>:</Text>
				<Text flex="2">{alamat ? alamat : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">JENIS KELAMIN</Text>
				<Text>:</Text>
				<Text flex="2">{jenisKelamin ? jenisKelamin : '-'}</Text>
			</HStack>

			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">AGAMA</Text>
				<Text>:</Text>
				<Text flex="2">{agama ? agama : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">STATUS</Text>
				<Text>:</Text>
				<Text flex="2">{status ? status : '-'}</Text>
			</HStack>

			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">PENDIDIKAN</Text>
				<Text>:</Text>
				<Text flex="2">{pendidikan ? pendidikan : '-'}</Text>
			</HStack>

			<HStack
				p="4"
				bg={useColorModeValue('gray.100', 'gray.700')}
				align="start"
				rounded="lg"
			>
				<Text flex="1">NO TELEPON</Text>
				<Text>:</Text>
				<Text flex="2">{noTelepon ? noTelepon : '-'}</Text>
			</HStack>

			<HStack p="4" align="start" rounded="lg">
				<Text flex="1">EMAIL</Text>
				<Text>:</Text>
				<Text flex="2">{email ? email : '-'}</Text>
			</HStack>
		</>
	);
};
