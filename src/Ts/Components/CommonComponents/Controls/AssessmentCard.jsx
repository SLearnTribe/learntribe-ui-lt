import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Link,
  Tooltip,
  Typography,
} from "@mui/material";
import capitalize from "lodash/capitalize";
import {
  JustifyContentSpaceBetweenAlignCenterSxStyles,
  SxStylesAskWhy,
} from "../../../CommonStyles/CommonSxStyles";
import {
  AssessmentDifficultyLevelColorMap,
  AssessmentStatusMap,
} from "../../../Configs/Dashboards/DashboardsConfig";
import { hanldeStartBtnDisable } from "../../../Utils/AssessmentUtils/AssessmentsUtils";
import { AssessmentTexts, ButtonTexts } from "../../../Utils/Text";

export const AssessmentCard = ({
  id,
  difficulty,
  status,
  onStartAssessment = () => null,
  title,
  askWhy = null,
  businessName = "",
  sx = {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  row = false,
}) => {
  return (
    <Card row={row} key={crypto.randomUUID()} sx={sx}>
      <CardHeader
        title={
          businessName === "" ? (
            <Chip
              label="Recommended"
              size="small"
              color="success"
              variant="outlined"
            />
          ) : null
        }
        action={
          businessName !== "" ? (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Tooltip placement="top" title={askWhy} arrow>
                <Link sx={SxStylesAskWhy}>{AssessmentTexts.askWhy}</Link>
              </Tooltip>
              {/* <IconButton
                      row-data={JSON.stringify(row)}
                      onClick={onToggleSave}>
                      {status === "SAVED" ? (
                        <BookmarkIcon color="primary" />
                      ) : (
                        <BookmarkBorderIcon color="primary" />
                      )}
                    </IconButton> */}
            </Box>
          ) : null
        }
      />
      <CardContent sx={{ pt: 0, pb: 0 }}>
        <Box>
          <Typography sx={{ fontSize: 20, fontWeight: 600, pb: 1 }}>
            {title}
          </Typography>
          <Chip
            sx={{
              mr: 2,
              color: AssessmentDifficultyLevelColorMap?.[difficulty]?.color,
              backgroundColor:
                AssessmentDifficultyLevelColorMap?.[difficulty]?.bgColor,
            }}
            key={crypto.randomUUID()}
            label={capitalize(difficulty)}
            size="small"
          />
        </Box>
      </CardContent>
      <CardActions sx={JustifyContentSpaceBetweenAlignCenterSxStyles}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
            color: AssessmentStatusMap[status?.toLowerCase()],
          }}>
          {capitalize(status)}
        </Typography>
        <Button
          disabled={hanldeStartBtnDisable(status)}
          variant="contained"
          data-id={id}
          onClick={onStartAssessment}>
          {ButtonTexts.startNow}
        </Button>
      </CardActions>
    </Card>
  );
};
