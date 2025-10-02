import axios from "axios";
import { IVolunteer } from "../api/types/IVolunteer";

export async function submitVolunteer(volunteer: IVolunteer, onComplete: (succeeded: boolean) => void) {
  try {
    await axios.post("/api/submit-volunteer", {
      volunteer
    })
    onComplete(true);
  } catch (_err) {
    onComplete(false);
  }
}
