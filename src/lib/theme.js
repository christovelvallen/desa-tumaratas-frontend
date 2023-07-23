const { extendTheme } = require('@chakra-ui/react');

const theme = extendTheme({
	colors: {
		custom: {
			main: '#e6173c',
			second: '#f1e60d',
		},
	},
});

export default theme;
