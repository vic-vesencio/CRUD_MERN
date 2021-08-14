import { createTheme } from '@material-ui/core/styles';

export const darkTheme = createTheme({
   palette: {
      type: "dark",
      primary: {
         main: "#26a27b"
      },
      secondary: {
         main: "#fafafa"
      }
   }
})
export const lightTheme = createTheme({
   palette: {
      type: "light",
      primary: {
         main: "#fafafa"
      },
      secondary: {
         main: "#26a27b"
      }
   }
})
