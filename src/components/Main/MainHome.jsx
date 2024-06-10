import { SectionInf } from "../Section/SectionInf";
import { FloatButton } from "../Button/FloatButton";
import { SliderHome } from "../Section/SliderHome";
import { SectionInfCarr } from "../Section/SectionInfCarr";
import { InfiniteScroll } from "../Section/InfiniteScroll";
import { images } from "../../data/images";
import "./MainHome.css";

function MainHome() {
  return (
    <>
      <div className="content-home-conent">
        {/* <div className="container-inf-uni">
          <SectionInfCarr />
        </div> */}
        <div className="container-main--slider">
          <p className="text-black font-extrabold text-3xl w-8/10 m-auto mt-12">
            Carreras
          </p>
          <InfiniteScroll />
          <div className="w-8/10 m-auto mt-12">
            <h2 className="text-black font-extrabold text-3xl mb-8">Avisos</h2>
            <SliderHome>
              {images.map((image, index) => {
                return (
                  <img key={index} src={image.imgURL} alt={image.imgAlt} />
                );
              })}
            </SliderHome>
          </div>
        </div>
      </div>
    </>
  );
}

export { MainHome };
