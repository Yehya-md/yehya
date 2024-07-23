interface props  {
    name: string,
}
export default function Brand({name}:props) {
    return<p className="text-3xl md:text-5xl font-semibold m-3 md:m-5 cursor-pointer"><a href="#">{name}</a></p>
}