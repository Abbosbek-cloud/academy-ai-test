import { Box, Button, Stack, styled, Typography } from "@mui/material";

export const StyledLinkComponent = styled("a")(({ theme }) => ({
  fontFamily: "Allerta Stencil",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "26px",
  color: "#fff",
  display: "inline-block",
  textTransform: "uppercase",
  cursor: "pointer",
  "&:hover": {
    color: "rgba(243, 2, 62, 1)",
  },
  "&:after": {
    display: "block",
    content: '""',
    marginTop: "6px",
    borderBottom: "solid 1px rgba(243, 2, 62, 1)",
    transform: "scaleX(0)",
    transition: "transform 500ms ease-in-out",
  },
  "&:hover:after": {
    color: "#000",
    transform: "scaleX(1)",
  },
  "&.activeLinkComp:after": {
    transformOrigin: "0% 50%",
  },
}));

export const StyledStack = styled(Stack)(() => ({
  borderBottom: "2px solid rgba(255, 255, 255, 1)",
}));

export const StyledImage = styled("img")(() => ({
  width: "50px",
  height: "50px",
}));

export const HeadTypo = styled(Typography)(({ textAlign }) => ({
  fontFamily: '"Laviossa RUS"',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "117.2%",
  textAlign,
  color: "#EAE9E9",
}));

export const InfoTypo = styled(Typography)(() => ({
  fontFamily: '"Laviossa RUS"',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "26px",
  lineHeight: "158.7%",
  textAlign: "center",
  color: "#EAE9E9",
  width: "50%",
  marginInline: "auto",
}));

export const InfoExtra = styled(Typography)(() => ({
  fontFamily: '"Laviossa RUS"',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "30px",
  lineHeight: "170.7%",
  textAlign: "left",
  color: "rgba(234, 233, 233, 1)",
  marginInline: "auto",
}));

export const StyledButtonContained = styled(Button)(() => ({
  border: "3px solid rgba(206, 51, 51, 1)",
  "&:hover": {
    background:
      "linear-gradient(87.05deg, #F4013D 17.99%, #F0073E 43%, #F1013B 68.01%, #D90E3C 93.02%)",
    boxShadow:
      "0px 3px 49px -3px rgba(226, 72, 72, 0.76), inset 0px -4px 0px #8F1919",
  },
  borderRadius: "20px",
  fontFamily: '"Laviossa RUS"',
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "22px",
  lineHeight: "158.7%",
  textAlign: "center",
  color: "#EAE9E9",
  padding: "36px 68px",
}));

export const StyledButtonOutlined = styled(StyledButtonContained)(() => ({
  border: "rgba(206, 51, 51, 1)",
}));

export const StyledImgWrapper = styled(Stack)(() => ({
  position: "relative",
}));

export const StyledRound = styled(Stack)(() => ({
  width: "180px",
  height: "180px",
  borderRadius: "50%",
  background: "linear-gradient(180deg, #F3023E 0%, #F0073E 50%, #A10C2E 100%)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const CardTypo = styled(Typography)(() => ({
  fontFamily: "'Laviossa RUS'",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "25px",
  lineHeight: "150%",
  textAlign: "center",
  color: "#fff",
}));

export const CartWrapper = styled(Stack)(() => ({
  background:
    "linear-gradient(145.17deg, rgba(196, 51, 51, 0.0864) 18.76%, rgba(255, 255, 255, 0.0576) 77.74%)",
  borderRadius: "20px",
}));

export const GeneralHeaderComponent = styled(Typography)(() => ({
  fontFamily: "'Laviossa RUS'",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: "60px",
  lineHeight: "117.2%",
  color: "#FFFFFF",
}));

export const StyledCourseCard = styled(Box)(() => ({
  width: "100%",
  padding: "10px",
  border: "1px solid rgba(238, 4, 59, 1)",
  borderRadius: "20px",
}));

export const CourseTypo = styled(Typography)(({ fontSize }) => ({
  fontFamily: "'Laviossa RUS'",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize,
  lineHeight: "117.2%",
  background: "linear-gradient(0deg, #FFFFFF, #FFFFFF)",
  "-webkit-background-clip": "text",
  "-webkit-text-fill-color": "transparent",
  backgroundClip: "text",
  "text-fill-color": "transparent",
}));
