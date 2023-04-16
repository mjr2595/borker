import { Box, useMediaQuery, Divider, Typography, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar/Navbar";
import AdWidget from "scenes/widgets/AdWidget";
import FeedWidget from "scenes/widgets/FeedWidget";
import FriendListWidget from "scenes/widgets/FriendListWidget";
import NewPostWidget from "scenes/widgets/NewPostWidget";
import UserWidget from "scenes/widgets/UserWidget";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  const { palette } = useTheme();

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        {/* Col 1 */}
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath} />
        </Box>
        {/* Col 2 */}
        <Box flexBasis={isNonMobileScreens ? "42%" : undefined} mt={isNonMobileScreens ? undefined : "2rem"}>
          <NewPostWidget picturePath={picturePath} />
          <Divider sx={{ margin: "1.25rem 0" }} />
          <Typography fontSize="1rem" color={palette.neutral.main} fontWeight="500" mb="1rem">
            Look at what all my frens are sayin
          </Typography>
          <FeedWidget userId={_id} />
        </Box>
        {/* Col 3 */}
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdWidget />
            <Box m="2rem 0" />
            <FriendListWidget userId={_id} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
