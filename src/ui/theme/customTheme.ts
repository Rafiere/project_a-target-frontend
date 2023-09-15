import {extendTheme} from "@chakra-ui/react";

const customTheme = extendTheme({
    colors: {
        custom: {
            blue: '#AEDFF7',
            secondary: '#FFD700',
        },
        system: {
            success: '#4CAF50',
            warning: '#FFC107',
            error: '#FF5252',
        },
        gray: {
            100: '#212529',
            200: '#343A40',
            300: '#495057',
            400: '#868E96',
            500: '#ADB5BD',
            600: '#DEE2E6',
            700: '#E9ECEF',
            800: '#F1F3F5',
            900: '#F5F5FF'
        }
    }
})

export default customTheme
