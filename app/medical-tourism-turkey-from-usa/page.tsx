import InternationalPatientGuide from "../components/InternationalPatientGuide";
import { internationalGuideMetadata } from "../international-guides";

export const metadata = internationalGuideMetadata("usa");

export default function Page() { return <InternationalPatientGuide region="usa" />; }
