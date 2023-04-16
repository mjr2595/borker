import { ManageAccountsOutlined, EditOutlined, LocationOnOutlined, Person } from "@mui/icons-material";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import UserImage from "components/UserImage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import WidgetWrapper from "components/WidgetWrapper";

const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []);

  // TODO: Add loading component
  if (!user) {
    return null;
  }

  const { firstName, lastName, location, friends } = user;

  return (
    <WidgetWrapper>
      <FlexBetween gap="0.5rem" pb="1.1rem" onClick={() => navigate(`/profile/${userId}`)}>
        <FlexBetween gap="1rem">
          <UserImage image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={palette.neutral.dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Box display="flex" alignItems="center" gap="0.5rem" mb="0.5rem">
              <LocationOnOutlined fontSize="small" sx={{ color: palette.neutral.main }} />
              <Typography color={palette.neutral.medium}>{location}</Typography>
            </Box>
          </Box>
        </FlexBetween>
        <ManageAccountsOutlined />
      </FlexBetween>

      <Divider />

      <Box p="1rem 0">
        <Box display="flex" alignItems="center" gap="1rem">
          <Person fontSize="large" sx={{ color: palette.neutral.main }} />
          <Typography color={palette.neutral.medium}>
            WOW! You has <b>{friends.length}</b> frens! So good!
          </Typography>
        </Box>
      </Box>

      <Divider />

      <Box p="1rem 0">
        <Typography fontSize="1rem" color={palette.neutral.main} fontWeight="500" mb="1rem">
          Other Fun Places to Hang Out with Me!
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={palette.neutral.main} fontWeight="500">
                ChirpChirp
              </Typography>
              <Typography color={palette.neutral.medium}>birb frens</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: palette.neutral.main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin" />
            <Box>
              <Typography color={palette.neutral.main} fontWeight="500">
                ServiceSniffer
              </Typography>
              <Typography color={palette.neutral.medium}>dogs with jobs</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: palette.neutral.main }} />
        </FlexBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserWidget;
