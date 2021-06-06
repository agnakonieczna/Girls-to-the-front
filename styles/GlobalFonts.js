import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'Monument Extended';
        src: local('Monument Extended'), local('Monument Extended'),
        url('fonts/MonumentExtended-Regular.woff') format('woff'),
        url('fonts/MonumentExtended-Regular.woff2') format('woff2');
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Monument Extended Light';
        src: local('Monument Extended Light'), local('Monument Extended Light'),
        url('fonts/MonumentExtended-Light.woff') format('woff'),
        url('fonts/MonumentExtended-Light.woff2') format('woff2');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Monument Extended Bold';
        src: local('Monument Extended Bold'), local('Monument Extended Bold'),
        url('fonts/MonumentExtended-Black.woff') format('woff'),
        url('fonts/MonumentExtended-Black.woff2') format('woff2');
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }
`;