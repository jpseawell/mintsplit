import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";
import { useProject } from "../../contexts/Project";
import { useSongs } from "../../contexts/Songs";
import { getTokenRanges } from "../ManageRevenueSplits/getTokenRanges";

function ProjectCard() {
  const { project } = useProject();
  const { songs } = useSongs();
  const { name, symbol, description, artistName, mintCost, mintLimit } =
    project;
  const tokenRanges = getTokenRanges(songs);
  const totalNFTCount = tokenRanges[tokenRanges.length - 1][1];
  return (
    <Card
      sx={{
        width: "100%",
        textAlign: "left",
        padding: ".5rem 1rem",
        marginBottom: "1rem",
      }}
    >
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {name}
        </Typography>
        <Stack spacing={1}>
          <Typography variant="body1">({symbol.toUpperCase()})</Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="body1">by {artistName}</Typography>
        </Stack>
        <Divider sx={{ width: "100%", marginY: "1rem" }} />
        <Stack spacing={1}>
          <Typography variant="body1">
            <strong>Mint Cost:</strong> {mintCost} Ξ
          </Typography>
          <Typography variant="body1">
            <strong># of Songs:</strong> {songs.length}
          </Typography>
          <Typography variant="body1">
            <strong>Mint Limit:</strong> {mintLimit === 0 ? "-" : mintLimit}
          </Typography>
          <Typography variant="body1">
            <strong>Total NFTs created:</strong> {totalNFTCount}
          </Typography>
          <Typography variant="body1">
            <strong>Total Project Value:</strong> {totalNFTCount * mintCost} Ξ
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
