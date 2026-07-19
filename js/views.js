const SUPABASE_URL = "https://aijsyzaqxzxeqqedioze.supabase.co";
const SUPABASE_PUBLIC_KEY = "sb_publishable_gC_eyhetBV8ccM4DD_1-mQ_D5C7AzPL";

async function loadCounter() {

    try {
        const response = await fetch(`${SUPABASE_URL}/rest/v1/visits?id=eq.1&select=total`, {
            headers: { apikey: SUPABASE_PUBLIC_KEY },
            method: "GET",
            mode: "cors",
            credentials: "omit",
            referrerPolicy: "no-referrer"
        });

        if (!response.ok) throw new Error(`Counter request failed (${response.status})`);

        const [data] = await response.json();
        const counter = document.getElementById("visitCount");
        if (counter && Number.isSafeInteger(data?.total) && data.total >= 0) {
            counter.textContent = String(data.total);
        }
    } catch (error) {
        console.error("No se pudo cargar el contador", error);
    }
}

loadCounter();
