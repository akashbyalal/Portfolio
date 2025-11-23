import TiltedCard from "./reactbits/TiltedCard/TiltedCard";
import me from "./images/Mee.jpg"
function Intro() {
  return (
    <>
      <TiltedCard
        imageSrc= {me}
        altText="Akash Byalal"
        captionText="Akash Byalal"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="text-center tilted-card-demo-text"></p>
        }
      />
    </>
  );
}
export default Intro;
