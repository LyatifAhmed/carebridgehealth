import InternationalPatientGuide from "../components/InternationalPatientGuide";
import { internationalGuideMetadata } from "../international-guides";

export const metadata = internationalGuideMetadata("canada");

export default function Page() { return <InternationalPatientGuide region="canada" />; }
