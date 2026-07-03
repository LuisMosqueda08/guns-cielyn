const supabaseClient = window.supabase.createClient(
    "https://aijsyzaqxzxeqqedioze.supabase.co",
    "sb_publishable_gC_eyhetBV8ccM4DD_1-mQ_D5C7AzPL"
);

async function updateCounter() {

    const { data, error } = await supabaseClient
        .from("visits")
        .select("total")
        .eq("id", 1)
        .single();

    if (error) {
        console.error(error);
        return;
    }

    const newTotal = data.total + 1;

    const { error: updateError } = await supabaseClient
        .from("visits")
        .update({ total: newTotal })
        .eq("id", 1);

    if (updateError) {
        console.error(updateError);
        return;
    }

    document.getElementById("visitCount").textContent = newTotal;
}

updateCounter();