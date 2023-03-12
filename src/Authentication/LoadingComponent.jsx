import { Box, CircularProgress, Container } from "@mui/material";
import { StyledCenteredContent } from "./ErrorPage";

export const LoadingComponent = () => {
  return (
    <Container>
      <StyledCenteredContent
        sx={{
          textAlign: "center",
          alignItems: "center",
        }}>
        <Box sx={{ height: 260, mx: "auto", my: { xs: 5, sm: 10 } }}>
          <CircularProgress />
        </Box>
      </StyledCenteredContent>
    </Container>
  );
};
