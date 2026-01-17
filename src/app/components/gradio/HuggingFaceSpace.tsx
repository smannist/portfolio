import Typography from "@mui/material/Typography";

interface HuggingFaceSpaceProps {
  spaceUrl: string;
  title?: string;
}

const HuggingFaceSpace = ({
  spaceUrl,
  title = "Hugging Face Space"
}: HuggingFaceSpaceProps) => {
  const embedUrl = spaceUrl.endsWith("/")
    ? `${spaceUrl}embed`
    : `${spaceUrl}/embed`;

  return (
    <div
      style={{
        maxWidth: "700px",
        marginTop: "40px"
      }}
    >
      <Typography
        variant="h6"
        style={{ marginBottom: "16px" }}
      >
        {title}
      </Typography>
      <div
        style={{
          width: "100%",
          height: "600px",
          border: "1px solid #e0e0e0",
          borderRadius: "8px",
          overflow: "hidden",
          position: "relative"
        }}
      >
        <iframe
          src={embedUrl}
          style={{
            width: "100%",
            height: "100%",
            border: "none"
          }}
          title={title}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    </div>
  );
};

export default HuggingFaceSpace;
