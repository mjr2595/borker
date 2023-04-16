import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdWidget = () => {
  const { palette } = useTheme();

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={palette.neutral.dark} variant="h5" fontWeight="500">
          thank u for snackos and $$$
        </Typography>
        <Typography color={palette.neutral.medium}>Advertize</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/ad1.jpg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={palette.neutral.main}>NotPeopleFood</Typography>
        <Typography color={palette.neutral.medium}>notpeoplefood.com</Typography>
      </FlexBetween>
      <Typography color={palette.neutral.medium} m="0.5rem 0">
        Dis is food for doggos. Pls eat dis instead of human plate foods. They do not like that even tho it is soooo
        goood.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdWidget;
