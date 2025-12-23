import { IVolunteer } from "../types/IVolunteer";
import { http } from "@/services/http";

export async function submitVolunteer(volunteer: IVolunteer, onComplete: (succeeded: boolean) => void) {
  try {
    await http.post("/api/submit-volunteer", {
      volunteer
    })
    onComplete(true);
  } catch (_err) {
    onComplete(false);
  }
}
