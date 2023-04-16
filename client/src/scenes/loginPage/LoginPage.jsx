import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import PetsIcon from "@mui/icons-material/Pets";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center">
        <Typography fontWeight="bold" fontSize="32px" color="primary">
          B
          <PetsIcon />
          rker
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
        textAlign="center"
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          Henlo frens! Welcome to Barkbook, social media for doggos!
        </Typography>
        <LoginForm />
      </Box>
    </Box>
  );
};

export default LoginPage;
