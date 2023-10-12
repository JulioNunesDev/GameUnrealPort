export default function Iframe3D() {

    type FullscreenObject = {
        allowFullScreen: boolean;
        mozallowfullscreen: boolean;
        webkitallowfullscreen: boolean;
        allow: string;
    };
    const MyFrame: FullscreenObject = {
        allowFullScreen: true,
        mozallowfullscreen: true,
        webkitallowfullscreen: true,
        allow:"autoplay",
    }
  return (
    <div className="sketchfab-embed-wrapper">
      {" "}
      <iframe  {...MyFrame}
        title="Alissa"
        xr-spatial-tracking
        execution-while-out-of-viewport
        execution-while-not-rendered
      
        web-share
        width='100%'
        height='600px'
        src="https://sketchfab.com/models/24aae01ca3a64a8c9dfc232840c2542b/embed"
      ></iframe>
    </div>
  );

}
