import 'styled-components';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        typography: {
            fontSize: {
                xs: string;
                sm: string;
                reg: string;
                lg: string;
                xxl: string;
            };
        };
        colors: {
            primary: string;
            accent: string;
            background: string;
        };
        minBp: (string) => string;
    }
}
