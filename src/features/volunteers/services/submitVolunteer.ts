import axios from "axios";
import { IVolunteer } from "../types/IVolunteer";

export async function submitVolunteer(volunteer: IVolunteer) {
  try {
    await axios.post("/api/submit-volunteer", {
      volunteer
    }).catch(error => { throw error });
  } catch (_err) { return "Erro ao tentar enviar vormulário" }
}
