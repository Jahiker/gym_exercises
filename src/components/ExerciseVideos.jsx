import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideo, name }) => {

  if (!exerciseVideo.length) return "Loading...";

  return (
    <Box
      sx={{
        marginTop: { lg: "200px", xs: "20px" },
        p: "20px",
      }}
    >
      <Typography variant="h4" mb={"33px"} fontWeight="bold">
        Watch{" "}
        <span style={{ color: "#ff2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        justifyContent={"flex-start"}
        flexWrap="wrap"
        alignItems={"center"}
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
        {exerciseVideo?.slice(0, 6).map((item, index) => {
          if (item.playlist) {
            return (
              <a
                key={`video=${index}`}
                className="exercise-video"
                href={`https://www.youtube.com/watch?=${item.playlist.playlistId}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.playlist.thumbnails[0].url}
                  alt={item.playlist.title}
                  style={{
                    with: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography variant="h5" color={"#000"} fontWeight="bold">{ item.playlist.title }</Typography>
                  <Typography variant="h5" color={"#000"} fontWeight="medium">{ item.playlist.channelName }</Typography>
                </Box>
              </a>
            );
          } else {
            return (
              <a
                key={`video=${index}`}
                className="exercise-video"
                href={`https://www.youtube.com/watch?=${item.video.videoId}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.video.thumbnails[0].url}
                  alt={item.video.title}
                  style={{
                    with: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <Box>
                  <Typography variant="h5" color={"#000"} fontWeight="bold">{ item.video.title }</Typography>
                  <Typography variant="h6" color={"#000"} fontWeight="medium">{ item.video.channelName }</Typography>
                </Box>
              </a>
            );
          }
        })}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
