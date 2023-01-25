import { Head } from "next/document";
import Footer from "../../components/Footer";
import MainSeries from "../../components/MainSeries";
import Nav from "../../components/Nav";

export default function Series(){
    return(
        <>
        <Nav/>
        <MainSeries/>
        <Footer/>
        </>
    )
}