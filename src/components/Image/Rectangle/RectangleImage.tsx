interface props {
    ImgSrc: string;
}
export default function RectangleImage({ ImgSrc }: props) {
    return <img src={ImgSrc} alt="RoundImage" className="h-1/3 rounded-2xl mb-5"/>
}