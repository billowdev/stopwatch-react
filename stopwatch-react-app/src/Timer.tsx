import {
  Box,
  Button,
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCallback, useEffect, useRef, useState } from "react";
import Layout from "./Layout";

const Timer = () => {
  const [timer, setTimer] = useState(600); // 10 minutes
  const [start, setStart] = useState(false);
  const [reset, setReset] = useState(false);
  const firstStart: any = useRef(true);
  const tick: any = useRef();

  // const [audio] = useState(
  //   typeof Audio !== "undefined" &&
  //     new Audio(
  //       process.env.PUBLIC_URL +
  //         "/static/sound/mixkit-racing-countdown-timer-1051.mp3"
  //     )
  // );

  // const [startAudio] = useState(
  //   typeof Audio !== "undefined" &&
  //     new Audio(
  //       process.env.PUBLIC_URL +
  //         "/static/sound/mixkit-water-sci-fi-bleep-902.mp3"
  //     )
  // );

  // const [resetAudio] = useState(
  //   typeof Audio !== "undefined" &&
  //     new Audio(
  //       process.env.PUBLIC_URL + "/static/sound/mixkit-hard-click-1118.mp3"
  //     )
  // );

  // const PlayAudio = async () => {
  // };

  useEffect(() => {
    if (firstStart.current) {
      // console.log("first render, don't run useEffect for timer");
      firstStart.current = !firstStart.current;
      return;
    }
    // console.log("subsequent renders");
    // console.log(start);
    if (start) {
      tick.current = setInterval(() => {
        setTimer((timer) => timer - 1);
      }, 1000);
    } else {
      // console.log("clear interval");
      clearInterval(tick.current);
    }

    return () => clearInterval(tick.current);
  }, [start]);

  const toggleStart = () => {

    if (timer === 600) {
    }
    setReset(false);
    if (timer === 0) {
      setTimer(600);
    }
    setStart(!start);
  };

  const resetButton = () => {
    const element = document.getElementById("timer");
    element?.classList.remove("blink_me");

    setStart(false);
    setReset(true);
    setTimer(600);
  };

  const handleUserKeyPress = useCallback((event: any) => {
    const { key, keyCode } = event;
    if (keyCode === 33) {
      setStart(!start);
    }
    if (key === "0") {
      setTimer(600);
      const element = document.getElementById("timer");
      element?.classList.remove("blink_me");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const dispSecondsAsMins = (seconds: any) => {
    const mins = Math.floor(seconds / 60);
    const seconds_ = seconds % 60;
    // console.log(seconds_);
    // console.log(mins);

    if (start) {
      const element = document.getElementById("timer");
      element?.classList.remove("blink_me");
    }

    if (mins === -1 && seconds_ === -1) {
      const element = document.getElementById("timer");
      element?.classList.add("blink_me");
      setStart(false);
      setTimer(0);
      // PlayAudio();
    }
    return (
      (mins === 10 ? "" : "0") +
      mins.toString() +
      ":" +
      (seconds_ == -1 ? "00" : (seconds_ < 10 ? "0" : "") + seconds_.toString())
    );
  };

  let theme = createTheme({
    typography: {
      fontSize: 400,
      button: {
        fontSize: 90,
      },
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <Layout>
      <div className="Timer text-align-center">
        <Typography align="center" variant="h4" sx={{ mt: 1 }}>
          นาฬิกานับถอยหลัง 10 นาที
        </Typography>

        <ThemeProvider theme={theme}>
          <Typography
            id="timer"
            align="center"
            sx={{ mt: -15, mb: -10, color: "black", fontWeight: 400 }}
          >
            {dispSecondsAsMins(timer)}
          </Typography>
          <Box>
            <Button onClick={resetButton}> RESET </Button>
            <Button sx={{ mx: 10 }} onClick={toggleStart}>
              {" "}
              {!start ? "START" : "STOP"}
            </Button>
          </Box>
        </ThemeProvider>

      </div>
    </Layout>
  );
};

export default Timer;
