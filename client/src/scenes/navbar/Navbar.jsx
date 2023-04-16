import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Pets,
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Groups,
  Event,
  Menu,
  Close,
} from "@mui/icons-material";
//import PetsIcon from "@mui/icons-material/Pets";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "features/authSlice";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const logo = theme.palette.background.logo;
  const nav = theme.palette.background.nav;

  const fullName = `${user.firstName} ${user.lastName}`;
  //const fullName = "Test McTestface";

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={nav}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            color: logo,
            "&:hover": {
              color: neutralLight,
              cursor: "pointer",
            },
          }}
          variant="h1"
        >
          Barkb
          <Pets />
          <Pets />k
        </Typography>

        {isNonMobileScreens && (
          <>
            <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
              <InputBase placeholder="Search" />
              <IconButton>
                <Search />
              </IconButton>
            </FlexBetween>
            <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ color: dark, fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: primaryLight, fontSize: "25px" }} />
              )}
            </IconButton>
          </>
        )}
      </FlexBetween>

      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          {theme.palette.mode === "dark" ? (
            <>
              <Message sx={{ color: dark, fontSize: "25px" }} />
              <Groups sx={{ color: dark, fontSize: "25px" }} />
              <Event sx={{ color: dark, fontSize: "25px" }} />
              <Notifications sx={{ color: dark, fontSize: "25px" }} />
            </>
          ) : (
            <>
              <Message sx={{ color: primaryLight, fontSize: "25px" }} />
              <Groups sx={{ color: primaryLight, fontSize: "25px" }} />
              <Event sx={{ color: primaryLight, fontSize: "25px" }} />
              <Notifications sx={{ color: primaryLight, fontSize: "25px" }} />
            </>
          )}
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
          <Menu />
        </IconButton>
      )}

      {/* Mobile Nav */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* Close Icon */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}>
              <Close />
            </IconButton>
          </Box>

          {/* Menu Items */}
          <FlexBetween display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="3rem">
            <IconButton onClick={() => dispatch(setMode())} sx={{ fontSize: "25px" }}>
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Groups sx={{ fontSize: "25px" }} />
            <Event sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => dispatch(setLogout())}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export default Navbar;
