// import { Helmet } from "react-helmet-async";
// @mui
import { Box, Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCallback } from "react";
import { Page404 } from "../Svg/Page404";
import { ButtonTexts, CommonTexts } from "../Ts/Utils/Text";

// ----------------------------------------------------------------------

export const StyledCenteredContent = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export const ErrorPage = ({
  title = CommonTexts.errorPageDefaultTitle,
  subTitle = CommonTexts.errorPageDefaultSubTitle,
  buttonText = ButtonTexts.login,
}) => {
  const onClickGoToDashboard = useCallback(() => {
    window.location.href = window.location.origin;
  }, []);
  return (
    <>
      <Container>
        <StyledCenteredContent
          sx={{ textAlign: "center", alignItems: "center" }}>
          <Typography variant="h3" paragraph>
            {title}
          </Typography>

          <Typography sx={{ color: "text.secondary" }}>{subTitle}</Typography>

          <Box sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}>
            <Page404 />
          </Box>

          <Button
            onClick={onClickGoToDashboard}
            sx={{ mt: 10 }}
            variant="contained">
            {buttonText}
          </Button>
        </StyledCenteredContent>
      </Container>
    </>
  );
};
