import Layout from "../../components/layout";

const PitchToPdf = () => {
  return (
    <Layout>
      <h1>Pitch to PDF</h1>
      <p>
        Startups are using <a href="https://pitch.com">pitch.com</a> more
        frequently for their pitch decks. As a fund, ideally, we are able to download an
        offline copy (in pdf format) to make it easy to upload to our internal
        system and to share with our team for review.
      </p>
      <p className="py-4">
        Someone created an <a href="https://github.com/mdesilva/DocSendDownloader">extension to download Docsend presentations</a> to pdf
        format, but no one had done it for pitch.com presentations. So I pulled
        one together.
      </p>
      <div>
        <div
          style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            src="https://www.loom.com/embed/30341bdd041a4834aa9c7c933cd59c6e"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
        <p className="my-4">Instructions to download and use are in the <a href="https://github.com/nicoalbanese/pitch-presentation-to-pdf">Github repo</a>.</p>
      </div>
    </Layout>
  );
};

export default PitchToPdf;
