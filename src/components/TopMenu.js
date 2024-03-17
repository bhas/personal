import { useContext } from "react";
import { SideMenuContext } from "../contexts/SideMenuContext";
import IconButton from "./ui/IconButton";
import { PDFDownloadLink, usePDF } from "@react-pdf/renderer";
import PdfResume from "../pdf/PdfResume";
import IconLink from "./ui/IconLink";

export default function TopMenu() {
  const [instance, update] = usePDF({ document: <PdfResume /> });
  const { setSideMenuOpen } = useContext(SideMenuContext);

  logPdfGeneration(instance);

  return (
    <div className="sticky top-0 flex flex-row bg-blue-600 justify-center z-20 drop-shadow-lg">
      <div className="flex-1 flex flex-row items-center px-4 p-2 sm:px-6 text-lg sm:text-xl lg:w-[1024px] lg:flex-initial text-white sm:text-white/80">
        <IconButton
          className="text-2xl mr-4"
          icon={"fa fa-bars"}
          onClick={() => setSideMenuOpen(true)}
        ></IconButton>
        <span className="text-white">Bjørn Vinther</span>
        <div className="flex-1"></div>
        <IconLink className="hover:text-white" icon={"fa fa-file-pdf"} href={instance.url} download="bjorn-resume.pdf">
          Get Resume
        </IconLink>
      </div>
    </div>
  );
}

function logPdfGeneration(instance) {
    if (instance.error) 
        console.error(instance.error);

    if (instance.loading) 
        console.log("Generating document...");

    if (instance.url && !instance.loading) 
        console.log("Completed document generation");
}