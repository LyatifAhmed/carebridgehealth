import { redirect } from "next/navigation";

// Antalya coordination is temporarily paused. Restore the previous page when partnerships are confirmed.
export default function TreatmentInAntalyaPage() {
  redirect("/treatment-in-istanbul");
}
