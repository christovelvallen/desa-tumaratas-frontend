'use client';

import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export const useGallery = () => {
	const { data, error, isLoading } = useSWR('/api/gallery?populate=*', fetcher);
	return { data, error, isLoading };
};

export const useVisiMisi = () => {
	const { data, error, isLoading } = useSWR(
		'/api/visi-dan-misi?populate=*',
		fetcher
	);
	return { data, error, isLoading };
};

export const usePotensiDesa = () => {
	const { data, error, isLoading } = useSWR(
		'/api/potensi-desa?populate=*',
		fetcher
	);
	return { data, error, isLoading };
};

export const usePetaDesa = () => {
	const { data, error, isLoading } = useSWR(
		'/api/peta-desa?populate=*',
		fetcher
	);
	return { data, error, isLoading };
};

export const useStatistikPenduduk = () => {
	const { data, error, isLoading } = useSWR(
		'/api/statistik-penduduks?populate=*',
		fetcher
	);
	return { data, error, isLoading };
};

export const useStatistikPendudukFilter = find => {
	const { data, error, isLoading } = useSWR(
		`/api/statistik-penduduks?filters[keterangan][$eq]=${find}&populate=*`,
		fetcher
	);
	return { data, error, isLoading };
};

export const useSaranaPrasarana = () => {
	const { data, error, isLoading } = useSWR(
		'/api/sarana-dan-prasaranas?populate=*',
		fetcher
	);
	return { data, error, isLoading };
};

export const useStrukturOrganisasi = () => {
	const { data, error, isLoading } = useSWR(
		'/api/struktur-organisasi?populate=*',
		fetcher
	);
	return { data, error, isLoading };
};

export const useHukumTua = () => {
	const { data, error, isLoading } = useSWR(
		'/api/pemerintahan-desas?filters[jabatan][$eqi]=Hukum%20Tua&populate[perangkat][populate][0]=foto',
		fetcher
	);
	return { data, error, isLoading };
};

export const usePemerintahan = () => {
	const { data, error, isLoading } = useSWR(
		'/api/pemerintahan-desas?populate[perangkat][populate][0]=foto',
		fetcher
	);
	return { data, error, isLoading };
};

export const usePerangkatByid = id => {
	const { data, error, isLoading } = useSWR(
		`/api/pemerintahan-desas?filters[id][$eqi]=${id}&populate[perangkat][populate][0]=foto`,
		fetcher
	);
	return { data, error, isLoading };
};

export const useTableKelembagaan = path => {
	const { data, error, isLoading } = useSWR(
		`/api/${path}?populate[perangkat][populate][0]=foto`,
		fetcher
	);
	return { data, error, isLoading };
};

export const useApbDes = () => {
	const { data, error, isLoading } = useSWR(
		'/api/apbdesas?sort=tahun%3Adesc&populate=*',
		fetcher
	);
	return { data, error, isLoading };
};

export const usePosts = () => {
	const { data, error, isLoading } = useSWR(
		`/api/beritas?sort=tanggal%3Adesc&populate=*`,
		fetcher
	);
	return { data, error, isLoading };
};

export const usePostById = id => {
	const { data, error, isLoading } = useSWR(
		`/api/beritas/${id}?populate=*`,
		fetcher
	);
	return { data, error, isLoading };
};

export const useLatestPost = () => {
	const { data, error, isLoading } = useSWR(
		`/api/beritas?populate=*&sort=tanggal%3Adesc&pagination[page]=1&pagination[pageSize]=4`,
		fetcher
	);
	return { data, error, isLoading };
};

export const usePembangunan = () => {
	const { data, error, isLoading } = useSWR(
		`/api/pembangunan-desas?sort=tanggal%3Adesc&populate=*`,
		fetcher
	);
	return { data, error, isLoading };
};

export const usePembangunanById = id => {
	const { data, error, isLoading } = useSWR(
		`/api/pembangunan-desas/${id}?populate=*`,
		fetcher
	);
	return { data, error, isLoading };
};
